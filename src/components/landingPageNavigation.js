import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import CallToActionOutlinedIcon from "@material-ui/icons/CallToActionOutlined";
import { Redirect, useHistory } from "react-router";

const useStyles = makeStyles({
  list: {
    width: "250px",
    height: "100%",
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    letterSpacing: "1.5px",
    textTransform: "none",
  },
  welcomeMsgContainer: {
    padding: "20px",
    fontSize: "16px",
    height: "45px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
  },
  loginContainer: {
    display: "flex",
    padding: "15px",
    display: "flex",
    alignItems: "center",
  },
  loginIcon: {
    backgroundColor: "grey",
    width: "15px",
    height: "15px",
    margin: "0 10px 0 0",
  },
  signupContainer: {
    display: "flex",
    padding: "15px",
    display: "flex",
    alignItems: "center",
  },
  signupIcon: {
    backgroundColor: "grey",
    width: "15px",
    height: "15px",
    margin: "0 10px 0 0",
  },
  forBusinessContainer: {
    display: "flex",
    padding: "15px",
    display: "flex",
    alignItems: "center",
  },
  forBusinessIcon: {
    backgroundColor: "grey",
    width: "15px",
    height: "15px",
    margin: "0 10px 0 0",
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    position: "absolute",
    backgroundColor: "black",
  },
  loginButton: {
    fontSize: "14px",
    fontFamily: "CoreSans, sans-serif",
    letterSpacing: "0.2px",
    fontWeight: "400",
    margin: "0 0 0 10px",
    color: "rgba(0, 0, 0, 0.7)",
    backgroundColor: "transparent",
    border: "none",
  },
  signupButton: {
    fontSize: "14px",
    fontFamily: "CoreSans, sans-serif",
    letterSpacing: "0.2px",
    fontWeight: "400",
    margin: "0 0 0 10px",
    color: "rgba(0, 0, 0, 0.7)",
    backgroundColor: "transparent",
    border: "none",
  },
  forBusinessButton: {
    fontSize: "14px",
    fontFamily: "CoreSans, sans-serif",
    letterSpacing: "0.2px",
    fontWeight: "400",
    margin: "0 0 0 10px",
    color: "rgba(0, 0, 0, 0.7)",
    backgroundColor: "transparent",
    border: "none",
  },
  loginLinkContainer: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    textDecoration: "none",
  },
  signupLinkContainer: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    textDecoration: "none",
  },
  forBusinessLinkContainer: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    textDecoration: "none",
  },
  policies_container: {
    height: "66%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "0 0 12px 15px",
    fontFamily: "CoreSans, sans-serif",
    fontSize: "12px",
    letterSpacing: "0.25px",
  },
  tos_text: {
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
    padding: "5px 5px 5px 0",
    width: "110px",
    fontSize: "12px",
  },
  privacy_text: {
    padding: "5px 5px 5px 0",
    width: "110px",
    fontSize: "12px",
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
  },
});

const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        color: "rgba(0, 0, 0, 0.7)",
      },
    },
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const history = useHistory();

  const toggleDrawer = (side, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.welcomeMsgContainer}>Hello</div>
      <div className={classes.loginSingupContainer}>
        <Link to="/login" className={classes.loginLinkContainer}>
          <div className={classes.loginContainer}>
            <ExitToAppRoundedIcon />
            <button className={classes.loginButton}>Log in</button>
          </div>
        </Link>
        <Link to="/signup" className={classes.signupLinkContainer}>
          <div className={classes.signupContainer}>
            <CallToActionOutlinedIcon />
            <button className={classes.signupButton}>Sign up</button>
          </div>
        </Link>
      </div>
      <Link to="/businessInfo" className={classes.forBusinessLinkContainer}>
        <div className={classes.forBusinessContainer}>
          <StorefrontOutlinedIcon />
          <button className={classes.forBusinessButton}>Are you a shop?</button>
        </div>
      </Link>
      <div className={classes.policies_container}>
        <button
          className={classes.tos_text}
          onClick={() => history.push("/tos")}
        >
          Terms of Service
        </button>
        <button className={classes.privacy_text} onClick={()=> history.push("/privacyPolicy")}>Privacy Policy</button>
      </div>
    </div>
  );

  /**
   * Media Queries
   */
  const max600 = useMediaQuery("(max-width:600px)");
  const min600 = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.navigationContainer}>
        {max600 && (
          <div>
            <Button
              className={classes.menuButton}
              onClick={toggleDrawer("right", true)}
            >
              Menu
            </Button>
            <SwipeableDrawer
              anchor="right"
              open={state.right}
              onClose={toggleDrawer("right", false)}
              onOpen={toggleDrawer("right", true)}
            >
              {sideList("right")}
            </SwipeableDrawer>
          </div>
        )}
        {min600 && (
          <div>
            <Button onClick={toggleDrawer("right", true)}>LOL</Button>
            <SwipeableDrawer
              anchor="right"
              open={state.right}
              onClose={toggleDrawer("right", false)}
              onOpen={toggleDrawer("right", true)}
            >
              {sideList("right")}
            </SwipeableDrawer>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
