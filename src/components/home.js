import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Auth";
import { Redirect, useHistory } from "react-router";
import Navigation from "./landingPageNavigation";

export default function() {
  /**
   * If user is logged in, route to user home page
   */
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  // Redirect user to their home page according to their role
  if (currentUser != null) {
    currentUser.getIdTokenResult().then(idTokenResult => {
      if (idTokenResult.claims.adminRole) {
        history.push("/adminHome");
      }
      if (idTokenResult.claims.userRole) {
        history.push("/userHome");
      }
      if (idTokenResult.claims.shopRole) {
        history.push("/businessHome");
      }
    });
  }

  return (
    <div>
      <Navigation />
      This is the home page.
    </div>
  );
}
