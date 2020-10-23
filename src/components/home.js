import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Auth";
import { Redirect, useHistory } from "react-router";
import Navigation from "./landingPageNavigation";
import { makeStyles } from "@material-ui/core/styles";
import Div100vh from "react-div-100vh";
import FAQ from "./betaFAQ";

const useStyles = makeStyles((theme) => ({
  outer_container: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "black",
    [theme.breakpoints.down(600)]: {
      flexDirection: "column-reverse",
    },
  },
  banner_container: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    overflow: "hidden",
    backgroundColor: "black",
    maxWidth: "600px",
    [theme.breakpoints.down(600)]: {
      minHeight: "100%",
    },
  },
  banner_image: {
    objectFit: "cover",
    height: "100%",
    margin: "0 0 0 14px",
    width: "100%",
  },
  betaFAQ_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: "1",
    justifyContent: "space-between",
    overflow: "auto",
    backgroundColor: "rgba(241, 241, 241)",
    borderRadius: "0 50px 0 0",
    [theme.breakpoints.down(600)]: {
      overflow: "initial",
      backgroundColor: "rgba(241, 241, 241)",
      borderRadius: "0 0 0 0",
    },
  },
  arrowDown: {
    zIndex: "100000",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: "8px solid white",
    position: "absolute",
    bottom: "3%",
    right: "7%"
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
      // if (idTokenResult.claims.adminRole) {
      //   history.push("/adminHome");
      // }
      if (idTokenResult.claims.userRole) {
        history.push("/userHome");
      } else if (idTokenResult.claims.shopRole) {
        history.push("/businessHome");
      }
    });
  }

  return (
    <div>
      <Div100vh className={classes.outer_container}>
        <div className={classes.betaFAQ_container}>
          {" "}
          <FAQ />
        </div>
        <div className={classes.banner_container}>
          <Navigation />
          <img
            className={classes.banner_image}
            src="img/landing_withLogo_foreverLoop.gif"
          />
          <div className={classes.arrowDown}></div>
        </div>
      </Div100vh>
    </div>
  );
}
