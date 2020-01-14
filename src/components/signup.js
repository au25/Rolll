import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
    accountButton: {
        width: "300px"
    }
});

export default function() {
  const classes = useStyles();
  return (
    <div className={classes.signupPageContainer}>
      <div className={classes.signupMsgContainer}>Sign up for an account</div>
      <button className={classes.fbButton}>Sign up with Facebook</button>
      <button className={classes.googleButton}>Sign up with Google</button>
      <br />
      <button className={classes.accountButton}>Sign up for an account</button>
    </div>
  );
}
