import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignupForm from "./userSignupForm";
import OAuthLogin from "./userOAuthLoginComponent";
import Div100vh from "react-div-100vh";
import Navigation from "../landingPageNavigation";

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
  rollWithUsText: {
    fontSize: "14px",
    fontSize: "16px",
    margin: "80px 0 35px 0",
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
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
  },
  signupPolicyContainer: {
    width: "70%",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    fontSize: "14px",
    textAlign: "center",
    margin: "0 0 80px 0",
    lineHeight: "18px",
  },
  page_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function () {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("panel1");

  return (
    // <Div100vh className={classes.signupPageContainer}>
    <div className={classes.page_container}>
      {/* <OAuthLogin /> */}
      {/* <Navigation /> */}
      {/* <div className={classes.signinTitleContainer}>
        <div className={classes.signinTitle}>Have an account? Log in</div>
      </div> */}
      {/* <div className={classes.orTextContainer}>
        <div className={classes.orText}>
          <div className={classes.orBorderBottom}></div>
          <div>or</div>
          <div className={classes.orBorderBottom}></div>
        </div>
      </div> */}
      <div className={classes.rollWithUsText}>
        We just need some information to get you rolling.
      </div>
      <div className={classes.signupFormContainer}>
        <SignupForm />
      </div>
      <div className={classes.signupPolicyContainer}>
        By signing up, you agree with the Terms of Service & Privacy Policy
      </div>
    </div>
    // </Div100vh>
  );
}
