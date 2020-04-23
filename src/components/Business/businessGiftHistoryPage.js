import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setupUI } from "../setupUI";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessNavigation from "./businessNavigation";

const useStyles = makeStyles({});

export default function() {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div>
      this is the gift history page.
      <br />
    </div>
  );
}
