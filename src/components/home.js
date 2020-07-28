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
  banner_container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  banner_image: {
    objectFit: "cover",
    height: "100%"
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
      <Div100vh>
        <Navigation />
        <div className={classes.banner_container}>
          <img
            className={classes.banner_image}
            src="https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Flanding_withLogo.jpg?alt=media&token=32b5df0c-f3cb-4cc8-90c6-5c09474b6a6f"
          />
        </div>
      </Div100vh>
    </div>
  );
}
