import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setupUI } from "../setupUI";
import * as firebase from "firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessNavigation from "./businessNavigation";
import moment from "moment";

const useStyles = makeStyles({
  giftInfo_outerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    fontWeight: "bold"
  }
});

export default function ({ userDbInfo }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const [giftRecord, setGiftRecord] = useState({});

  const db = firebase.firestore();
  const currentTime = firebase.firestore.Timestamp.now(new Date()).toDate();

  useEffect(() => {
    fetch_giftRecord();
  }, []);

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
          if (currentTime > moment(gift.gift_expiry_date)) {
            giftRecordArray.push(gift);
          }
        });
      }
    });

    giftRecordArray.sort(function compareDate(a, b) {
      const dateA = moment(a.gift_expiry_date);
      const dateB = moment(b.gift_expiry_date);
      return dateB - dateA;
    });
    setGiftRecord(giftRecordArray);
  };

  const RenderGiftHistory = () => {
    if (giftRecord && giftRecord[0]) {
      console.log("these are the gift records");
      console.log(giftRecord);
      return giftRecord.map((gift) => (
        <div className={classes.giftInfo_innerContainer}>
          <div className={classes.shopName_text}>{gift.shop_name}</div>
          <div className={classes.shopAddress_text}>{gift.shop_address}</div>
          <div className={classes.shopCity_text}>{gift.shop_city}</div>
          <div className={classes.giftName_text}>{gift.gift_name}</div>
          <div className={classes.giftCreation_date}>{moment(gift.gift_creation_date).format("LL")}</div>
          <div className={classes.giftExpiry_date}>{moment(gift.gift_expiry_date).format("LL")}</div>
        </div>
      ));
    } else return <div>No gift history, start making a gift here</div>;
  };

  return (
    <div className={classes.giftInfo_outerContainer}>
      <RenderGiftHistory />
    </div>
  );
}
