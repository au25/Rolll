import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignupForm from "./userSignupForm";
import OAuthLogin from "./userOAuthLoginComponent";
import Div100vh from "react-div-100vh";

const useStyles = makeStyles({
  signupPageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "lightyellow",
  },
  fbButton: {
    width: "300px",
  },
  googleButton: {
    width: "300px",
  },
  accountMsg: {
    width: "300px",
  },
  orText: {
    fontSize: "14px",
    textTransform: "uppercase",
    margin: "30px 0 15px 0"
  }
});

export default function () {
  const classes = useStyles();
  return (
    <Div100vh className={classes.signupPageContainer}>
      <SignupForm />
      <div className={classes.orText}>or</div>
      <OAuthLogin />
    </Div100vh>
  );
}
