import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "./userLoginForm";
import Navigation from "../landingPageNavigation";
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
      <Navigation />
      <OAuthLogin />
      <br />
      <div className={classes.accountMsg}>Log in</div>
      <div className={classes.formContainer}>
        <LoginForm />
      </div>
    </div>
  );
}
