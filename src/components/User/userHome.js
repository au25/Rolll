import React, {useContext} from "react";
import app from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import UserGift from "./userGift";
import {AuthContext} from "../../Auth";
import { useHistory } from "react-router-dom";
import UserNavigation from "./userNavigation";

const useStyles = makeStyles({
  userHomeContainer: {
    display: "flex",
    flexDirection: "column"
  }
});

export default function() {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.userHomeContainer}>
      This is the user home page after signning up.
      <br></br>
      <div>
        <UserNavigation />
      </div>
      <button
        onClick={e => {
          e.preventDefault();
          app.auth().signOut();
          history.push("/home");
        }}
      >
        Log out
      </button>
    </div>
  );
}
