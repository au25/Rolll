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
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
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
  location_errorText: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "13px",
    color: "rgba(204, 0, 0, 1)",
    margin: "3px 0 0px 0px",
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
    MuiNativeSelect: {
      root: {
        margin: "15px 0 10px 0",
        padding: "0 0 0 11px",
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
    shop_cityArea: "",
    shop_number: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
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

  const db = firebase.firestore();
  let countryArray = [];
  let regionArray = [];
  let cityArray = [];
  let cityAreaArray = [];

  useEffect(() => {
    checkValidationRule();

    const fetchCountryInfo = async () => {
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
    fetchCountryInfo();
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
              shop_area: registrationValue.shop_cityArea
            },
          ],
          first_name: registrationValue.first_name,
          last_name: registrationValue.last_name,
          phone_number: registrationValue.phone_number,
          email: registrationValue.email,
          is_approve: "false",
          gift: [
            {
              gift_name: "Essential Template",
              gift_intro:
                "This template is suitable for long term usage.  Ideal for attracting and retaining customers!",
              image_url:
                "https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fred_gift_box.png?alt=media&token=ace05975-618b-4e8d-b9fd-a7d83736e5eb",
              gift_description: {
                chance: [0.02, 0.08, 0.5, 0.4],
                reward: ["Free Drink", "15% Off", "10% Off", "Try Again"],
                expire_time: [5, 1440, 1440, 1440],
              },
            },
            {
              gift_name: "Winner Template",
              gift_intro:
                "This template is perfect for celebratory events.  Let the community know you are there, make an impact!",
              image_url:
                "https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fblue_gift_box2.png?alt=media&token=a1e7a0ab-bf4e-4c07-8ca2-d4a841aa06b9",
              gift_description: {
                chance: [0.1, 0.3, 0.6],
                reward: ["Free Drink", "50% discount", "25% discount"],
                expire_time: [5, 5, 5],
              },
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
  const handleCountryChange = async (e) => {
    setRegistrationValue({
      ...registrationValue,
      shop_country: e.target.value,
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
      city: false,
      cityArea: false,
    });
  };

  const handleRegionChange = async (e) => {
    setRegistrationValue({ ...registrationValue, shop_region: e.target.value });
    const cityCollection = await db
      .collection("country")
      .doc(registrationValue.shop_country)
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
    setLocationValid({ ...locationValid, region: true });
  };

  const handleCityChange = async (e) => {
    setRegistrationValue({ ...registrationValue, shop_city: e.target.value });
    const cityAreaCollection = await db
      .collection("country")
      .doc(registrationValue.shop_country)
      .collection("region")
      .doc(registrationValue.shop_region)
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
    setLocationValid({ ...locationValid, city: true });
  };

  const handleCityAreaChange = async (e) => {
    setRegistrationValue({
      ...registrationValue,
      shop_cityArea: e.target.value,
    });
    setLocationValid({ ...locationValid, cityArea: true });
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
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>Shop Country</InputLabel>
              <NativeSelect
                className={classes.citySelect_input}
                defaultValue=""
                value={registrationValue.shop_country}
                onChange={(e) => handleCountryChange(e)}
              >
                <option value="" disabled></option>
                {locationInfo
                  ? locationInfo.countryArray.map((country) => {
                      return <option value={country}>{country}</option>;
                    })
                  : null}
              </NativeSelect>
            </FormControl>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>Shop Region</InputLabel>
              <NativeSelect
                className={classes.citySelect_input}
                defaultValue=""
                value={registrationValue.shop_region}
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
              <InputLabel>Shop City</InputLabel>
              <NativeSelect
                className={classes.citySelect_input}
                defaultValue=""
                value={registrationValue.shop_city}
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
              <InputLabel>Shop Area</InputLabel>
              <NativeSelect
                className={classes.citySelect_input}
                defaultValue=""
                value={registrationValue.shop_cityArea}
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
        <div className={classes.signupPolicyContainer}>
          By signing up, you agree with the Terms of Service & Privacy Policy
        </div>
      </div>
    </ThemeProvider>
  );
};

export default withRouter(SignUp);
