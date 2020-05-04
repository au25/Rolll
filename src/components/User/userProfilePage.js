import React, { useContext, useState, useEffect } from "react";
import firebase from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Gift from "../gift";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const useStyles = makeStyles({
  container: {
    // backgroundColor: "yellow"
  },
});

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
      <form onSubmit={handleProfileUpdate}>
        <input
          value={userInfo.user_email}
          onChange={handleProfileChange}
          name="user_email"
          disabled
        />
        <input
          value={userInfo.user_city}
          onChange={handleProfileChange}
          name="user_city"
        />
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
        />
        <RegionDropdown
          disableWhenEmpty={true}
          country={userInfo.user_country}
          value={userInfo.user_region}
          onChange={(region) =>
            setUserInfo({ ...userInfo, user_region: region })
          }
        />
        <button type="submit">Update Profile</button>
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          firebase.auth().signOut();
          history.push("/home");
        }}
      >
        Log out
      </button>
    </div>
  );
}
