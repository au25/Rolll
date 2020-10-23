import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    // backgroundImage: 'url("img/background_35.png")',
    backgroundColor: "rgba(241, 241, 241, 0.7)",

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
  const [userLocationInfo, setUserLocationInfo] = useState();

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setUserAuthnfo(user);
    }
  });

  if (currentUser == null) {
    history.push("/");
  }

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
        setUserLocationInfo({
          ...userLocationInfo,
          country: user.data().user_country,
          region: user.data().user_region,
          city: user.data().user_city,
          cityArea: user.data().user_cityArea,
        });
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
        userLocationInfo={userLocationInfo}
        setUserLocationInfo={setUserLocationInfo}
      />
    </div>
  );
}
