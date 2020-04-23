import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";

import { CSSTransition } from "react-transition-group";
import "./styles.css";

const useStyles = makeStyles({});

export default function ({ userDbInfo, location }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  /**
   * States for showing and hiding gift options and choosing shop
   */
  const [showGiftAndShop, setShowGiftAndShop] = useState(true);
  const [showShop, setShowShop] = useState(false);
  const [selectShop, setSelectShop] = useState({});

  /**
   * Props from parent from <Link> route
   */
  console.log(location);
  const parentShopInfo = location.state.parentShopInfo;
  const gift = location.state.gift;
  const giftDuration = location.state.giftDuration;
  console.log(giftDuration);

  /**
   * Shows the shop selection component
   * Sets the shop clicked to be the selected shop
   * @param {*} shop 
   */
  const handleShopClick = (shop) => {
    setShowShop(true);
    setSelectShop(shop);
  };

  /**
   * Renders the shop list
   */
  const RenderShop = () => {
    return parentShopInfo.shop.map((shop) => (
      <div onClick={() => handleShopClick(shop)}>{shop.shop_name}</div>
    ));
  };

  /**
   * Creates the gift, write to the database
   */
  const createGift = () => {
    console.log("creating gift...");
    console.log(gift.gift_name + "     " + selectShop.shop_name);
  };

  return (
    <div>
      <br />
      Choose your shops to apply
      <br />
      {gift.gift_name}
      <br /> <br />
      <RenderShop />
      <CSSTransition
        in={showShop}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowGiftAndShop(false)}
        onExited={() => setShowGiftAndShop(true)}
      >
        <div key="lol" onClick={() => setShowShop(false)}>
          <br />
          {gift.gift_name} <br />
          {selectShop.shop_name} <br />
          <div onClick={() => createGift()}>confirm</div>
        </div>
      </CSSTransition>
    </div>
  );
}
