import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setupUI } from "../setupUI";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  unapprovedShop: {},
  approvedShop: {
    display: "none"
  }
});

export default function() {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div>
      <div>This is the APPROVED div container yayyyyyyyyy.</div>
      <button
        onClick={async e => {
          e.preventDefault();
          await firebase.auth().signOut();
          history.push("./home");
        }}
      >
        Log out
      </button>
    </div>
  );
}
