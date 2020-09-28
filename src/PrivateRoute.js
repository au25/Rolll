import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

/**
 * Authenticate user and returns token
 * @param {} param0
 */
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        // if there is a user, return routeCompoenne
        // else redirects to home
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/home"} />
        )
      }
    />
  );
};

export default PrivateRoute;
