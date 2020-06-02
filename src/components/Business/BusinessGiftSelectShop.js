import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as firebase from "firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessSelectShopNavigation from "./businessSelectShopNavigation";
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";

import { CSSTransition } from "react-transition-group";
import "./styles.css";

const useStyles = makeStyles({});

export default function ({ location }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  /**
   * States for showing and hiding gift options and choosing shop
   */
  const [showGiftAndShop, setShowGiftAndShop] = useState(true);
  const [showShop, setShowShop] = useState(false);
  const [selectShop, setSelectShop] = useState({});
  const [giftRecord, setGiftRecord] = useState({});
  const [activeGift, setActiveGift] = useState({});
  const [userDbInfo, setUserDbInfo] = useState();

  /**
   * Props from parent from <Link> route
   */
  const parentShopInfo = location.state.parentShopInfo;
  const gift = location.state.selectGift;
  const giftDuration = location.state.giftDuration.gift_duration;
  const userId = location.state.userId;
  const db = firebase.firestore();

  const fetch_giftRecord = async () => {
    const template_exist = await db
      .collection("businessUser")
      .doc(userId)
      .collection("giftRecord")
      .doc(gift.gift_name)
      .get();
    setGiftRecord(template_exist);
  };

  useEffect(() => {
    fetch_giftRecord();

    const db = firebase.firestore();
    const fetch_userDbInfo = async () => {
      const user = await db.collection("businessUser").doc(userId).get();
      setUserDbInfo(user);
    };
    fetch_userDbInfo();
  }, []);

  /**
   * Shows the shop selection component
   * Sets the shop clicked to be the selected shop
   * @param {*} shop
   */
  const handleShopClick = (shop) => {
    console.log("onclick before creating");
    console.log(giftRecord.data());
    setShowShop(true);
    setSelectShop(shop);
  };

  /**
   * Checks if the shop already has an active gift and renders the shop list
   */
  const RenderShop = () => {
    if (giftRecord && giftRecord.id) {
      /**
       * Function that checks if a shop has a gift already and if that gift is active
       */
      const hasActiveGift = (shop) => {
        // checks to see if giftRecord collection exists
        if (giftRecord.exists) {
          const giftRecordArray = giftRecord.data()[gift.gift_name];
          const currentTime = moment(
            firebase.firestore.Timestamp.now(new Date()).toDate()
          );

          /**
           * Starts checking at the end of the array for the newest gift
           * If it does, check to see if current time is before expiry time of newest gift
           */
          for (let i = giftRecordArray.length - 1; i >= 0; i--) {
            if (giftRecordArray[i].shop_name == shop.shop_name) {
              if (currentTime.isBefore(giftRecordArray[i].gift_expiry_date)) {
                return true;
              }
            }
          }
        }
        return false;
      };

      const handleGiftDisable = (shop, index) => {
        console.log("disable");

        const giftRecordArray = giftRecord.data()[gift.gift_name];
        const currentTime = moment(
          firebase.firestore.Timestamp.now(new Date()).toDate()
        );

        if (giftRecord && giftRecord.id) {
          for (let i = giftRecordArray.length - 1; i >= 0; i--) {
            if (giftRecordArray[i].shop_name == shop.shop_name) {
              if (currentTime.isBefore(giftRecordArray[i].gift_expiry_date)) {
                console.log(giftRecordArray[i].gift_id);
                console.log(i);

                giftRecordArray[i].gift_expiry_date = moment(
                  firebase.firestore.Timestamp.now(new Date()).toDate()
                ).format();
                console.log(giftRecord.data());
                console.log(gift.gift_name);
                console.log(giftRecordArray);

                db.collection("businessUser")
                  .doc(userId)
                  .collection("giftRecord")
                  .doc(gift.gift_name)
                  .set({
                    ...giftRecord.data(),
                    [gift.gift_name]: giftRecordArray,
                  });
              }
            }
          }
          fetch_giftRecord();
        }
      };

      /**
       * Returns the list of shop
       */
      return parentShopInfo.shop.map((shop, index) => {
        if (hasActiveGift(shop)) {
          return (
            <div>
              {shop.shop_name} has active gift
              <button
                onClick={() => {
                  handleGiftDisable(shop, index);
                }}
              >
                End
              </button>
            </div>
          );
        } else {
          return (
            <div
              onClick={() => {
                handleShopClick(shop);
              }}
            >
              {shop.shop_name} no active gift
            </div>
          );
        }
      });
    }
    return null;
  };

  /**
   * Creates the gift, write to the database
   * Sets shopShop state to false, which hides the modal
   */
  const createGift = async () => {
    const db = firebase.firestore();

    const currentTimeStamp = firebase.firestore.Timestamp.now(new Date());
    const gift_creation_date = moment(currentTimeStamp.toDate()).format();
    const gift_expiry_date = moment(currentTimeStamp.toDate())
      .add(giftDuration, "days")
      .format();

    /**
     * Creates gift in gift collection where user can access
     * Gets the ID of document before creating it
     */
    const giftDocRef = db.collection("gift").doc();
    console.log("this is the select shop info");
    console.log(selectShop);

    const cityRef = db
      .collection("gift")
      .doc(selectShop.shop_country)
      .collection(selectShop.shop_region)
      .doc(selectShop.shop_city);
    const cityRefSnapshop = await cityRef.get();
    console.log(cityRefSnapshop);

    const giftName = "gift";

    /**
     * If city reference in database exists, update the array
     * else creates the reference
     */
    if (cityRefSnapshop.exists) {
      cityRef.update({
        [giftName]: firebase.firestore.FieldValue.arrayUnion({
          gift_name: gift.gift_name,
          gift_id: giftDocRef.id,
          [giftDocRef.id]: "gift_id",
          gift_creation_timeStamp: firebase.firestore.Timestamp.now(new Date()),
          gift_creation_date: gift_creation_date,
          gift_expiry_date: gift_expiry_date,
          shop_address: selectShop.shop_address,
          shop_name: selectShop.shop_name,
          shop_city: selectShop.shop_city,
        }),
      });
    } else {
      cityRef.set({
        [giftName]: firebase.firestore.FieldValue.arrayUnion({
          gift_name: gift.gift_name,
          gift_id: giftDocRef.id,
          [giftDocRef.id]: "gift_id",
          gift_creation_timeStamp: firebase.firestore.Timestamp.now(new Date()),
          gift_creation_date: gift_creation_date,
          gift_expiry_date: gift_expiry_date,
          shop_address: selectShop.shop_address,
          shop_name: selectShop.shop_name,
          shop_city: selectShop.shop_city,
        }),
      });
    }

    /**
     * Checks if any gift using default gifts exists
     * If it does, then update the array
     * If not, create the collection and document
     */
    console.log(giftRecord.exists);

    if (giftRecord && giftRecord.exists) {
      console.log("template exists, now updating...");
      console.log(giftRecord.exists);
      console.log(giftRecord);
      await db
        .collection("businessUser")
        .doc(userId)
        .collection("giftRecord")
        .doc(gift.gift_name)
        .update({
          [gift.gift_name]: firebase.firestore.FieldValue.arrayUnion({
            gift_name: gift.gift_name,
            gift_id: giftDocRef.id,
            [giftDocRef.id]: "gift_id",
            gift_creation_timeStamp: firebase.firestore.Timestamp.now(
              new Date()
            ),
            gift_creation_date: gift_creation_date,
            gift_expiry_date: gift_expiry_date,
            shop_address: selectShop.shop_address,
            shop_name: selectShop.shop_name,
            shop_city: selectShop.shop_city,
          }),
        });
      fetch_giftRecord();
    } else {
      console.log("doesnt exist");
      console.log(giftRecord);
      const new_giftRecord_ref = db
        .collection("businessUser")
        .doc(userId)
        .collection("giftRecord")
        .doc(gift.gift_name);

      await new_giftRecord_ref.set({
        [gift.gift_name]: firebase.firestore.FieldValue.arrayUnion({
          gift_name: gift.gift_name,
          gift_id: giftDocRef.id,
          [giftDocRef.id]: "gift_id",
          gift_creation_timeStamp: firebase.firestore.Timestamp.now(new Date()),
          gift_creation_date: gift_creation_date,
          gift_expiry_date: gift_expiry_date,
          shop_address: selectShop.shop_address,
          shop_name: selectShop.shop_name,
          shop_city: selectShop.shop_city,
        }),
      });
      console.log("new gift record created");
      fetch_giftRecord();
    }

    setShowShop(false);
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
        <div key="lol">
          <br />
          {gift.gift_name} <br />
          {selectShop.shop_name} <br />
          <div onClick={() => createGift()}>confirm</div>
        </div>
      </CSSTransition>
      <BusinessSelectShopNavigation />
    </div>
  );
}
