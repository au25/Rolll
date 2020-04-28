import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setupUI } from "../setupUI";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessNavigation from "./businessNavigation";

const useStyles = makeStyles({});

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

  /**
   * Sets initial state of userDbInfo and shopInfo
   */
  useEffect(() => {
    async function fetchUserInfo() {
      if (userAuthInfo && userAuthInfo.uid) {
        console.log("making a read operation");
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
    <div>
      {userDbInfo && userDbInfo.data() ? (
        <BusinessNavigation userDbInfo={userDbInfo} location={location}/>
      ) : null}
    </div>
  );
}
