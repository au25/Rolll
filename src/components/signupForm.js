import React, { useState } from "react";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import app from "../firebase";
import { withRouter } from "react-router";

/**
 * CSS of the page
 */
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  signupFormContainer: {
    display: "flex",
    flexDirection: "column"
  }
}));

/**
 * Currently unused validation styles
 */
const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);

/**
 * This is the signup component
 * History from withRouter to navigate after signing up
 * @param {history} param0
 */
const SignUp = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = useState({
    password: "",
    confirmPassword: "",
    email: ""
  });

  async function accountSignup(e) {
      console.log("signing up...");
    e.preventDefault();
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={classes.signupFormContainer} noValidate>
      <CssTextField
        label="Email"
        onChange={e => setValue({ ...value, email: e.target.value })}
      />
      <CssTextField
        type="password"
        label="Password"
        onChange={e => setValue({ ...value, password: e.target.value })}
      />
      <CssTextField
        type="password"
        label="Confirm Password"
        onChange={e => setValue({ ...value, confirmPassword: e.target.value })}
      />
      <Button variant="contained" onClick={accountSignup}>
        SIGN UP
      </Button>
    </form>
  );
};

export default withRouter(SignUp);
