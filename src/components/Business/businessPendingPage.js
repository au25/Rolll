import React, {useContext} from "react";
import app from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import {AuthContext} from "../../Auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({

});

export default function() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div>
      This is the business pending page.
      <button
        onClick={async e => {
          e.preventDefault();
          await app.auth().signOut();
          history.push("/home");
        }}
      >
        Log out
      </button>
    </div>
  );
}
