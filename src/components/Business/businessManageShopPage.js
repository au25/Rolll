import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setupUI } from "../setupUI";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessNavigation from "./businessNavigation";
import BusinessAddShopPage from "./businessAddShopPage";

const useStyles = makeStyles({});

export default function ({ userDbInfo, parentShopInfo, setParentShopInfo }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const db = firebase.firestore();

  /**
   * Handler for shop information inputs
   * @param {*} index Parameter to indicate which index in array to update
   */
  function handleShopProfileChange(index, e) {
    e.preventDefault();
    const { name, value } = e.target;

    let shopInfoCopy = parentShopInfo.shop;
    shopInfoCopy[index][name] = value;
    setParentShopInfo({
      ...parentShopInfo,
      shop: shopInfoCopy,
    });
  }

  /**
   * Updates shop info on the DB
   */
  function handleShopProfileUpdate(e) {
    e.preventDefault();

    db.collection("businessUser")
      .doc(userDbInfo.id)
      .set({
        ...parentShopInfo,
        shop: parentShopInfo.shop,
      });
  }

  /**
   * Handles removing a shop
   * @param {*} shop
   */
  function handleRemoveShop(shop, e) {
    e.preventDefault();

    const filterRemoveShop = parentShopInfo.shop.filter((shopInfoShop) => {
      return shopInfoShop.shop_address != shop.shop_address;
    });

    db.collection("businessUser")
      .doc(userDbInfo.id)
      .set({
        ...parentShopInfo,
        shop: filterRemoveShop,
      });

    setParentShopInfo({
      ...parentShopInfo,
      shop: filterRemoveShop,
    });
  }

  return (
    <div>
      {/* Maps a user's shop info */}
      {parentShopInfo.shop
        ? parentShopInfo.shop.map((shop, index) => (
            <form key={index} onSubmit={handleShopProfileUpdate}>
              <div>
                <input
                  value={shop.shop_name}
                  className={classes.inputStyle}
                  name="shop_name"
                  onChange={(e) => handleShopProfileChange(index, e)}
                />
                <input
                  value={shop.shop_address}
                  className={classes.inputStyle}
                  name="shop_address"
                  onChange={(e) => handleShopProfileChange(index, e)}
                />
                <input
                  value={shop.shop_city}
                  className={classes.inputStyle}
                  name="shop_city"
                  onChange={(e) => handleShopProfileChange(index, e)}
                />
              </div>
              <input type="submit" value="Update Shop" />
              <button onClick={(e) => handleRemoveShop(shop, e)}>
                Remove Shop
              </button>
            </form>
          ))
        : null}
      <BusinessAddShopPage
        userDbInfo={userDbInfo}
        parentShopInfo={parentShopInfo}
        setParentShopInfo={setParentShopInfo}
      />
    </div>
  );
}
