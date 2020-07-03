import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setupUI } from "../setupUI";
import * as firebase from "firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessNavigation from "./businessNavigation";
import Button from "@material-ui/core/Button";
import moment from "moment";

const useStyles = makeStyles({
  giftInfo_outerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  recordText: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.7)",
    width: "70%",
    margin: "50px 0 10px 0",
    borderBottom: "1px solid black",
  },
  giftInfo_innerContainer: {
    width: "70%",
    margin: "15px 0px",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    borderBottom: "1px solid black",
    padding: "0 0 10px 0",
  },
  shopName_text: {
    fontWeight: "bold",
  },
  giftName_text: {
    // fontWeight: "bold"
  },
  giftCreation_date: {
    display: "flex",
  },
  giftExpiry_date: {
    display: "flex",
  },
  startDate_text: {
    margin: "0 5px 0 0",
  },
  startDate: {
    fontWeight: "bold",
  },
  endDate_text: {
    margin: "0 5px 0 0",
  },
  endDate: {
    fontWeight: "bold",
  },
  disableButton_container: {
    width: "100%",
    // display: "flex",
    // justifyContent: "center",
    // margin: "10px"
  },
  disable_button: {
    fontSize: "14px",
    fontWeight: "bold",
    backgroundColor: "rgba(204, 0, 0, 0.7)",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "94px",
    height: "35px",
    margin: "10px 0",
    borderRadius: "0",
  },
});

export default function ({ userDbInfo }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const [giftRecord, setGiftRecord] = useState({});

  const db = firebase.firestore();
  const currentTime = firebase.firestore.Timestamp.now(new Date()).toDate();

  /**
   * Fetch gift records before component mounts
   */
  useEffect(() => {
    fetch_giftRecord();
  }, []);

  /**
   * Fetches gift record and populate gift array
   */
  const fetch_giftRecord = async () => {
    const db_giftRecord = await db
      .collection("businessUser")
      .doc(userDbInfo.id)
      .collection("giftRecord")
      .get();

    let giftRecordArray = [];
    db_giftRecord.docs.map((doc) => {
      for (let giftTemplate in doc.data()) {
        doc.data()[giftTemplate].map((gift) => {
          // Adds all gifts
          giftRecordArray.push(gift);

          // Adds only gifts that expired
          // if (currentTime > moment(gift.gift_expiry_date)) {
          //   giftRecordArray.push(gift);
          // }
        });
      }
    });

    // Sorts the gift, newest at the front
    giftRecordArray.sort(function compareDate(a, b) {
      const dateA = moment(a.gift_expiry_date);
      const dateB = moment(b.gift_expiry_date);
      return dateB - dateA;
    });
    setGiftRecord(giftRecordArray);
  };

  /**
   * Disables the gift on shop side and public gift side
   */
  const disableGift = async (gift) => {
    // Get gift array from shop that needs to be updated
    const giftArrayRef = db
      .collection("businessUser")
      .doc(userDbInfo.id)
      .collection("giftRecord")
      .doc(gift.gift_name);
    const giftArray = await giftArrayRef.get();
    const giftArrayCopy = giftArray.data()[gift.gift_name];
    for (let i = giftArrayCopy.length - 1; i >= 0; i--) {
      if (giftArrayCopy[i].gift_id == gift.gift_id) {
        console.log("updating array at index: " + i);
        giftArrayCopy[i].gift_expiry_date = moment(
          firebase.firestore.Timestamp.now(new Date()).toDate()
        ).format();
      }
    }
    console.log({ [gift.gift_name]: giftArrayCopy });
    console.log(giftArray.data());
    giftArrayRef.set({ [gift.gift_name]: giftArrayCopy });

    // Updating array of gift in location
    // Gets shop information first to cross match address to ensure gift belongs to that shop
    const businessUser_ref = db.collection("businessUser").doc(userDbInfo.id);
    const businessUser_info = await businessUser_ref.get();
    const shopArray = businessUser_info.data().shop;

    for (let k = 0; k < shopArray.length; k++) {
      if (shopArray[k].shop_address == gift.shop_address) {
        const shopLocation_ref = db
          .collection("gift")
          .doc(shopArray[k].shop_country)
          .collection(shopArray[k].shop_region)
          .doc(shopArray[k].shop_city);
        const cityRefSnapshop = await shopLocation_ref.get();
        let claimedGifts = cityRefSnapshop.data().gift;

        for (let j = claimedGifts.length - 1; j >= 0; j--) {
          if (claimedGifts[j].gift_id == gift.gift_id) {
            claimedGifts[j].gift_expiry_date = moment(
              firebase.firestore.Timestamp.now(new Date()).toDate()
            ).format();
          }
        }
        shopLocation_ref.set({ gift: claimedGifts });
      }
    }
  };

  const RenderGiftHistory = () => {
    if (giftRecord && giftRecord[0]) {
      // Renders gift information
      // If gift has not expire, renders diable button as well
      return giftRecord.map((gift) =>
        currentTime < moment(gift.gift_expiry_date) ? (
          <div className={classes.giftInfo_innerContainer}>
            <div className={classes.shopName_text}>{gift.shop_name}</div>
            <div className={classes.shopAddress_text}>{gift.shop_address}</div>
            <div className={classes.shopCity_text}>{gift.shop_city}</div>
            <br />
            <div className={classes.giftName_text}>{gift.gift_name}</div>
            <div className={classes.giftCreation_date}>
              <div className={classes.startDate_text}>Start time:</div>
              <div className={classes.startDate}>
                {moment(gift.gift_creation_date).format("LL")}
              </div>
            </div>
            <div className={classes.giftExpiry_date}>
              <div className={classes.endDate_text}>End time:</div>
              <div className={classes.endDate}>
                {moment(gift.gift_expiry_date).format("LL")}
              </div>
            </div>
            <div className={classes.disableButton_container}>
              <Button
                className={classes.disable_button}
                onClick={() => disableGift(gift)}
              >
                Disable
              </Button>
            </div>
          </div>
        ) : (
          <div className={classes.giftInfo_innerContainer}>
            <div className={classes.shopName_text}>{gift.shop_name}</div>
            <div className={classes.shopAddress_text}>{gift.shop_address}</div>
            <div className={classes.shopCity_text}>{gift.shop_city}</div>
            <div className={classes.giftName_text}>{gift.gift_name}</div>
            <div className={classes.giftCreation_date}>
              <div className={classes.startDate_text}>Start time:</div>
              <div className={classes.startDate}>
                {moment(gift.gift_creation_date).format("LL")}
              </div>
            </div>
            <div className={classes.giftExpiry_date}>
              <div className={classes.endDate_text}>End time:</div>
              <div className={classes.endDate}>
                {moment(gift.gift_expiry_date).format("LL")}
              </div>
            </div>
          </div>
        )
      );
    } else return <div>No gift record</div>;
  };

  return (
    <div className={classes.giftInfo_outerContainer}>
      <div className={classes.recordText}>Gift Record</div>
      <RenderGiftHistory />
    </div>
  );
}
