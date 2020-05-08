import React, { useState, useContext, useEffect } from "react";
import {
  withStyles,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import "./userSignupForm.css";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Div100vh from "react-div-100vh";
// Required for side-effects
require("firebase/functions");

/**
 * CSS of the page
 */
const useStyles = makeStyles(() => ({
  root: {
    margin: "0 0 32px 0",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  formContainer: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },
  countryOuterContainer: {
    margin: "0 0 28px 0",
  },
  countryContainer: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
  },
  countryErrorMessage: {
    fontSize: "12.5px",
    color: "#f44336",
    padding: "5px 0 0 14px",
    fontFamily: "CoreSans, sans-serif",
  },
  regionErrorMessage: {
    fontSize: "12.5px",
    color: "#f44336",
    padding: "5px 0 0 14px",
    fontFamily: "CoreSans, sans-serif",
  },
  regionOuterContainer: {
    margin: "0 0 28px 0",
  },
  regionContainer: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
  },
  passwordContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
      },
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0",
      },
    },
    MuiButton: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        height: "60px",
      },
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0",
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "0 0 28px 0",
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px"
      }
    },
  },
});

/**
 * Currently unused validation styles
 */
const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

/**
 * This is the signup component
 * History from withRouter to navigate after signing up
 * @param {history} param0
 */
const SignUp = ({ history }) => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [registrationValue, setRegistrationValue] = useState({
    password: "",
    confirmPassword: "",
    user_email: "",
    user_city: "",
    user_region: "",
    user_country: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [countryErrorState, setCountryErrorState] = useState(null);
  const [regionErrorState, setRegionErrorState] = useState(null);

  useEffect(() => {
    checkValidationRule();
  }, [registrationValue.confirmPassword]);

  const checkValidationRule = () => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== registrationValue.password) {
        console.log(value + "     " + registrationValue.password);
        return false;
      }
      return true;
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validateCountry = (e) => {
    setRegistrationValue({ ...registrationValue, user_country: e });
  };

  const validateRegion = (e) => {
    setRegistrationValue({ ...registrationValue, user_region: e });
  };

  const validateCountryRegion = () => {
    if (registrationValue.user_country == "") {
      setCountryErrorState(true);
    } else {
      setCountryErrorState(false);
    }

    if (registrationValue.user_region == "") {
      setRegionErrorState(true);
    } else {
      setRegionErrorState(false);
    }
  };

  /**
   * This creates authentication user and also database user with the same unique ID
   * generated by Firebase
   */
  async function accountSignup(e) {
    const db = firebase.firestore();
    try {
      const credential = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          registrationValue.user_email,
          registrationValue.password
        );

      credential.user.sendEmailVerification();

      await db.collection("user").doc(credential.user.uid).set({
        user_email: registrationValue.user_email,
        user_city: registrationValue.user_city,
        user_region: registrationValue.user_region,
        user_country: registrationValue.user_country,
        claimedGift: [],
      });

      const addUserRole = firebase.functions().httpsCallable("addUserRole");
      addUserRole({ email: registrationValue.user_email }).then((result) => {
        console.log(result);
      });

      // Redirect user to user home page after signing up
      // history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <ValidatorForm
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={accountSignup}
      >
        <div className={classes.formContainer}>
          <TextValidator
            id="filled-basic"
            label="Email"
            variant="filled"
            value={registrationValue.user_email}
            validators={["required", "isEmail"]}
            errorMessages={["Email address is requred", "Email address is not valid"]}
            onChange={(e) =>
              setRegistrationValue({
                ...registrationValue,
                user_email: e.target.value,
              })
            }
          />
          <div className={classes.passwordContainer}>
            <TextValidator
              id="filled-basic"
              label="Password"
              variant="filled"
              type={showPassword ? "text" : "password"}
              value={registrationValue.password}
              validators={["required"]}
              errorMessages={["Password is required"]}
              onChange={(e) =>
                setRegistrationValue({
                  ...registrationValue,
                  password: e.target.value,
                })
              }
            />
            <IconButton
              className={classes.passwordIcon}
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </div>
          <div className={classes.passwordContainer}>
            <TextValidator
              id="filled-basic"
              label="Repeat Password"
              variant="filled"
              type={showPassword ? "text" : "password"}
              value={registrationValue.confirmPassword}
              validators={["isPasswordMatch", "required"]}
              errorMessages={[
                "Password doesn't match",
                "Confirm password is required",
              ]}
              onChange={(e) =>
                setRegistrationValue({
                  ...registrationValue,
                  confirmPassword: e.target.value,
                })
              }
            />
            <IconButton
              className={classes.passwordIcon}
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </div>
          <TextValidator
            id="filled-basic"
            label="City"
            variant="filled"
            value={registrationValue.user_city}
            validators={["required"]}
            errorMessages={["City is required"]}
            onChange={(e) =>
              setRegistrationValue({
                ...registrationValue,
                user_city: e.target.value,
              })
            }
          />
          <div className={classes.countryOuterContainer}>
            <div className={classes.countryContainer}>
              <CountryDropdown
                required
                value={registrationValue.user_country}
                onChange={(country) =>
                  setRegistrationValue({
                    ...registrationValue,
                    user_country: country,
                  })
                }
                whitelist={["CA", "US"]}
                priorityOptions={["CA", "US"]}
                classes="userSignup_selectCountry"
              />
            </div>
            <div>
              {countryErrorState && registrationValue.user_country == "" ? (
                <div className={classes.countryErrorMessage}>
                    Select a country
                </div>
              ) : null}
            </div>
          </div>
          <div className={classes.regionOuterContainer}>
            <div className={classes.regionContainer}>
              <RegionDropdown
                required
                disableWhenEmpty={true}
                country={registrationValue.user_country}
                value={registrationValue.user_region}
                disableWhenEmpty={true}
                onChange={(region) =>
                  setRegistrationValue({
                    ...registrationValue,
                    user_region: region,
                  })
                }
                classes="userSignup_selectRegion"
              />
            </div>
            <div>
              {regionErrorState && registrationValue.user_region == "" ? (
                <div className={classes.regionErrorMessage}>
                  Select a region
                </div>
              ) : null}
            </div>
          </div>
          <Button
            className={classes.userSignup_saveButton}
            type="submit"
            onClick={() => validateCountryRegion()}
          >
            SIGN UP
          </Button>
        </div>
      </ValidatorForm>
    </ThemeProvider>
  );
};

export default withRouter(SignUp);
