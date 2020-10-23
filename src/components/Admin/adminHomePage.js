import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import app from "../../firebase";
import { useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "../../Auth";
import firebase from "../../firebase";
// Required for side-effects
require("firebase/functions");

const useStyles = makeStyles({
  shopInfoContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "25px",
  },
  unapprovedTitleContainer: {
    margin: "50px 0 25px 0",
    fontSize: "20px",
  },
  approvedTitleContainer: {
    margin: "50px 0 25px 0",
    fontSize: "20px",
  },
});

export default function () {
  const [allShopSnapshot, setAllShopSnapshot] = useState([]);
  const [allApproveUser, setAllApproveUser] = useState([]);
  const [allUnapproveUser, setAllUnapproveUser] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const classes = useStyles();
  const history = useHistory();
  const db = firebase.firestore();

  if (currentUser != null) {
    console.log("running user auth");
    currentUser.getIdTokenResult().then((idTokenResult) => {
      if (!idTokenResult.claims.adminRole) {
        history.push("/home");
      }
    });
  } else {
    history.push("/home");
  }

  useEffect(() => {
    async function fetchAllBusinessUser() {
      const businessUserCollection = await db.collection("businessUser").get();
      const businessUserDoc = businessUserCollection.docs;
      for (let i = 0; i < businessUserDoc.length; i++) {
        if (businessUserDoc[i].data().is_approve == "false") {
          setAllUnapproveUser((user) => [
            ...user,
            {
              id: businessUserDoc[i].id,
              first_name: businessUserDoc[i].data().first_name,
              last_name: businessUserDoc[i].data().last_name,
              phone_number: businessUserDoc[i].data().phone_number,
              shop_address: businessUserDoc[i].data().shop.shop_address,
              shop_floor: businessUserDoc[i].data().shop.shop_floor,
              shop_name: businessUserDoc[i].data().shop.shop_name,
              email: businessUserDoc[i].data().email,
              approveShop: businessUserDoc[i].data().is_approve,
            },
          ]);
        }

        if (businessUserDoc[i].data().is_approve == "true") {
          setAllApproveUser((user) => [
            ...user,
            {
              id: businessUserDoc[i].id,
              first_name: businessUserDoc[i].data().first_name,
              last_name: businessUserDoc[i].data().last_name,
              phone_number: businessUserDoc[i].data().phone_number,
              shop_address: businessUserDoc[i].data().shop.shop_address,
              shop_floor: businessUserDoc[i].data().shop.shop_floor,
              shop_name: businessUserDoc[i].data().shop.shop_name,
              email: businessUserDoc[i].data().email,
              approveShop: businessUserDoc[i].data().is_approve,
            },
          ]);
        }
      }
    }
    fetchAllBusinessUser();
  }, []);

  /**
   * Renders the list of unapproved shop from allUnapproveUser state
   */
  function RenderUnapproveUser() {
    return allUnapproveUser.map((data) => (
      <div className={classes.shopInfoContainer}>
        <div>{data.email}</div>
        <div>
          Status: {data.approveShop == "false" ? "Not Approved" : "Approved"}
        </div>
        <button
          onClick={(e) => {
            approveUser(data);
          }}
        >
          Grand Approval Permission
        </button>
      </div>
    ));
  }

  const approveUser = (data) => {
    // Change the custom claim of shop to not approved
    const addBusinessUserApproved = firebase
      .functions()
      .httpsCallable("addBusinessUserApproved");
    addBusinessUserApproved({ email: data.email }).then((result) => {
      // console.log(result);
    });

    // Updates database that the approveShop status to true
    db.collection("businessUser").doc(data.id).update({
      is_approve: "true",
    });

    // Set state of unapproved shop to filter out new approved shop
    setAllUnapproveUser(
      allUnapproveUser.filter((shop) => {
        return shop.id != data.id;
      })
    );

    // Set state of approved shop and add new approved shop
    setAllApproveUser((user) => [
      ...user,
      {
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
        shop_address: data.shop_address,
        shop_floor: data.shop_floor,
        shop_name: data.shop_name,
        email: data.email,
        approveShop: data.approveShop,
      },
    ]);
  };

  /**
   * Renders the list of approved shop from allApproveUser state
   */
  function RenderApproveUser() {
    return allApproveUser.map((data) => (
      <div className={classes.shopInfoContainer}>
        <div>{data.email}</div>
        <div>
          Status: {data.approveShop == "false" ? "Not Approved" : "Approved"}{" "}
        </div>
        <button
          onClick={() => {
            removeApproveUser(data);
          }}
        >
          Remove Approval Permission
        </button>
      </div>
    ));
  }

  const removeApproveUser = (data) => {
    // Change the custom claim of shop to not approved
    const removeBusinessUserApproved = firebase
      .functions()
      .httpsCallable("removeBusinessUserApproved");
    removeBusinessUserApproved({ email: data.email }).then((result) => {
      // console.log(result);
    });

    // Updates database that the approveShop status to false
    db.collection("businessUser").doc(data.id).update({
      is_approve: "false",
    });

    // Set new state of approved shop to filter new unapproved shop
    setAllApproveUser(
      allApproveUser.filter((shop) => {
        return shop.id != data.id;
      })
    );

    // Set new state of unapproved shop and add new unapproved shop
    setAllUnapproveUser((shop) => [
      ...shop,
      {
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
        shop_address: data.shop_address,
        shop_floor: data.shop_floor,
        shop_name: data.shop_name,
        email: data.email,
        approveShop: data.approveShop,
      },
    ]);
  };

  return (
    <div className={classes.adminHomePageContainer}>
      <div className={classes.unapprovedTitleContainer}>Not Approved</div>
      <RenderUnapproveUser />
      <div className={classes.approvedTitleContainer}>Approved</div>
      <RenderApproveUser />
      <br />
      <button
        onClick={async (e) => {
          e.preventDefault();
          await app.auth().signOut();
          history.push("/home");
        }}
      >
        Log out
      </button>
    </div>
  );
}
