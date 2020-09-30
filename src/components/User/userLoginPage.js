import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "./userLoginForm";
import Navigation from "../landingPageNavigation";
import OAuthLogin from "./userOAuthLoginComponent";

const useStyles = makeStyles((theme) => ({
  signupPageContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(241, 241, 241, 0.7)",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "white"
    }
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
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: "16px",
    fontWeight: "400",
    margin: "10px 0 28px 0",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // margin: "80px 0 0 0",
    maxWidth: "415px",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "45px 0",
    // height: "75%",
    maxHeight: "600px",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      maxHeight: "100vh",
      borderRadius: "0",
      justifyContent: "center",
      backgroundColor: "white",
    },
  },
  formContainer: {
    width: "70%",
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.signupPageContainer}>
      {/* <Navigation /> */}
      {/* <OAuthLogin /> */}
      <div className={classes.container}>
        <div className={classes.accountMsg}>Welcome back</div>
        <div className={classes.formContainer}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
