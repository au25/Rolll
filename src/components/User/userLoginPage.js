import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "./userLoginForm";
import Navigation from "../landingPageNavigation";
import OAuthLogin from "./userOAuthLoginComponent";

const useStyles = makeStyles({
  signupPageContainer: {
    width: "100%",
  },
  fbButton: {
    width: "300px",
  },
  googleButton: {
    width: "300px",
  },
  accountMsg: {
    width: "70%",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "16px",
    fontWeight: "400",
    margin: "10px 0 28px 0"
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContainer: {
    width: "70%",
  },
});

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.signupPageContainer}>
      <Navigation />
      {/* <OAuthLogin /> */}
      <div className={classes.container}>
        <div className={classes.accountMsg}>Log In</div>
        <div className={classes.formContainer}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
