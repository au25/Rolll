import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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
    fontFamily: "CoreSans, sans-serif",
  },
  enterPassword_container: {
    fontFamily: "CoreSans, sans-serif",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  verified_text: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 10px 0",
  },
  contact_text: {
    fontSize: "13px",
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
    fontSize: "14px",
  },
  passwordContainer: {
    width: "100%",
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
  const [email, setEmail] = useState("");
  const [registrationValue, setRegistrationValue] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const auth = firebase.auth();
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== registrationValue.password) {
        // console.log("value: " + value);
        // console.log("registration value: " + registrationValue.password);
        return false;
      }
      return true;
    });

    auth
      .verifyPasswordResetCode(actionCode)
      .then((email) => {
        setVerify(true);
        setValid(true);
        setEmail(email);
      })
      .catch(function (error) {
        setVerify(true);
        console.log(error);
      });
  }, [registrationValue.confirmPassword]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitPasswordChange = () => {
    console.log("changing password");
  };

  return verify ? (
    valid ? (
      <ThemeProvider theme={theme}>
        <div className={classes.enterPassword_container}>
          <div>Enter new password for</div>
          <div>{email}</div>
          <ValidatorForm
            className={classes.form}
            autoComplete="off"
            onSubmit={submitPasswordChange}
            noValidate
          >
            <div className={classes.passwordContainer}>
              <TextValidator
                id="filled-basic"
                label="Password"
                variant="filled"
                type={showPassword ? "text" : "password"}
                value={registrationValue.password}
                validators={["required"]}
                errorMessages={["Password is required"]}
                onChange={(e) =>
                  setRegistrationValue({
                    ...registrationValue,
                    password: e.target.value,
                  })
                }
              />
              <IconButton
                className={classes.passwordIcon}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </div>
            <div className={classes.passwordContainer}>
              <TextValidator
                id="filled-basic"
                label="Repeat Password"
                variant="filled"
                type={showPassword ? "text" : "password"}
                value={registrationValue.confirmPassword}
                validators={["isPasswordMatch", "required"]}
                errorMessages={[
                  "Password doesn't match",
                  "Confirm password is required",
                ]}
                onChange={(e) =>
                  setRegistrationValue({
                    ...registrationValue,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <IconButton
                className={classes.passwordIcon}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </div>
            <Button type="submit">Submit</Button>
          </ValidatorForm>
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
