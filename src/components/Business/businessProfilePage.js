import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  inputStyle: {
    width: "80%",
    padding: "12px 20px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
});

export default function ({ userDbInfo }) {
  const classes = useStyles();
  const history = useHistory();

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(userDbInfo.data());
    console.log(userDbInfo);
  }, []);

  /**
   * Handles profile changes
   */
  function handleProfileChange(e) {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  /**
   * Handles profile submit
   */
  function handleProfileSubmit(e) {
    e.preventDefault();

    const db = firebase.firestore();
    const userRef = db.collection("businessUser").doc(userDbInfo.id).update({
      email: userInfo.email,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      phone_number: userInfo.phone_number,
    });
  }

  /**
   * Renders user information
   */
  function RenderProfile() {
    return (
      <form onSubmit={handleProfileSubmit}>
        <div>
          <div>
            <input
              value={userInfo && userInfo.email}
              className={classes.inputStyle}
              name="email"
              onChange={handleProfileChange}
            />
          </div>
          <div>
            <input
              value={userInfo && userInfo.first_name}
              className={classes.inputStyle}
              name="first_name"
              onChange={handleProfileChange}
            />
          </div>
          <div>
            <input
              value={userInfo && userInfo.last_name}
              className={classes.inputStyle}
              name="last_name"
              onChange={handleProfileChange}
            />
          </div>
          <div>
            <input
              value={userInfo && userInfo.phone_number}
              className={classes.inputStyle}
              name="phone_number"
              onChange={handleProfileChange}
            />
          </div>
        </div>
        <button>Edit</button>
        <input type="submit" value="submit" />
      </form>
    );
  }

  return (
    <div>
      <RenderProfile />
      <button
        onClick={async (e) => {
          e.preventDefault();
          await firebase.auth().signOut();
          history.push("./home");
        }}
      >
        Log out
      </button>
    </div>
  );
}
