import React, { useEffect, useContext, useState } from "react";
import { setupUI } from "../setupUI";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessNavigation from "./businessNavigation";
import usePlacesAutocomplete, {
  getDetails,
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import TextField from "@material-ui/core/TextField";
import {
  withStyles,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

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
  rollWithUsTextUsText: {
    fontSize: "14px",
    fontSize: "16px",
    margin: "80px 0 20px 0",
    display: "flex",
    // width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  shopInfo_container: {
    fontSize: "15px",
    margin: "0 0 0 15px",
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "CoreSans, sans-serif",
  },
  root: {
    margin: "0 0 128px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    width: "100%",
    // height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(241, 241, 241, 0.7)",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "white",
    },
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
    margin: "30px 0 80px 0",
    letterSpacing: "0.5px",
    [theme.breakpoints.down("sm")]: {
      width: "290px",
      margin: "0 0 80px 0",
    },
  },
  location_errorText: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "13px",
    color: "rgba(204, 0, 0, 1)",
    margin: "3px 0 0px 0px",
  },
  tos_text: {
    textDecoration: "none",
  },
  pp_text: {
    textDecoration: "none",
  },
  form_container: {
    width: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // margin: "80px 0 0 0",
    maxWidth: "415px",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "15px 0",
    // height: "75%",
    // maxHeight: "600px",
    [theme.breakpoints.down("sm")]: {
      // height: "100vh",
      // maxHeight: "100vh",
      borderRadius: "0",
      justifyContent: "center",
      backgroundColor: "white",
      margin: "0 0 0 0",
      width: "100%",
      padding: "0",
    },
  },
  signupMsg_text: {
    fontFamily: "CoreSans, sans-serif",
    justifyContent: "center",
    color: "red",
    margin: "0 0 25px 0",
    fontSize: "14px",
  },
  userSignup_saveButton: {
    "&:hover": {
      backgroundColor: "#439a47 !important", //dark green
    },
  },
  searchBar_container: {
    width: "70%",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  searchInput: {
    width: "100%",
    height: "60px",
    border: "none",
    outline: "none",
    fontWeight: "bold",
    fontFamily: "CoreSans, sans-serif",
    fontSize: "16px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
  },
  shopName_input: {
    margin: "28px 0 28px 0",
  },
  suggestionList_container: {
    listStyleType: "none",
    width: "100%",
    padding: "5px 0 8px 0",
    border: "1px solid rgba(0, 0, 0, 0.4)"
  },
  listItems: {
    padding: "6px 0 6px 10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(205, 239, 245, 0.4)",
    },
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
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "black",
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

export default function () {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const [registrationValue, setRegistrationValue] = useState({
    password: "",
    confirmPassword: "",
    shop_name: "",
    shop_streetNumber: "",
    shop_address: "",
    shop_city: "",
    shop_region: "", //province or state or territory
    shop_country: "",
    shop_cityArea: "",
    shop_number: "",
    shop_postalCode: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });
  const [signupMsg, setSignupMsg] = useState("");
  const [loginValueCSS, setLoginValueCSS] = useState(false);
  const [addr_info, setAddr_info] = useState({
    postal_code: "lol",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    console.log("Registeation values: ", registrationValue);
  }, [registrationValue]);

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
              shop_area: registrationValue.shop_cityArea,
            },
          ],
          first_name: registrationValue.first_name,
          last_name: registrationValue.last_name,
          phone_number: registrationValue.phone_number,
          email: registrationValue.email,
          is_approve: "false",
          gift: [
            {
              gift_name: "Doubly For Two",
              gift_intro:
                "This template is suitable for long term usage.  Ideal for attracting and retaining customers!",
              image_url: "img/red_gift_box.png",
              gift_description: {
                chance: [0.02, 0.08, 0.5, 0.4],
                reward: ["Free Drink", "15% Off", "10% Off", "Try Again"],
                expire_time: [5, 5, 5, 5],
              },
            },
            {
              gift_name: "Winner Template",
              gift_intro:
                "This template is perfect for celebratory events.  Let the community know you are there, make an impact!",
              image_url: "img/blue_gift_box2.png",
              gift_description: {
                chance: [0.1, 0.3, 0.6],
                reward: ["Free Drink", "50% Off", "25% Off"],
                expire_time: [5, 5, 5],
              },
            },
          ],
        });

      // Adds "shop role" to account after account creation
      try {
        const addBusinessUserRole = await firebase
          .functions()
          .httpsCallable("addBusinessUserRole");
        addBusinessUserRole({ email: registrationValue.email }).then(
          (result) => {
            console.log(result);
            history.push("/businessPending");
          }
        );
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      setLoginValueCSS(true);
      setSignupMsg(error.message);
    }
  }

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = (addr_description) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(addr_description.description, false);
    clearSuggestions();

    getDetails({ placeId: addr_description.place_id })
      .then((details) => {
        console.log("Details: ", details);

        const temp_addressInfo = {
          shop_streetNumber: "",
          shop_address: "",
          shop_city: "",
          shop_region: "", //province or state or territory
          shop_country: "",
          shop_cityArea: "",
          shop_postalCode: "",
        };

        details.address_components.map((address_info) => {
          console.log(Object.values(address_info.types));
          if (address_info.types[0] == "postal_code") {
            temp_addressInfo.shop_postalCode = address_info.long_name;
          } else if (address_info.types[0] == "country") {
            temp_addressInfo.shop_country = address_info.long_name;
          } else if (address_info.types[0] == "street_number") {
            temp_addressInfo.shop_streetNumber = address_info.long_name;
          } else if (address_info.types[0] == "route") {
            temp_addressInfo.shop_address = address_info.long_name;
          } else if (address_info.types[0] == "locality") {
            temp_addressInfo.shop_city = address_info.long_name;
          } else if (address_info.types[0] == "administrative_area_level_1") {
            temp_addressInfo.shop_region = address_info.short_name;
          } else {
            console.log("Error, no value found in sign up form 2.");
          }

          //   let test = Object.values(address_info.types)[0];
          //   setAddr_info({ ...addr_info, [test]: address_info.long_name });
        });

        //Merging Google address info with registrationValue state
        setRegistrationValue({
          ...registrationValue,
          ...temp_addressInfo,
          shop_name: details.name,
          phone_number: details.formatted_phone_number,
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

    // Get latitude and longitude via utility functions
    getGeocode({ placeId: addr_description.place_id })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          className={classes.listItems}
          key={place_id}
          onClick={handleSelect(suggestion, place_id)}
        >
          <div>
            <strong>{main_text}</strong>
          </div>
          <div>
            <small>{secondary_text}</small>
          </div>
        </li>
      );
    });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className={classes.outerFormContainer}>
          <div className={classes.rollWithUsTextUsText}>
            We just need a few information to get you rollling.
          </div>
          <div className={classes.form_container}>
            <div className={classes.shopInfoTitle}>
              <div className={classes.borderBottom}></div>
              <div>Shop Information</div>
              <div className={classes.borderBottom}></div>
            </div>
            <div ref={ref} className={classes.searchBar_container}>
              <input
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Enter shop name"
                className={classes.searchInput}
              />
              {/* We can use the "status" to decide whether we should display the dropdown or not */}
              {status === "OK" && (
                <ul className={classes.suggestionList_container}>
                  {" "}
                  {renderSuggestions()}
                </ul>
              )}
            </div>
            <ValidatorForm
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={accountSignup}
            >
              <div className={classes.formContainer}>
                <div>
                  <TextValidator
                    className={classes.shopName_input}
                    id="filled-basic4"
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
                  <div className={classes.shopInfo_container}>
                    <div>
                      {registrationValue.shop_streetNumber +
                        " " +
                        registrationValue.shop_address}
                    </div>
                    <div>
                      {" "}
                      {registrationValue.shop_city +
                        " " +
                        registrationValue.shop_region +
                        ", " +
                        registrationValue.shop_country}
                    </div>
                    <div>{registrationValue.phone_number}</div>
                  </div>
                  <div className={classes.managerInfoTitleContainer}>
                    <div className={classes.managerInfoBorderBottom}></div>
                    <div>Account Information</div>
                    <div className={classes.managerInfoBorderBottom}></div>
                  </div>
                </div>
                <TextValidator
                  id="filled-basic"
                  label="Full Name"
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
                  id="filled-basic0"
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
                    id="filled-basic1"
                    label="Password"
                    variant="filled"
                    type={showPassword ? "text" : "password"}
                    value={registrationValue.password}
                    validators={["required", "matchRegexp:^.{8,16}$"]}
                    errorMessages={[
                      "Password is required",
                      "Password must be 8 - 16 characters",
                    ]}
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
                    id="filled-basic2"
                    label="Repeat Password"
                    variant="filled"
                    type={showPassword ? "text" : "password"}
                    value={registrationValue.confirmPassword}
                    validators={[
                      "isPasswordMatch",
                      "required",
                      "matchRegexp:^.{8,16}$",
                    ]}
                    errorMessages={[
                      "Password doesn't match",
                      "Confirm password is required",
                      "Password must be 8 - 16 characters",
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
                <div
                  className={classes.signupMsg_text}
                  style={{ display: loginValueCSS ? "flex" : "none" }}
                >
                  {signupMsg}
                </div>
                <Button
                  className={classes.userSignup_saveButton}
                  type="submit"
                  disabled={false}
                >
                  SIGN UP
                </Button>
              </div>
            </ValidatorForm>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
