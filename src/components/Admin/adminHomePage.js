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
    margin: "25px"
  },
  unapprovedTitleContainer: {
    margin: "50px 0 25px 0",
    fontSize: "20px"
  },
  approvedTitleContainer: {
    margin: "50px 0 25px 0",
    fontSize: "20px"
  }
});

export default function() {
  const [allShopSnapshot, setAllShopSnapshot] = useState([]);
  const [allApproveShop, setAllApproveShop] = useState([]);
  const [allUnapproveShop, setAllUnapproveShop] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const classes = useStyles();
  const history = useHistory();
  const db = firebase.firestore();

  useEffect(() => {
    async function fetchAllShop() {
      const allShopSnapshot = await db.collection("businessUser").get();
      const allShopDocs = allShopSnapshot.docs;
      for (let i = 0; i < allShopDocs.length; i++) {
        console.log(allShopDocs[i].data().approveShop);
        if (allShopDocs[i].data().approveShop == "false") {
          setAllUnapproveShop(shop => [
            ...shop,
            {
              id: allShopDocs[i].id,
              first_name: allShopDocs[i].data().first_name,
              last_name: allShopDocs[i].data().last_name,
              phone_number: allShopDocs[i].data().phone_number,
              shop_address: allShopDocs[i].data().shop_address,
              shop_floor: allShopDocs[i].data().shop_floor,
              shop_name: allShopDocs[i].data().shop_name,
              email: allShopDocs[i].data().email,
              approveShop: allShopDocs[i].data().approveShop
            }
          ]);
        }

        if (allShopDocs[i].data().approveShop == "true") {
          setAllApproveShop(shop => [
            ...shop,
            {
              id: allShopDocs[i].id,
              first_name: allShopDocs[i].data().first_name,
              last_name: allShopDocs[i].data().last_name,
              phone_number: allShopDocs[i].data().phone_number,
              shop_address: allShopDocs[i].data().shop_address,
              shop_floor: allShopDocs[i].data().shop_floor,
              shop_name: allShopDocs[i].data().shop_name,
              email: allShopDocs[i].data().email,
              approveShop: allShopDocs[i].data().approveShop
            }
          ]);
        }
      }
    }
    fetchAllShop();
  }, []);

  /**
   * Renders the list of unapproved shop from allUnapproveShop state
   */
  function RenderUnapproveShop() {
    return allUnapproveShop.map(data => (
      <div className={classes.shopInfoContainer}>
        <div>{data.email}</div>
        <div>
          Status: {data.approveShop == "false" ? "Not Approved" : "Approved"}
        </div>
        <button
          onClick={e => {
            approveShop(data);
          }}
        >
          Grand Approval Permission
        </button>
      </div>
    ));
  }

  const approveShop = data => {
    // Change the custom claim of shop to not approved
    const addShopApproved = firebase
      .functions()
      .httpsCallable("addShopApproved");
    addShopApproved({ email: data.email }).then(result => {
      console.log(result);
    });

    // Updates database that the approveShop status to true
    db.collection("businessUser")
      .doc(data.id)
      .update({
        approveShop: "true"
      });

    // Set state of unapproved shop to filter out new approved shop
    setAllUnapproveShop(
      allUnapproveShop.filter(shop => {
        return shop.id != data.id;
      })
    );

    // Set state of approved shop and add new approved shop
    setAllApproveShop(shop => [
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
        approveShop: data.approveShop
      }
    ]);
  };

  /**
   * Renders the list of approved shop from allApproveShop state
   */
  function RenderApproveShop() {
    return allApproveShop.map(data => (
      <div className={classes.shopInfoContainer}>
        <div>{data.email}</div>
        <div>
          Status: {data.approveShop == "false" ? "Not Approved" : "Approved"}{" "}
        </div>
        <button
          onClick={() => {
            removeApproveShop(data);
          }}
        >
          Remove Approval Permission
        </button>
      </div>
    ));
  }

  const removeApproveShop = data => {
    // Change the custom claim of shop to not approved
    const removeShopApproved = firebase
      .functions()
      .httpsCallable("removeShopApproved");
    removeShopApproved({ email: data.email }).then(result => {
      console.log(result);
    });

    // Updates database that the approveShop status to false
    db.collection("businessUser")
      .doc(data.id)
      .update({
        approveShop: "false"
      });

    // Set new state of approved shop to filter new unapproved shop
    setAllApproveShop(
      allApproveShop.filter(shop => {
        return shop.id != data.id;
      })
    );

    // Set new state of unapproved shop and add new unapproved shop
    setAllUnapproveShop(shop => [
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
        approveShop: data.approveShop
      }
    ]);
  };

  return (
    <div className={classes.adminHomePageContainer}>
      <div className={classes.unapprovedTitleContainer}>Not Approved</div>
      <RenderUnapproveShop />
      <div className={classes.approvedTitleContainer}>Approved</div>
      <RenderApproveShop />
      <br />
      <button
        onClick={async e => {
          e.preventDefault();
          await app.auth().signOut();
          history.push('/home');
        }}
      >
        Log out
      </button>
    </div>
  );
}
