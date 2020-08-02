import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Auth";
import { Redirect, useHistory } from "react-router";
import Navigation from "./landingPageNavigation";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Div100vh from "react-div-100vh";

const useStyles = makeStyles((theme) => ({
}));

export default function () {
  const classes = useStyles();
  /**
   * If user is logged in, route to user home page
   */
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div>
        this is the tos page
    </div>
  );
}
