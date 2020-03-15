import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  welcomeMsgContainer: {
    padding: "15px"
  },
  loginContainer: {
    display: "flex",
    padding: "15px"
  },
  loginIcon: {
    backgroundColor: "grey",
    width: "15px",
    height: "15px",
    margin: "0 10px 0 0"
  },
  signupContainer: {
    display: "flex",
    padding: "15px"
  },
  signupIcon: {
    backgroundColor: "grey",
    width: "15px",
    height: "15px",
    margin: "0 10px 0 0"
  },
  forBusinessContainer: {
    display: "flex",
    padding: "15px"
  },
  forBusinessIcon: {
    backgroundColor: "grey",
    width: "15px",
    height: "15px",
    margin: "0 10px 0 0"
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "flex-end"
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.welcomeMsgContainer}>Welcome!</div>
      <div className={classes.loginSingupContainer}>
        <div className={classes.loginContainer}>
          <div className={classes.loginIcon}></div>
          <Link to="/login">
            <button>Log in</button>
          </Link>
        </div>
        <div className={classes.signupContainer}>
          <div className={classes.signupIcon}></div>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        </div>
      </div>
      <Divider />
      <div className={classes.forBusinessContainer}>
        <div className={classes.forBusinessIcon}></div>
        <Link to="/businessInfo">
          <button>For Business</button>
        </Link>
      </div>
    </div>
  );

  /**
   * Media Queries
   */
  const max600 = useMediaQuery("(max-width:600px)");
  const min600 = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.navigationContainer}>
      {max600 && (
        <div>
          <Button onClick={toggleDrawer("right", true)}>Menu</Button>
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
  );
}
