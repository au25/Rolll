import React, { useEffect, useState } from "react";
import app from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      setCurrentUser(user);

      const db = app.firestore();
      db.collection('chat').get().then(
        snapshot => {
          snapshot.docs.forEach( data => {
            console.log(data.data());
          });
        }
      );
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
