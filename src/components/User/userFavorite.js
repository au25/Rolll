import React, {useContext} from "react";
import app from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Gift from "../gift";
import {AuthContext} from "../../Auth";
import { useHistory } from "react-router-dom";

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
    <div>
        This is the user favorite page.
    </div>
  );
}
