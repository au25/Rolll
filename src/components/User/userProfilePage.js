import React, { useContext, useState, useEffect } from "react";
import firebase from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import "./userProfilePage.css";

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
  userProfile_formContainer: {
    [theme.breakpoints.down(600)]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
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
    margin: "45px 0 0 0"
  },
  userProfile_cityTitle: {
    width: "70%",
    display: "flex",
    fontSize: "14px",
    margin: "45px 0 0 0"
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
}));

export default function ({ userDbInfo }) {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(userDbInfo.data());
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
      <form
        className={classes.userProfile_formContainer}
        onSubmit={handleProfileUpdate}
      >
        <div className={classes.userProfile_emailTitle}>Email</div>
        <div className={classes.userProfile_emailInputContainer}>
          <input
            disabled
            value={userInfo.user_email}
            className={classes.userProfile_emailInput}
          />
        </div>
        <div className={classes.userProfile_cityTitle}>City</div>
        <div className={classes.userProfile_cityInputContainer}>
          <input
            name="user_city"
            onChange={handleProfileChange}
            value={userInfo.user_city}
            className={classes.userProfile_cityInput}
          />
        </div>
        <div className={classes.userProfile_countryRegionTitleContainer}>
          <div className="userProfile_countryTitle">Country</div>
          <div className="userProfile_regionTitle">Region</div>
        </div>
        <div className={classes.userProfile_countryRegionContainer}>
          <div className={classes.userProfile_countryDropdownContainer}>
            <CountryDropdown
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
          <div className={classes.userProfile_countryDropdownContainer}>
            <RegionDropdown
              disableWhenEmpty={true}
              country={userInfo.user_country}
              value={userInfo.user_region}
              valueType="short"
              labelType="short"
              disableWhenEmpty={true}
              onChange={(region) =>
                setUserInfo({ ...userInfo, user_region: region })
              }
              classes="userProfile_selectRegion"
            />
          </div>
        </div>
        <div className={classes.userProfile_saveLogoutContainer}>
          <button className={classes.userProfile_saveButton} type="submit">
            Save
          </button>
          <button
            className={classes.userProfile_logoutButton}
            onClick={(e) => {
              e.preventDefault();
              firebase.auth().signOut();
              history.push("/home");
            }}
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
}
