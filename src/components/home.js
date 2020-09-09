import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Auth";
import { Redirect, useHistory } from "react-router";
import Navigation from "./landingPageNavigation";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Div100vh from "react-div-100vh";

const useStyles = makeStyles((theme) => ({
  outer_container: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "rgba(241, 241, 241, 0.7)",
  },
  banner_container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "black",
    maxWidth: "825px",
  },
  banner_image: {
    objectFit: "cover",
    height: "100%",
    margin: "0 0 0 14px",
  },
}));

export default function () {
  const classes = useStyles();
  /**
   * If user is logged in, route to user home page
   */
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  // Redirect user to their home page according to their role
  if (currentUser != null) {
    currentUser.getIdTokenResult().then((idTokenResult) => {
      if (idTokenResult.claims.adminRole) {
        history.push("/adminHome");
      }
      if (idTokenResult.claims.userRole) {
        history.push("/userHome");
      }
      if (idTokenResult.claims.shopRole) {
        history.push("/businessHome");
      }
    });
  }

  return (
    <div>
      <Div100vh className={classes.outer_container}>
        <div className={classes.banner_container}>
          <Navigation />
          <img
            className={classes.banner_image}
            src="img/landing_withLogo.jpg"
          />
        </div>
      </Div100vh>
    </div>
  );
}
