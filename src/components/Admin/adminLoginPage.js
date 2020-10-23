import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AdminLoginForm from "./adminLoginForm";
import { AuthContext } from "../../Auth";
import { withRouter, Redirect, useHistory } from "react-router";
import Navigation from "../landingPageNavigation";

const useStyles = makeStyles({
  signupPageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  fbButton: {
    width: "300px"
  },
  googleButton: {
    width: "300px"
  },
  accountMsg: {
    width: "300px"
  }
});

export default function() {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={classes.signupPageContainer}>
      {/* <Navigation /> */}
      <div className={classes.formContainer}>
        <AdminLoginForm />
      </div>
    </div>
  );
}
