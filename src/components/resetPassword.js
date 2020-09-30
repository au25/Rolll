import React, { useState } from "react";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import firebase from "../firebase";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  resetPassword_outerContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "CoreSans, sans-serif",
    backgroundColor: "rgba(241, 241, 241, 0.7)",
  },
  resetPassword_innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    [theme.breakpoints.up("sm")]: {
      width: "415px",
      // height: "675px",
      // overflow: "scroll",
      // backgroundColor: "#e8e8e8",
      // borderRadius: "20px"
    },
  },
  logo_image: {
    width: "50px",
    margin: "0 0 20px 0",
    backgroundColor: "white",
    borderRadius: "50px",
  },
  enterEmail_text: {
    fontSize: "14px",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // margin: "0 0 10px 0",
  },
  sentMessage_text: {
    margin: "25px 0 10px 0",
    fontSize: "14px",
    fontWeight: "bold",
  },
  sendEmail_button: {
    "&:hover": {
      backgroundColor: "#439a47 !important", //dark green
    },
  }
}));

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "10px 0 0 0",
      },
    },
    MuiButton: {
      root: {
        backgroundColor: "#4caf50",
        color: "white",
        height: "60px",
        width: "125px",
        margin: "10px 0 0 0",
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

export default function () {
  const classes = useStyles();

  const [loginValue, setLoginValue] = useState({
    password: "",
    email: "",
  });
  const [sentMsg, setSentMsg] = useState("lol");
  const [displayValue, setDisplayValue] = useState(false);
  const [emailSuccessValue, setEmailSuccessValue] = useState();

  function sendPasswordReset() {
    const auth = firebase.auth();
    auth
      .sendPasswordResetEmail(loginValue.email)
      .then(function () {
        setSentMsg("Email Sent");
        setEmailSuccessValue(true);
        setDisplayValue(true);
        setLoginValue({ ...loginValue, setLoginValue, email: "" });
      })
      .catch(function (error) {
        setSentMsg("Invalid Email");
        setEmailSuccessValue(false);
        setDisplayValue(true);
      });
    // console.log(loginValue.email);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.resetPassword_outerContainer}>
        <div className={classes.resetPassword_innerContainer}>
          <img className={classes.logo_image} src="img/logo_96x96_ver1.png" />
          <ValidatorForm
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={() => {
              sendPasswordReset();
            }}
          >
            <div className={classes.enterEmail_text}>
              Enter your email address
            </div>
            <TextValidator
              id="filled-basic"
              label="Email"
              variant="filled"
              value={loginValue.email}
              validators={["required", "isEmail"]}
              errorMessages={[
                "Email address is requred",
                "Email address is not valid",
              ]}
              onChange={(e) =>
                setLoginValue({ ...loginValue, email: e.target.value })
              }
            />
            <div
              className={classes.sentMessage_text}
              style={{
                display: displayValue ? "flex" : "none",
                color: emailSuccessValue ? "green" : "red",
              }}
            >
              {sentMsg}
            </div>
            <Button className={classes.sendEmail_button}type="submit">Send</Button>
          </ValidatorForm>
        </div>
      </div>
    </ThemeProvider>
  );
}
