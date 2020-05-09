import React, { useContext, useState, useEffect } from "react";
import firebase from "../../firebase";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import "./userProfilePage.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down(600)]: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  yourProfileText: {
    fontSize: "14px",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    padding: "28px 0 14px 0",
  },
  userProfileFormContainer: {
    [theme.breakpoints.down(600)]: {
      width: "70%",
    },
  },
  userProfile_input: {
    [theme.breakpoints.down(600)]: {
      width: "250px",
      margin: "6px 0",
      border: "none",
      fontSize: "16px",
      backgroundColor: "transparent",
    },
  },
  userProfile_cityInputContainer: {
    width: "70%",
    display: "flex",
    borderBottom: "1px solid black",
  },
  userProfile_emailInputContainer: {
    width: "70%",
    display: "flex",
    borderBottom: "1px solid black",
  },
  userProfile_emailTitle: {
    width: "70%",
    display: "flex",
    fontSize: "14px",
    margin: "45px 0 0 0",
  },
  userProfile_cityTitle: {
    width: "70%",
    display: "flex",
    fontSize: "14px",
    margin: "45px 0 0 0",
  },
  userProfile_emailInput: {
    [theme.breakpoints.down(600)]: {
      width: "193px",
      margin: "5px 0",
      border: "none",
      fontSize: "20px",
      backgroundColor: "transparent",
      padding: "0 0 1px 4px",
      outline: "none",
      fontSize: "16px",
    },
  },
  userProfile_cityInput: {
    [theme.breakpoints.down(600)]: {
      width: "193px",
      margin: "5px 0",
      border: "none",
      fontSize: "20px",
      backgroundColor: "transparent",
      padding: "0 0 1px 4px",
      outline: "none",
      fontSize: "16px",
    },
  },
  userProfile_countryRegionContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "70%",
  },
  userProfile_countryRegionTitleContainer: {
    display: "flex",
    width: "70%",
    margin: "15px 0 0 0",
    justifyContent: "space-between",
  },
  userProfile_countryDropdownContainer: {
    borderBottom: "1px solid black",
    height: "100%",
    width: "120px",
  },
  userProfile_saveLogoutContainer: {
    display: "flex",
    width: "65%",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: "10px 0 0 0",
  },
  userProfile_saveButton: {
    padding: " 8px 15px 8px",
    backgroundColor: "darkgoldenrod",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
  },
  userProfile_logoutButton: {
    width: "60px",
    padding: "5px",
    margin: "8px 0 0 0",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "14px",
  },
  updateButtonText: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    margin: "0 0 28px 0"
  },
  logoutButton: {
    width: "40%",
    fontSize: "12px",
    padding: "0",
    height: "40px",
    backgroundColor: "indianred",
  },
  logoutContainer: {
    display: "flex",
    justifyContent: "flex-end",
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
        height: "60px",
        width: "100%",
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

export default function ({ userDbInfo }) {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState({});
  const [countryErrorState, setCountryErrorState] = useState(null);
  const [regionErrorState, setRegionErrorState] = useState(null);

  useEffect(() => {
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }
  }, []);

  /**
   * Handles profile changes
   */
  function handleProfileChange(e) {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  /**
   * Write to db new profile updates
   */
  const handleProfileUpdate = (e) => {
    e.preventDefault();

    const db = firebase.firestore();
    console.log(userInfo);
    db.collection("user").doc(userDbInfo.id).set(userInfo);
  };

  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <ValidatorForm
          className={classes.userProfileFormContainer}
          noValidate
          autoComplete="off"
          onSubmit={handleProfileUpdate}
        >
          <div className={classes.yourProfileText}>Your Profile</div>
          <TextValidator
            id="filled-basic"
            label="Email"
            variant="filled"
            InputLabelProps={{ shrink: true }}
            value={userInfo.user_email}
            validators={["required", "isEmail"]}
            errorMessages={[
              "Email address is requred",
              "Email address is not valid",
            ]}
            onChange={(e) =>
              setUserInfo({ ...userInfo, user_email: e.target.value })
            }
          />
          <TextValidator
            id="filled-basic"
            label="City"
            variant="filled"
            InputLabelProps={{ shrink: true }}
            value={userInfo.user_city}
            validators={["required"]}
            errorMessages={["City is requred"]}
            onChange={(e) =>
              setUserInfo({ ...userInfo, user_city: e.target.value })
            }
          />
          <div className={classes.countryOuterContainer}>
            <div className={classes.countryContainer}>
              <CountryDropdown
                required
                value={userInfo.user_country}
                onChange={(country) =>
                  setUserInfo({
                    ...userInfo,
                    user_country: country,
                  })
                }
                whitelist={["CA", "US"]}
                priorityOptions={["CA", "US"]}
                classes="userProfile_selectCountry"
              />
            </div>
            <div>
              {countryErrorState && userInfo.user_country == "" ? (
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
                country={userInfo.user_country}
                value={userInfo.user_region}
                disableWhenEmpty={true}
                onChange={(region) =>
                  setUserInfo({
                    ...userInfo,
                    user_region: region,
                  })
                }
                classes="userProfile_selectRegion"
              />
            </div>
            <div>
              {regionErrorState && userInfo.user_region == "" ? (
                <div className={classes.regionErrorMessage}>
                  Select a region
                </div>
              ) : null}
            </div>
            <Button type="submit" className={classes.updateButtonText}>
              Update
            </Button>
            <div className={classes.logoutContainer}>
              <Button
                className={classes.logoutButton}
                onClick={(e) => {
                  e.preventDefault();
                  firebase.auth().signOut();
                  history.push("/home");
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </ValidatorForm>
      </ThemeProvider>
    </div>
  );
}
