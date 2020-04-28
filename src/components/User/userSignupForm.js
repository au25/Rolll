import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import firebase from "../../firebase";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
// Required for side-effects
require("firebase/functions");

/**
 * CSS of the page
 */
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  signupFormContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

/**
 * Currently unused validation styles
 */
const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

/**
 * This is the signup component
 * History from withRouter to navigate after signing up
 * @param {history} param0
 */
const SignUp = ({ history }) => {
  const classes = useStyles();
  const [registrationValue, setRegistrationValue] = useState({
    password: "",
    confirmPassword: "",
    user_email: "",
    user_city: "",
    user_region: "",
    user_country: "",
  });

  /**
   * This creates authentication user and also database user with the same unique ID
   * generated by Firebase
   */
  async function accountSignup(e) {
    const db = firebase.firestore();
    try {
      const credential = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          registrationValue.user_email,
          registrationValue.password
        );
      await db.collection("user").doc(credential.user.uid).set({
        user_email: registrationValue.user_email,
        user_city: registrationValue.user_city,
        user_region: registrationValue.user_region,
        user_country: registrationValue.user_country
      });

      const addUserRole = firebase.functions().httpsCallable("addUserRole");
      addUserRole({ email: registrationValue.user_email }).then((result) => {
        console.log(result);
      });

      // Redirect user to user home page after signing up
      // history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={classes.signupFormContainer} noValidate>
      <CssTextField
        label="Email"
        onChange={(e) =>
          setRegistrationValue({ ...registrationValue, user_email: e.target.value })
        }
      />
      <CssTextField
        type="password"
        label="Password"
        onChange={(e) =>
          setRegistrationValue({
            ...registrationValue,
            password: e.target.value,
          })
        }
      />
      <CssTextField
        type="password"
        label="Confirm Password"
        onChange={(e) =>
          setRegistrationValue({
            ...registrationValue,
            confirmPassword: e.target.value,
          })
        }
      />
      <CountryDropdown
        value={registrationValue.user_country}
        onChange={(country) =>
          setRegistrationValue({ ...registrationValue, user_country: country })
        }
        priorityOptions={["CA", "US", "GB"]}
      />
      <RegionDropdown
        disableWhenEmpty={true}
        country={registrationValue.user_country}
        value={registrationValue.shop_region}
        onChange={(region) =>
          setRegistrationValue({ ...registrationValue, user_region: region })
        }
      />
      <CssTextField
        label="City"
        onChange={(e) =>
          setRegistrationValue({ ...registrationValue, user_city: e.target.value })
        }
      />
      <Button variant="contained" onClick={accountSignup}>
        SIGN UP
      </Button>
    </form>
  );
};

export default withRouter(SignUp);
