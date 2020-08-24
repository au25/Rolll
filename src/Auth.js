import React, { useEffect, useState } from "react";
import firebase from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Runs everytime auth state changes
    firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      user.getIdTokenResult().then(IdTokenResult => {
        user.adminRole = IdTokenResult.claims.adminRole;
        user.shopRole = IdTokenResult.claims.shopRole;
        user.userRole = IdTokenResult.claims.userRole;
        user.approvedShop = IdTokenResult.claims.approvedShop;
        console.log("------------------------------");
        console.log("admin role: " + user.adminRole);
        console.log("user role: " + user.userRole);
        console.log("shop role: " + user.shopRole);
        console.log("approved shop: " + user.is_approve);
        console.log(user);
        console.log("------------------------------");
      });
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
