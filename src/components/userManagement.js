import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase";
import VerifyEmail from "./VerifyEmail";
import ResetPassword from "./userMgmt_resetPassword";

const useStyles = makeStyles((theme) => ({
  userMgmt_outerContainer: {
    height: "100vh",
    backgroundColor: "rgba(241, 241, 241, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function () {
  const classes = useStyles();

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  const mode = getParameterByName("mode");
  const actionCode = getParameterByName("oobCode");
  const continueUrl = getParameterByName("continueUrl");
  const auth = firebase.auth();

  const RenderBody = () => {
    switch (mode) {
      case "verifyEmail":
        return <VerifyEmail actionCode={actionCode} />;
      case "recoverEmail":
        return <div>{mode}</div>;
      case "resetPassword":
        return <ResetPassword actionCode={actionCode} />
      default:
        return <div>error</div>;
    }
  };

  return (
    <div className={classes.userMgmt_outerContainer}>
      <RenderBody />
    </div>
  );
}
