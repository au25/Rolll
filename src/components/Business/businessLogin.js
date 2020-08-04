import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { useHistory, Link } from "react-router-dom";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const useStyles = makeStyles({
  welcomeText: {
    fontSize: "14px",
    fontSize: "16px",
    margin: "80px 0 28px 0",
    display: "flex",
    width: "70%",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
  },
  passwordContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  businessLoginContainer: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  root: {
    margin: "0 0 32px 0",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  forgotPasswordText: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    padding: "28px 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
  },
  dontHaveAccountText: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    padding: "28px 0 28px 0",
  },
  signUpText: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
  },
  registerBusinessLinkContainer: {
    textDecoration: "none",
  },
  signupButton: {
    width: "100%",
  },
  register_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  register_button: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.09) !important",
    color: "black"
  }
});

/**
 * Overrides MUI theme css
 */
const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(205, 239, 245, 0.4)",
        "&$focused": {
          backgroundColor: "rgba(205, 239, 245, 0.8) !important",
        },
      },
      underline: {
        "&$focused": {
          // borderBottom: "1px solid black",
        },
        "&:after": {
          borderBottom: "2px solid black",
        },
      },
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0",
      },
    },
    MuiButton: {
      root: {
        // backgroundColor: "rgba(0, 0, 0, 0.05)",
        backgroundColor: "#4caf50 !important",
        height: "60px",
      },
      text: {
        color: "white",
        letterSpacing: "1px",
      },
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0",
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "0 0 28px 0",
      },
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "black",
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px",
      },
    },
  },
});

export default function () {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [loginValue, setLoginValue] = useState({
    password: "",
    email: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Shows password when eye icon is clicked
   */
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /**
   * Checks user auth status
   * If approved, takes user to approved home page else pending page
   */
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      currentUser.getIdTokenResult().then((idTokenResult) => {
        if (idTokenResult.claims.is_approve) {
          history.push("/businessHome");
        } else {
          history.push("/businessPending");
        }
      });
    }
  });

  /**
   * Signs business user in
   */
  const businessLogin = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(loginValue.email, loginValue.password);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className={classes.businessLoginContainer}>
          <ValidatorForm
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={businessLogin}
          >
            <div className={classes.welcomeText}>Welcome back!</div>
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
            <div className={classes.passwordContainer}>
              <TextValidator
                id="filled-basic"
                label="Password"
                variant="filled"
                type={showPassword ? "text" : "password"}
                value={loginValue.password}
                validators={["required"]}
                errorMessages={["Password is required"]}
                onChange={(e) =>
                  setLoginValue({ ...loginValue, password: e.target.value })
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
            <Button type="submit">LOG IN</Button>
            <div className={classes.forgotPasswordText}>
              Forgot Your Password?
            </div>
            <div className={classes.register_container}>
              <div className={classes.dontHaveAccountText}>
                Don't have an account?
              </div>
              <Button
                className={classes.register_button}
                onClick={() => history.push("/registerBusiness")}
              >
                Register
              </Button>
            </div>
          </ValidatorForm>
        </div>
      </ThemeProvider>
    </div>
  );
}
