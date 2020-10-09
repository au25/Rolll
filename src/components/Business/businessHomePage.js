import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessNavigation from "./businessNavigation";

const useStyles = makeStyles({
  home_container: {
    // backgroundImage:
    //   'url("https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fbackground_35.png?alt=media&token=a5be174a-cd06-4d97-b282-be6b33e71946")',
    backgroundColor: "rgba(241, 241, 241, 0.7)",
  },
});

export default function ({ location }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const [userAuthInfo, setUserAuthnfo] = useState();
  const [userDbInfo, setUserDbInfo] = useState();

  console.log("business home");
  console.log(location);

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setUserAuthnfo(user);
    }
  });

  if (currentUser != null) {
    currentUser.getIdTokenResult().then((idTokenResult) => {
      if (!idTokenResult.claims.approvedShop) {
        history.push("/businessPending");
      }
    });
  }

  /**
   * Sets initial state of userDbInfo and shopInfo
   */
  useEffect(() => {
    async function fetchUserInfo() {
      if (userAuthInfo && userAuthInfo.uid) {
        const db = firebase.firestore();
        const user = await db
          .collection("businessUser")
          .doc(userAuthInfo.uid)
          .get();
        setUserDbInfo(user);
      }
    }
    fetchUserInfo();
  }, [userAuthInfo]);

  return (
    <div className={classes.home_container}>
      <div className={classes.bgImage_container}>
        {userDbInfo && userDbInfo.data() ? (
          <BusinessNavigation userDbInfo={userDbInfo} location={location} />
        ) : null}
      </div>
    </div>
  );
}
