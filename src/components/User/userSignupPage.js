import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignupForm from "./userSignupForm";
import OAuthLogin from "./userOAuthLoginComponent";

const useStyles = makeStyles({
  signupPageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  fbButton: {
    width: "300px"
  },
  googleButton: {
    width: "300px"
  },
  accountMsg: {
    width: "300px"
  }
});

export default function() {
  const classes = useStyles();
  return (
    <div className={classes.signupPageContainer}>
      <OAuthLogin />
      <br />
      <div className={classes.accountMsg}>Sign up for an account</div>
      <div className={classes.formContainer}>
        <SignupForm />
      </div>
    </div>
  );
}
