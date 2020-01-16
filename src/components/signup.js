import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignupForm from "./signupForm";

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
      <button className={classes.fbButton}>Sign up with Facebook</button>
      <button className={classes.googleButton}>Sign up with Google</button>
      <br />
      <div className={classes.accountMsg}>Sign up for an account</div>
      <div className={classes.formContainer}>
        <SignupForm />
      </div>
    </div>
  );
}
