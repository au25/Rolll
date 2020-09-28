import React, { useState, useContext } from "react";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import app from "../../firebase";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

/**
 * CSS of the page
 */
const useStyles = makeStyles((theme) => ({
  signupFormContainer: {
    display: "flex",
    flexDirection: "column",
  },
  passwordContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 0 5px 0",
  },
  forgotPasswordText: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    margin: "28px 0 0 0",
    padding: "0 0 28px 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
  },
  dontHaveAccountText: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    padding: "28px 0 0 0",
    margin: "0 0 20px 0",
  },
  signUpText: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
  },
  userSignup_saveButton: {
    // backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  signupLinkContainer: {
    textDecoration: "none",
  },
  signup_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signup_button: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    color: "black",
  },
  loginMsg_text: {
    fontFamily: "CoreSans, sans-serif",
    justifyContent: "center",
    color: "red",
    margin: "0 0 25px 0",
    fontSize: "14px"
  },
}));

/**
 * Overriding MUI theme css
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
        backgroundColor: "#4caf50",
        color: "white",
        height: "60px",
        width: "100%",
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
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "black",
        },
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
    MuiFormHelperText: {
      root: {
        fontSize: "12px",
      },
    },
  },
});

/**
 * This is the signup component
 * History from withRouter to navigate after signing up
 * @param {history} param0
 */
const SignUp = ({ history }) => {
  const classes = useStyles();
  const [loginValue, setLoginValue] = useState({
    password: "",
    email: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginMsg, setLoginMsg] = useState("");
  const [loginValueCSS, setLoginValueCSS] = useState(false);

  /**
   * Shows password after clicking eye icon
   */
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /**
   * Logs user in and take them to home page
   */
  async function userLogin(e) {
    e.preventDefault();
    try {
      const credential = await app
        .auth()
        .signInWithEmailAndPassword(loginValue.email, loginValue.password);
      history.push("/");
    } catch (error) {
      setLoginValueCSS(true);
      setLoginMsg("Invalid Login");
      console.log(error);
    }
  }

  /**
   * If user is logged in, route to user home page
   */
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    // return <Redirect to="/userHome" />;
  }

  /**
   * Returns the form for logging in
   */
  return (
    <ThemeProvider theme={theme}>
      <ValidatorForm
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => userLogin(e)}
      >
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
        <div
          className={classes.loginMsg_text}
          style={{ display: loginValueCSS ? "flex" : "none" }}
        >
          {loginMsg}
        </div>
        <Button className={classes.userSignup_saveButton} type="submit">
          LOG IN
        </Button>
      </ValidatorForm>
      <div
        className={classes.forgotPasswordText}
        onClick={() => {
          history.push("/resetPassword");
        }}
      >
        {" "}
        Forgot Your Password?
      </div>
      <div className={classes.signup_container}>
        <div className={classes.dontHaveAccountText}>
          Don't have an account?
        </div>
        <Button
          className={classes.signup_button}
          onClick={() => history.push("/signup")}
        >
          Sign up
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default withRouter(SignUp);
