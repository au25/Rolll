import React, { useEffect, useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  businessProfilePage_outerContainer: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      // width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
      height: "100%",
      alignItems: "center",
    },
  },
  businessProfilePageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#e8e8e8",
      borderRadius: "20px",
      width: "415px",
      height: "675px",
      justifyContent: "center"
    },
  },
  maangerInfoText: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "45px 0 20px 0",
    display: "flex",
    width: "70%",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
  },
  formContainer: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputStyle: {
    width: "80%",
    padding: "12px 20px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  logoutButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  logoutButton: {
    width: "40%",
    fontSize: "12px",
    padding: "0",
    height: "40px",
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  updateButton: {
    textTransform: "none",
    backgroundColor: "#4caf50",
    color: "rgba(255, 255, 255)",
    letterSpacing: "1px",
    fontSize: "16px",
    width: "50%",
    margin: " 0 0 12px 0",
    height: "50px",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      },
      input: {
        "&:disabled": {
          backgroundColor: "rgba(234, 234, 234)",
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
        height: "60px",
        margin: "0 0 28px 0",
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50",
          },
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

export default function ({ userDbInfo }) {
  const classes = useStyles();
  const history = useHistory();

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(userDbInfo.data());
  }, []);

  /**
   * Handles profile changes
   */
  function handleProfileChange(e) {
    const { name, value } = e.target;
    console.log(value);
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  /**
   * Handles profile submit
   */
  function handleProfileSubmit(e) {
    e.preventDefault();
    console.log("profile submiting...");

    const db = firebase.firestore();
    db.collection("businessUser").doc(userDbInfo.id).update({
      email: userInfo.email,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      phone_number: userInfo.phone_number,
    });
  }

  return (
    <div className={classes.businessProfilePage_outerContainer}>
      <div className={classes.businessProfilePageContainer}>
        <div className={classes.maangerInfoText}>User Info</div>
        <ThemeProvider theme={theme}>
          <ValidatorForm
            className={classes.formContainer}
            noValidate
            autoComplete="off"
            onSubmit={handleProfileSubmit}
          >
            <TextValidator
              className={classes.emailInput}
              // disabled="true"
              id="filled-basic"
              label="Email"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={userInfo && userInfo.email}
              validators={["required", "isEmail"]}
              errorMessages={[
                "Email address is requred",
                "Email address is not valid",
              ]}
              name="email"
              onChange={handleProfileChange}
            />
            <TextValidator
              id="filled-basic"
              label="First Name"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={userInfo && userInfo.first_name}
              validators={["required"]}
              errorMessages={["First name is requred"]}
              name="first_name"
              onChange={handleProfileChange}
            />
            <TextValidator
              id="filled-basic"
              label="Last Name"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={userInfo && userInfo.last_name}
              validators={["required"]}
              errorMessages={["Last name is requred"]}
              name="last_name"
              onChange={handleProfileChange}
            />
            <TextValidator
              id="filled-basic"
              label="Phone Number"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={userInfo && userInfo.phone_number}
              validators={["required"]}
              errorMessages={["Phone number is requred"]}
              name="phone_number"
              onChange={handleProfileChange}
            />
            <Button className={classes.updateButton} type="submit">
              Update
            </Button>
            <div className={classes.logoutButtonContainer}>
              <Button
                className={classes.logoutButton}
                onClick={async (e) => {
                  e.preventDefault();
                  await firebase.auth().signOut();
                  history.push("./home");
                }}
              >
                Log out
              </Button>
            </div>
          </ValidatorForm>
        </ThemeProvider>
      </div>
    </div>
  );
}
