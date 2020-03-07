import React, { useContext } from "react";
import { AuthContext } from "../Auth";
import { Redirect } from "react-router";

export default function() {
  /**
   * If user is logged in, route to user home page
   */
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return <div>This is the home page.</div>;
}
