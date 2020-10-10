import React, { useState, useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter, Redirect, useHistory } from "react-router";
import { AuthContext } from "../../Auth";
import firebase from "../../firebase";
// Required for side-effects
require("firebase/functions");

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
 */
const AdminLoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [loginValue, setLoginValue] = useState({
    password: "",
    email: ""
  });

  /**
   * Onclick function that logs in user
   */
  async function userLogin(e) {
    e.preventDefault();
    try {
      const credential = await firebase
        .auth()
        .signInWithEmailAndPassword(loginValue.email, loginValue.password);
    } catch (error) {
      console.log(error);
    }

    // If user is logged in, route to user home page
    if (currentUser != null) {
      currentUser.getIdTokenResult().then(idTokenResult => {
        if (idTokenResult.claims.adminRole) {
          history.push("/adminHome");
        }
      });
    }
  }

  /**
   * Adds "admin role" to a user
   */
  async function makeAdmin(e) {
    e.preventDefault();

    // Get e-mail
    const addAdminRole = firebase.functions().httpsCallable("addAdminRole");
    addAdminRole({ email: loginValue.email }).then(result => {
      console.log(result);
    });
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
      <br />
      <CssTextField
        label="Email"
        onChange={e => setLoginValue({ ...loginValue, email: e.target.value })}
      />
      <Button variant="contained" onClick={makeAdmin}>
        Make Admin
      </Button>
    </form>
  );
};

export default withRouter(AdminLoginPage);
