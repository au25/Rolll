import React, { useContext, useState, useEffect } from "react";
import app from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import UserGift from "./userGift";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import UserNavigation from "./userNavigation";
import firebase from "../../firebase";

const useStyles = makeStyles( theme => ({
  userHome_container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",

    [theme.breakpoints.down(600)]: {
      backgroundColor: "yellow"
    }
  },
}));

export default function () {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [userAuthInfo, setUserAuthnfo] = useState();
  const [userDbInfo, setUserDbInfo] = useState();

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setUserAuthnfo(user);
    }
  });

  /**
   * Sets initial state of userDbInfo and shopInfo
   */
  useEffect(() => {
    async function fetchUserInfo() {
      if (userAuthInfo && userAuthInfo.uid) {
        const db = firebase.firestore();
        const user = await db.collection("user").doc(userAuthInfo.uid).get();
        setUserDbInfo(user);
        console.log(user);
      }
    }
    fetchUserInfo();
  }, [userAuthInfo]);

  return (
    <div className={classes.userHome_container}>
        <UserNavigation userDbInfo={userDbInfo} setUserDbInfo={setUserDbInfo} />
    </div>
  );
}
