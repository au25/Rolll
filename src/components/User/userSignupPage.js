import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignupForm from "./userSignupForm";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    width: "300px",
  },
  signinTitleContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  signinTitle: {
    fontSize: "14px",
    fontSize: "16px",
    margin: "80px 0 15px 0",
    display: "flex",
    width: "70%",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
  },
  orTextContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  orText: {
    fontSize: "16px",
    margin: "40px 0 50px 0",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orBorderBottom: {
    padding: "4px 0 0 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
    width: "35%",
  },
  signupFormContainer: {
    margin: "0 0 15px 0",
    width: "415px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  signupPolicyContainer: {
    width: "70%",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    fontSize: "14px",
    textAlign: "center",
    margin: "0 0 80px 0",
    lineHeight: "18px",
    letterSpacing: "0.5px",
  },
  page_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(241, 241, 241, 0.7)",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "white",
    },
  },
  tos_text: {
    textDecoration: "none",
  },
  pp_text: {
    textDecoration: "none",
  },
}));

export default function () {
  const classes = useStyles();

  return (
    <div className={classes.page_container}>
      <div className={classes.signupFormContainer}>
        <SignupForm />
      </div>
      <div className={classes.signupPolicyContainer}>
        By signing up, you agree with the{" "}
        <Link to="/tos" className={classes.tos_text}>
          Terms of Service
        </Link>{" "}
        &{" "}
        <Link to="/privacyPolicy" className={classes.pp_text}>
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
