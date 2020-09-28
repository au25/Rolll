import React, { useState, useContext, useEffect } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
require("firebase/functions");
// const admin = require("firebase-admin");

// admin.initializeApp(firebase.functions.config().firebase);

/**
 * CSS of the page
 */
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // margin: "80px 0 0 0",
    maxWidth: "415px",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "45px 0",
    // height: "75%",
    // maxHeight: "600px",
    [theme.breakpoints.down("sm")]: {
      // height: "100vh",
      // maxHeight: "100vh",
      borderRadius: "0",
      justifyContent: "center",
      backgroundColor: "white",
      padding: "0 0 15px 0",
    },
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
  location_errorText: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "13px",
    color: "rgba(204, 0, 0, 1)",
    margin: "3px 0 0px 0px",
  },
  rollWithUsText: {
    fontSize: "14px",
    fontSize: "16px",
    margin: "80px 0 35px 0",
    display: "flex",
    // width: "70%",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  signupMsg_text: {
    fontFamily: "CoreSans, sans-serif",
    justifyContent: "center",
    color: "red",
    margin: "0 0 25px 0",
    fontSize: "14px",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(205, 239, 245, 0.4)",
        "&$focused": {
          backgroundColor: "rgba(205, 239, 245, 0.8) !important",
        },
      },
      underline: {
        "&$focused": {
          // borderBottom: "1px solid black",
        },
        "&:after": {
          borderBottom: "2px solid black",
        },
      },
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0",
      },
    },
    MuiButton: {
      root: {
        backgroundColor: "#4caf50",
        color: "white",
        height: "60px",
        "&$disabled": {
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50",
          },
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "black",
        },
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
    MuiNativeSelect: {
      root: {
        margin: "15px 0 10px 0",
        padding: "0 0 0 11px",
      },
      select: {
        "&$select": {
          backgroundColor: "transparent",
        },
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
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [registrationValue, setRegistrationValue] = useState({
    password: "",
    confirmPassword: "",
    user_email: "",
    user_cityArea: "",
    user_city: "",
    user_region: "",
    user_country: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [locationInfo, setLocationInfo] = useState();
  const [selectDisable, setSelectDisable] = useState({
    regionDisable: true,
    cityDisable: true,
    cityAreaDisable: true,
  });
  const [locationValid, setLocationValid] = useState({
    cityArea: true,
    city: true,
    region: true,
    country: false,
  });
  const [signupMsg, setSignupMsg] = useState("");
  const [loginValueCSS, setLoginValueCSS] = useState(false);
  const [locationEmpty, setLocationEmpty] = useState(true);

  const db = firebase.firestore();
  let countryArray = [];
  let regionArray = [];
  let cityArray = [];
  let cityAreaArray = [];

  useEffect(() => {
    checkValidationRule();

    const fetchCountryInfo = async () => {
      // console.log("this is the profile page");
      const countryCollection = await db.collection("country").get();
      countryCollection.docs.map((country) => countryArray.push(country.id));
      setLocationInfo({
        ...locationInfo,
        countryArray: countryArray,
        regionArray: regionArray,
        cityArray: cityArray,
        cityAreaArray: cityAreaArray,
      });
    };
    if (locationEmpty) {
      fetchCountryInfo();
    }
  }, [registrationValue.confirmPassword]);

  const checkValidationRule = () => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== registrationValue.password) {
        // console.log(value + "     " + registrationValue.password);
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
    try {
      const credential = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          registrationValue.user_email,
          registrationValue.password
        );

      // credential.user.sendEmailVerification();

      await db.collection("user").doc(credential.user.uid).set({
        user_email: registrationValue.user_email,
        user_city: registrationValue.user_city,
        user_region: registrationValue.user_region,
        user_country: registrationValue.user_country,
        user_cityArea: registrationValue.user_cityArea,
        claimedGift: [],
      });

      const addUserRole = firebase.functions().httpsCallable("addUserRole");
      addUserRole({ email: registrationValue.user_email }).then((result) => {
        // console.log(result);
      });

      // Redirect user to user home page after signing up
      history.push("/");
    } catch (error) {
      setLoginValueCSS(true);
      setSignupMsg(error.message);
    }
  }

  const handleCountryChange = async (e) => {
    setLocationEmpty(false);
    setRegistrationValue({
      ...registrationValue,
      user_country: e.target.value,
    });
    const regionCollection = await db
      .collection("country")
      .doc(e.target.value)
      .collection("region")
      .get();
    regionCollection.docs.map((region) => regionArray.push(region.id));
    setLocationInfo({ ...locationInfo, regionArray: regionArray });
    setSelectDisable({
      ...selectDisable,
      regionDisable: false,
      cityDisable: true,
      cityAreaDisable: true,
    });
    setLocationValid({
      ...locationValid,
      country: true,
      region: false,
      city: true,
      cityArea: true,
    });
  };

  const handleRegionChange = async (e) => {
    setRegistrationValue({ ...registrationValue, user_region: e.target.value });
    const cityCollection = await db
      .collection("country")
      .doc(registrationValue.user_country)
      .collection("region")
      .doc(e.target.value)
      .collection("city")
      .get();
    cityCollection.docs.map((city) => cityArray.push(city.id));
    setLocationInfo({ ...locationInfo, cityArray: cityArray });
    setSelectDisable({
      ...selectDisable,
      cityDisable: false,
      cityAreaDisable: true,
    });
    setLocationValid({ ...locationValid, region: true, city: false });
  };

  const handleCityChange = async (e) => {
    setRegistrationValue({ ...registrationValue, user_city: e.target.value });
    const cityAreaCollection = await db
      .collection("country")
      .doc(registrationValue.user_country)
      .collection("region")
      .doc(registrationValue.user_region)
      .collection("city")
      .doc(e.target.value)
      .collection("area")
      .get();
    cityAreaCollection.docs.map((cityArea) => cityAreaArray.push(cityArea.id));
    setLocationInfo({ ...locationInfo, cityAreaArray: cityAreaArray });
    setSelectDisable({
      ...selectDisable,
      cityAreaDisable: false,
    });
    setLocationValid({ ...locationValid, city: true, cityArea: false });
  };

  const handleCityAreaChange = async (e) => {
    setRegistrationValue({
      ...registrationValue,
      user_cityArea: e.target.value,
    });
    setLocationValid({ ...locationValid, cityArea: true });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.rollWithUsText}>
        We just need some information to get you rolling.
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
            label="Email"
            variant="filled"
            value={registrationValue.user_email}
            validators={["required", "isEmail"]}
            errorMessages={[
              "Email address is requred",
              "Email address is not valid",
            ]}
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
          <div>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>Country</InputLabel>
              <NativeSelect
                className={classes.citySelect_input}
                defaultValue=""
                value={registrationValue.user_country}
                onChange={(e) => handleCountryChange(e)}
              >
                <option value="" disabled></option>
                {locationInfo
                  ? locationInfo.countryArray.map((country) => {
                      return <option value={country}>{country}</option>;
                    })
                  : null}
              </NativeSelect>
              {locationValid.country ? null : (
                <div className={classes.location_errorText}>
                  Select a Country
                </div>
              )}
            </FormControl>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>Region</InputLabel>
              <NativeSelect
                className={classes.citySelect_input}
                defaultValue=""
                value={registrationValue.user_region}
                onChange={(e) => handleRegionChange(e)}
                disabled={selectDisable.regionDisable}
              >
                <option value="" disabled></option>
                {locationInfo
                  ? locationInfo.regionArray.map((region) => {
                      return <option value={region}>{region}</option>;
                    })
                  : null}
              </NativeSelect>
              {locationValid.region ? null : (
                <div className={classes.location_errorText}>
                  Select a Region
                </div>
              )}
            </FormControl>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>City</InputLabel>
              <NativeSelect
                className={classes.citySelect_input}
                defaultValue=""
                value={registrationValue.user_city}
                onChange={(e) => handleCityChange(e)}
                disabled={selectDisable.cityDisable}
              >
                <option value="" disabled></option>
                {locationInfo
                  ? locationInfo.cityArray.map((city) => {
                      return <option value={city}>{city}</option>;
                    })
                  : null}
              </NativeSelect>
              {locationValid.city ? null : (
                <div className={classes.location_errorText}>Select a City</div>
              )}
            </FormControl>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>Area</InputLabel>
              <NativeSelect
                className={classes.citySelect_input}
                defaultValue=""
                value={registrationValue.user_cityArea}
                onChange={(e) => handleCityAreaChange(e)}
                disabled={selectDisable.cityAreaDisable}
              >
                <option value="" disabled></option>
                {locationInfo
                  ? locationInfo.cityAreaArray.map((area) => {
                      return <option value={area}>{area}</option>;
                    })
                  : null}
              </NativeSelect>
              {locationValid.cityArea ? null : (
                <div className={classes.location_errorText}>Select an Area</div>
              )}
            </FormControl>
          </div>
          <div
            className={classes.signupMsg_text}
            style={{ display: loginValueCSS ? "flex" : "none" }}
          >
            {signupMsg}
          </div>
          <Button
            className={classes.userSignup_saveButton}
            type="submit"
            disabled={
              !(
                locationValid.cityArea &&
                locationValid.city &&
                locationValid.region &&
                locationValid.country
              )
            }
          >
            SIGN UP
          </Button>
        </div>
      </ValidatorForm>
    </ThemeProvider>
  );
};

export default withRouter(SignUp);
