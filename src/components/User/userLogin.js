import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "./userLoginForm";

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
      <button className={classes.fbButton}>Log in with Facebook</button>
      <button className={classes.googleButton}>Log in with Google</button>
      <br />
      <div className={classes.accountMsg}>Log in</div>
      <div className={classes.formContainer}>
        <LoginForm />
      </div>
    </div>
  );
}
