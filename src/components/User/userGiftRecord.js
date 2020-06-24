import React, { useContext, useState, useEffect } from "react";
import firebase from "../../firebase";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({

}));

const theme = createMuiTheme({

});

export default function ({ userDbInfo }) {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState({});


  useEffect(() => {
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }
  }, []);


  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        This is the gift record page.
      </ThemeProvider>
    </div>
  );
}
