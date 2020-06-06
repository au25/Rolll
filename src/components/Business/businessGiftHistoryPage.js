import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setupUI } from "../setupUI";
import * as firebase from "firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessNavigation from "./businessNavigation";
import moment from "moment";

const useStyles = makeStyles({});

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
      return giftRecord.map((gift) => <div>{gift.gift_expiry_date}</div>);
    } else return <div>No gift history, start making a gift here</div>;
  };

  return (
    <div>
      <RenderGiftHistory />
      <br />
    </div>
  );
}
