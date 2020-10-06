import React, { useContext } from "react";
import app from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  businessPending_container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(241, 241, 241, 0.7)",
  },
  logoImg_container: {
    display: "flex",
    justifyContent: "center",
  },
  logo_image: {
    width: "50px",
    margin: "0px 0 5px 0",
    backgroundColor: "white",
    borderRadius: "50px",
  },
  businessPending_text: {
    margin: "10px 0 0 0",
    width: "70%",
    textAlign: "center",
    fontFamily: "CoreSans, sans-serif",
    fontSize: "14.5px"
  },
  logout_button: {
    fontSize: "12px",
    padding: "0",
    height: "40px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    margin: "10px 0 0 0",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

export default function () {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.businessPending_container}>
      <div className={classes.logoImg_container}>
        <img className={classes.logo_image} src="img/logo_96x96_ver1.png" />
      </div>
      <div className={classes.businessPending_text}>
        Your account will be reviewed within 24 hours.
      </div>
      <Button
        className={classes.logout_button}
        onClick={async (e) => {
          e.preventDefault();
          app.auth().signOut();
          history.push("/home");
        }}
      >
        Log out
      </Button>
    </div>
  );
}
