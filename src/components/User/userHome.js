import React, { useContext, useState, useEffect } from "react";
import app from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import UserGift from "./userGift";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import UserNavigation from "./userNavigation";
import firebase from "../../firebase";

const useStyles = makeStyles((theme) => ({
  userHome_container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundImage:
      'url("https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fbackground_35.png?alt=media&token=a5be174a-cd06-4d97-b282-be6b33e71946")',
    backgroundColor: "rgba(237, 232, 218, 0.7)",

    [theme.breakpoints.down(600)]: {},
  },
}));

export default function (location) {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [userAuthInfo, setUserAuthnfo] = useState();
  const [userDbInfo, setUserDbInfo] = useState();
  const [countryInfo, setCountryInfo] = useState();

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setUserAuthnfo(user);
    }
  });

  /**
   * Sets initial state of userDbInfo and shopInfo
   */
  useEffect(() => {
    async function fetchInfo() {
      if (userAuthInfo && userAuthInfo.uid) {
        const db = firebase.firestore();
        const user = await db.collection("user").doc(userAuthInfo.uid).get();
        const countryData = await db.collection("country").get();
        // const ok = await countryData.doc("Canada").collection("British Columbia").doc("City").get();
        // console.log(ok.data());
        setUserDbInfo(user);
        setCountryInfo(countryData);
        console.log(user);
      }
    }
    fetchInfo();
  }, [userAuthInfo]);

  return (
    <div className={classes.userHome_container}>
      <UserNavigation
        userDbInfo={userDbInfo}
        setUserDbInfo={setUserDbInfo}
        location={location}
        countryInfo={countryInfo}
        userAuthInfo={userAuthInfo}
      />
    </div>
  );
}
