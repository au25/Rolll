import React, { useState, useEffect } from "react";
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
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Navigation from "../landingPageNavigation";
// Required for side-effects
require("firebase/functions");

/**
 * CSS of the page
 */
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const useStyles = makeStyles(() => ({
  signupFormContainer: {
    display: "flex",
    flexDirection: "column",
  },
  woolooWithUsText: {
    fontSize: "14px",
    fontSize: "16px",
    margin: "80px 0 15px 0",
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
  },
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
  outerFormContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  borderBottom: {
    padding: "4px 0 0 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
    width: "18%",
  },
  shopInfoTitle: {
    fontSize: "16px",
    margin: "40px 0 50px 0",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  managerInfoBorderBottom: {
    padding: "4px 0 0 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
    width: "13%",
  },
  managerInfoTitleContainer: {
    fontSize: "16px",
    margin: "40px 0 50px 0",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signupPolicyContainer: {
    width: "70%",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    fontSize: "14px",
    textAlign: "center",
    margin: "0 0 80px 0",
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
        fontSize: "12px",
      },
    },
  },
});

/**
 * This is the signup component
 * History from withRouter to navigate after signing up
 * @param {history} param0
 */
const SignUp = ({ history }) => {
  const [giftRecord, setGiftRecord] = useState({});
  const classes = useStyles();
  const [registrationValue, setRegistrationValue] = useState({
    password: "",
    confirmPassword: "",
    shop_name: "",
    shop_address: "",
    shop_city: "",
    shop_region: "", //province or state or territory
    shop_country: "",
    shop_number: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [countryErrorState, setCountryErrorState] = useState(null);
  const [regionErrorState, setRegionErrorState] = useState(null);

  useEffect(() => {
    checkValidationRule();
  }, [registrationValue.confirmPassword]);

  const checkValidationRule = () => {
    console.log("checking password");
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

  /**
   * This creates authentication user and also database user with the same unique ID
   * generated by Firebase
   */
  async function accountSignup(e) {
    const db = firebase.firestore();
    console.log(registrationValue);
    try {
      const credential = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          registrationValue.email,
          registrationValue.password
        );
      await db
        .collection("businessUser")
        .doc(credential.user.uid)
        .set({
          shop: [
            {
              shop_name: registrationValue.shop_name,
              shop_address: registrationValue.shop_address,
              shop_city: registrationValue.shop_city,
              shop_region: registrationValue.shop_region,
              shop_country: registrationValue.shop_country,
            },
          ],
          first_name: registrationValue.first_name,
          last_name: registrationValue.last_name,
          phone_number: registrationValue.phone_number,
          email: registrationValue.email,
          is_approve: "false",
          gift: [
            {
              gift_name: "defaultGift-template1",
            },
            {
              gift_name: "defaultGift-template2",
            },
          ],
        });
    } catch (error) {
      console.log(error);
    }

    // Adds "shop role" to account after account creation
    const addBusinessUserRole = await firebase
      .functions()
      .httpsCallable("addBusinessUserRole");
    addBusinessUserRole({ email: registrationValue.email }).then((result) => {
      console.log(result);
    });

    // history.push("/businessHome");
  }

  const validateCountryRegion = () => {
    if (registrationValue.shop_country == "") {
      setCountryErrorState(true);
    } else {
      setCountryErrorState(false);
    }

    if (registrationValue.shop_region == "") {
      setRegionErrorState(true);
    } else {
      setRegionErrorState(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <div className={classes.outerFormContainer}>
        <div className={classes.woolooWithUsText}>
          We just need a few information before you can wooloo your business.
        </div>
        <div className={classes.shopInfoTitle}>
          <div className={classes.borderBottom}></div>
          <div>Shop Information</div>
          <div className={classes.borderBottom}></div>
        </div>
        <ValidatorForm
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={accountSignup}
        >
          <div className={classes.formContainer}>
            <TextValidator
              id="filled-basic"
              label="Shop Name"
              variant="filled"
              value={registrationValue.shop_name}
              validators={["required"]}
              errorMessages={["Shop name is requred"]}
              onChange={(e) =>
                setRegistrationValue({
                  ...registrationValue,
                  shop_name: e.target.value,
                })
              }
            />
            <TextValidator
              id="filled-basic"
              label="Shop Address"
              variant="filled"
              value={registrationValue.shop_address}
              validators={["required"]}
              errorMessages={["Shop address is requred"]}
              onChange={(e) =>
                setRegistrationValue({
                  ...registrationValue,
                  shop_address: e.target.value,
                })
              }
            />
            <TextValidator
              id="filled-basic"
              label="Shop City"
              variant="filled"
              value={registrationValue.shop_city}
              validators={["required"]}
              errorMessages={["Shop city is requred"]}
              onChange={(e) =>
                setRegistrationValue({
                  ...registrationValue,
                  shop_city: e.target.value,
                })
              }
            />
            <div className={classes.countryOuterContainer}>
              <div className={classes.countryContainer}>
                <CountryDropdown
                  required
                  value={registrationValue.shop_country}
                  onChange={(country) =>
                    setRegistrationValue({
                      ...registrationValue,
                      shop_country: country,
                    })
                  }
                  whitelist={["CA", "US"]}
                  priorityOptions={["CA", "US"]}
                  classes="userSignup_selectCountry"
                />
              </div>
              <div>
                {countryErrorState && registrationValue.shop_country == "" ? (
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
                  country={registrationValue.shop_country}
                  value={registrationValue.shop_region}
                  disableWhenEmpty={true}
                  onChange={(region) =>
                    setRegistrationValue({
                      ...registrationValue,
                      shop_region: region,
                    })
                  }
                  classes="userSignup_selectRegion"
                />
              </div>
              <div>
                {regionErrorState && registrationValue.shop_region == "" ? (
                  <div className={classes.regionErrorMessage}>
                    Select a region
                  </div>
                ) : null}
              </div>
            </div>
            <div className={classes.managerInfoTitleContainer}>
              <div className={classes.managerInfoBorderBottom}></div>
              <div>Manager Information</div>
              <div className={classes.managerInfoBorderBottom}></div>
            </div>
            <TextValidator
              id="filled-basic"
              label="First Name"
              variant="filled"
              value={registrationValue.first_name}
              validators={["required"]}
              errorMessages={["First name is requred"]}
              onChange={(e) =>
                setRegistrationValue({
                  ...registrationValue,
                  first_name: e.target.value,
                })
              }
            />
            <TextValidator
              id="filled-basic"
              label="Last Name"
              variant="filled"
              value={registrationValue.last_name}
              validators={["required"]}
              errorMessages={["Last name is requred"]}
              onChange={(e) =>
                setRegistrationValue({
                  ...registrationValue,
                  last_name: e.target.value,
                })
              }
            />
            <TextValidator
              id="filled-basic"
              label="Phone number"
              variant="filled"
              value={registrationValue.phone_number}
              validators={["required"]}
              errorMessages={["Phone number is requred"]}
              onChange={(e) =>
                setRegistrationValue({
                  ...registrationValue,
                  phone_number: e.target.value,
                })
              }
            />
            <div className={classes.managerInfoTitleContainer}>
              <div className={classes.managerInfoBorderBottom}></div>
              <div>Account Information</div>
              <div className={classes.managerInfoBorderBottom}></div>
            </div>
            <TextValidator
              id="filled-basic"
              label="Email Address"
              variant="filled"
              value={registrationValue.email}
              validators={["required"]}
              errorMessages={["Email address is requred"]}
              onChange={(e) =>
                setRegistrationValue({
                  ...registrationValue,
                  email: e.target.value,
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
            <Button
              className={classes.userSignup_saveButton}
              type="submit"
              onClick={() => validateCountryRegion()}
            >
              SIGN UP
            </Button>
          </div>
        </ValidatorForm>
        <div className={classes.signupPolicyContainer}>
          By signing up, you agree with the Terms of Service & Privacy Policy
        </div>
      </div>
    </ThemeProvider>
  );
};

export default withRouter(SignUp);
