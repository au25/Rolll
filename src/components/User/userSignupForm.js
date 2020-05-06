import React, { useState, useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import "./userSignupForm.css";
import Div100vh from "react-div-100vh";
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
    width: "100%",
    alignItems: "center",
  },
  container: {
    [theme.breakpoints.down(600)]: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  userSignup_formContainer: {
    [theme.breakpoints.down(600)]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  },
  userSignup_input: {
    [theme.breakpoints.down(600)]: {
      width: "250px",
      margin: "6px 0",
      border: "none",
      fontSize: "16px",
      backgroundColor: "transparent",
    },
  },
  userSignup_cityInputContainer: {
    width: "70%",
    display: "flex",
    borderBottom: "1px solid black",
  },
  userSignup_emailInputContainer: {
    width: "70%",
    display: "flex",
    borderBottom: "1px solid black",
  },
  userSignup_passwordContainer: {
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 0 0 0"
  },
  userSignup_passwordTitlepasswordInputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "120px",
  },
  userSignup_passwordInputContainer: {
    width: "100%",
    display: "flex",
    borderBottom: "1px solid black",
  },
  userSignup_confirmTitileConfirmInputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "120px",
  },
  userSignup_emailTitle: {
    width: "70%",
    display: "flex",
    fontSize: "14px",
    margin: "45px 0 0 0",
  },
  userSignup_passwordTitle: {
    width: "100%",
    display: "flex",
    fontSize: "14px",
  },
  userSignup_passwordInput: {
    [theme.breakpoints.down(600)]: {
      width: "100%",
      margin: "5px 0",
      border: "none",
      fontSize: "20px",
      backgroundColor: "transparent",
      padding: "0 0 1px 4px",
      outline: "none",
      fontSize: "16px",
    },
  },
  userSignup_cityTitle: {
    width: "70%",
    display: "flex",
    fontSize: "14px",
    margin: "45px 0 0 0",
  },
  userSignup_emailInput: {
    [theme.breakpoints.down(600)]: {
      width: "193px",
      margin: "5px 0",
      border: "none",
      fontSize: "20px",
      backgroundColor: "transparent",
      padding: "0 0 1px 4px",
      outline: "none",
      fontSize: "16px",
    },
  },
  userSignup_cityInput: {
    [theme.breakpoints.down(600)]: {
      width: "193px",
      margin: "5px 0",
      border: "none",
      fontSize: "20px",
      backgroundColor: "transparent",
      padding: "0 0 1px 4px",
      outline: "none",
      fontSize: "16px",
    },
  },
  userSignup_countryRegionContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "70%",
  },
  userSignup_countryRegionTitleContainer: {
    display: "flex",
    width: "70%",
    margin: "15px 0 0 0",
    justifyContent: "space-between",
  },
  userSignup_countryDropdownContainer: {
    borderBottom: "1px solid black",
    height: "100%",
    width: "125px",
  },
  userSignup_regionDropdownContainer: {
    borderBottom: "1px solid black",
    height: "100%",
    width: "115px",
  },
  userSignup_saveButton: {
    padding: " 8px 15px 8px",
    backgroundColor: "darkgoldenrod",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
    margin: "25px 0 0 0"
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
  const { currentUser } = useContext(AuthContext);
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

      credential.user.sendEmailVerification();

      await db.collection("user").doc(credential.user.uid).set({
        user_email: registrationValue.user_email,
        user_city: registrationValue.user_city,
        user_region: registrationValue.user_region,
        user_country: registrationValue.user_country,
        claimedGift: [],
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
      <div className={classes.userSignup_emailTitle}>Email</div>
      <div className={classes.userSignup_emailInputContainer}>
        <input
          value={registrationValue.user_email}
          className={classes.userSignup_emailInput}
          onChange={(e) =>
            setRegistrationValue({
              ...registrationValue,
              user_email: e.target.value,
            })
          }
        />
      </div>
      <div className={classes.userSignup_passwordContainer}>
        <div className={classes.userSignup_passwordTitlepasswordInputContainer}>
          <div className={classes.userSignup_passwordTitle}>Password</div>
          <div className={classes.userSignup_passwordInputContainer}>
            <input
              value={registrationValue.password}
              className={classes.userSignup_passwordInput}
              onChange={(e) =>
                setRegistrationValue({
                  ...registrationValue,
                  password: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className={classes.userSignup_confirmTitileConfirmInputContainer}>
          <div className={classes.userSignup_passwordTitle}>
            Confirm Password
          </div>
          <div className={classes.userSignup_passwordInputContainer}>
            <input
              value={registrationValue.confirmPassword}
              className={classes.userSignup_passwordInput}
              onChange={(e) =>
                setRegistrationValue({
                  ...registrationValue,
                  conFirmassword: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className={classes.userSignup_cityTitle}>City</div>
      <div className={classes.userSignup_cityInputContainer}>
        <input
          name="user_city"
          value={registrationValue.user_city}
          className={classes.userSignup_cityInput}
          onChange={(e) =>
            setRegistrationValue({
              ...registrationValue,
              user_city: e.target.value,
            })
          }
        />
      </div>

      <div className={classes.userSignup_countryRegionTitleContainer}>
        <div className="userSignup_countryTitle">Country</div>
        <div className="userSignup_regionTitle">Region</div>
      </div>
      <div className={classes.userSignup_countryRegionContainer}>
        <div className={classes.userSignup_countryDropdownContainer}>
          <CountryDropdown
            value={registrationValue.user_country}
            onChange={(country) =>
              setRegistrationValue({
                ...registrationValue,
                user_country: country,
              })
            }
            whitelist={["CA", "US"]}
            priorityOptions={["CA", "US"]}
            classes="userSignup_selectCountry"
          />
        </div>
        <div className={classes.userSignup_regionDropdownContainer}>
          <RegionDropdown
            disableWhenEmpty={true}
            country={registrationValue.user_country}
            value={registrationValue.user_region}
            valueType="short"
            labelType="short"
            disableWhenEmpty={true}
            onChange={(region) =>
              setRegistrationValue({
                ...registrationValue,
                user_region: region,
              })
            }
            classes="userSignup_selectRegion"
          />
        </div>
      </div>
      <Button className={classes.userSignup_saveButton} onClick={accountSignup}>
        SIGN UP
      </Button>
    </form>
  );
};

export default withRouter(SignUp);
