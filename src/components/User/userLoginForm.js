import React, { useState, useContext } from "react";
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
import app from "../../firebase";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../../Auth";

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
  const [loginValue, setLoginValue] = useState({
    password: "",
    email: ""
  });

  async function userLogin(e) {
    e.preventDefault();
    try {
      const credential = await app
        .auth()
        .signInWithEmailAndPassword(loginValue.email, loginValue.password);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * If user is logged in, route to user home page
   */
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    console.log("User Info?");
    console.log(currentUser);
    return <Redirect to="/" />;
  }

  /**
   * Returns the form for logging in
   */
  return (
    <form className={classes.signupFormContainer} noValidate>
      <CssTextField
        label="Email"
        onChange={e => setLoginValue({ ...loginValue, email: e.target.value })}
      />
      <CssTextField
        type="password"
        label="Password"
        onChange={e =>
          setLoginValue({ ...loginValue, password: e.target.value })
        }
      />
      <Button variant="contained" onClick={userLogin}>
        LOG IN
      </Button>
    </form>
  );
};

export default withRouter(SignUp);
