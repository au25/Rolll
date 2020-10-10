import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    // backgroundColor: "white",
    // padding: "20px 20px 20px 20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "CoreSans, sans-serif",
    borderRadius: "15px",
  },
  verified_text: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 10px 0",
  },
  contact_text: {
    fontSize: "13px",
  },
  verifySuccess_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
  },
  verifyFail_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
  },
  logo_image: {
    width: "50px",
    margin: "0 0 20px 0",
    backgroundColor: "white",
    borderRadius: "50px",
  },
  redirect_text: {
    textAlign: "center",
    fontSize: "14px"
  },
}));

const theme = createMuiTheme({
  overrides: {
    root: {},
    MuiButton: {
      root: {
        backgroundColor: "#4caf50",
        color: "white",
        height: "60px",
        "&$disabled": {
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50",
          },
        },
      },
    },
  },
});

export default function ({ actionCode }) {
  const classes = useStyles();
  const history = useHistory();

  const [verify, setVerify] = useState(false);
  const [valid, setValid] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const auth = firebase.auth();
    auth.applyActionCode(actionCode).then(
      () => {
        setVerify(true);
        setValid(true);
        setTimeout(function(){history.push("/");}, 5000);
      },
      (error) => {
        console.log(error);
        setVerify(true);
        setValid(false);
        setError(error.message);
      }
    );
  }, []);

  return verify ? (
    valid ? (
      <ThemeProvider theme={theme}>
        <div className={classes.outerContainer}>
          <div className={classes.verifySuccess_container}>
            <img className={classes.logo_image} src="img/logo_96x96_ver1.png" />
            <div className={classes.verified_text}>Email Verified</div>
            <div className={classes.redirect_text}>
              You will be redirected in a couple seconds...{" "}
            </div>
          </div>
        </div>
      </ThemeProvider>
    ) : (
      <ThemeProvider theme={theme}>
        <div className={classes.outerContainer}>
          <div className={classes.verifyFail_container}>
            <img className={classes.logo_image} src="img/logo_96x96_ver1.png" />
            <div className={classes.verified_text}>Error</div>
            <div className={classes.contact_text}>
              Contact support@rolll.app for support.
            </div>
          </div>
        </div>
      </ThemeProvider>
    )
  ) : (
    <div className={classes.outerContainer}>
      <div>Verifying...</div>
    </div>
  );
}
