import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";

const useStyles = makeStyles({});

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

export default function() {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [loginValue, setLoginValue] = useState({
    password: "",
    email: ""
  });

  firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
      currentUser.getIdTokenResult().then(idTokenResult => {
        if (idTokenResult.claims.is_approve) {
          history.push("/businessHome");
        } else {
          history.push("/businessPending");
        }
      })
    }
  });

  const businessLogin = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(loginValue.email, loginValue.password);
  };

  return (
    <div>
      <div>Welcome back!</div>
      <form className={classes.signupFormContainer} noValidate>
        <CssTextField
          label="Email"
          onChange={e =>
            setLoginValue({ ...loginValue, email: e.target.value })
          }
        />
        <br />
        <CssTextField
          type="password"
          label="Password"
          onChange={e =>
            setLoginValue({ ...loginValue, password: e.target.value })
          }
        />
        <br />
        <br />
        <Button variant="contained" onClick={businessLogin}>
          LOG IN
        </Button>
      </form>
    </div>
  );
}
