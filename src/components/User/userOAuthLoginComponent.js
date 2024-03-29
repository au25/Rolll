import React, { useState, useContext } from "react";
import { AuthContext } from "../../Auth";
import * as firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";

export default function() {
  const { currentUser } = useContext(AuthContext);

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "./",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: userInfo => {
        const db = firebase.firestore();
        db.collection("user")
          .doc(userInfo.user.uid)
          .set({
            email: userInfo.user.email,
            user_city: "",
            user_country: "",
            user_region: ""
          });

        const addUserRole = firebase.functions().httpsCallable("addUserRole");
        addUserRole({ email: userInfo.user.email }).then(result => {
          console.log(result);
        });
      }
    }
  };

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
