import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setupUI } from "../setupUI";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessNavigation from "./businessNavigation";
import * as firebase from "firebase";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "firebase/firestore";

const useStyles = makeStyles({});

export default function ({ userDbInfo, parentShopInfo, setParentShopInfo }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const [shopInfo, setShopInfo] = useState({
    shop_name: "shop name",
    shop_address: "shop address",
    shop_city: "shop city",
  });

  /**
   * Handler for shop information inputs
   * @param {*} index Parameter to indicate which index in array to update
   */
  function handleShopProfileChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setShopInfo({ ...shopInfo, [name]: value });
  }

  /**
   * Adds shop to the database
   * Updates parent state of shop information
   */
  function handleShopProfileUpdate(e) {
    e.preventDefault();

    const db = firebase.firestore();
    db.collection("businessUser")
      .doc(userDbInfo.id)
      .update({
        shop: firebase.firestore.FieldValue.arrayUnion({
          shop_name: shopInfo.shop_name,
          shop_address: shopInfo.shop_address,
          shop_city: shopInfo.shop_city,
        }),
      });

    let newShopInfo = { ...parentShopInfo };
    newShopInfo.shop.push(shopInfo);
    setParentShopInfo(newShopInfo);
  }

  return (
    <div>
      <br />
      This is the business add shop component.
      <form onSubmit={handleShopProfileUpdate}>
        <div>
          <input
            value={shopInfo.shop_name}
            className={classes.inputStyle}
            name="shop_name"
            onChange={(e) => handleShopProfileChange(e)}
          />
          <input
            value={shopInfo.shop_address}
            className={classes.inputStyle}
            name="shop_address"
            onChange={(e) => handleShopProfileChange(e)}
          />
          <input
            value={shopInfo.shop_city}
            className={classes.inputStyle}
            name="shop_city"
            onChange={(e) => handleShopProfileChange(e)}
          />
        </div>
        <input type="submit" value="Add Shop" />
      </form>
    </div>
  );
}
