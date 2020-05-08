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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    backgroundColor: "transparent",
    border: "none",
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
      <div className={classes.welcomeMsgContainer}>Hello, wooloo?</div>
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
