import React, { useContext, useState, useEffect } from "react";
import firebase from "../../firebase";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import moment from "moment";

const useStyles = makeStyles((theme) => ({}));

const theme = createMuiTheme({});

export default function ({ userDbInfo }) {
  const { currentUser } = useContext(AuthContext);
  const [claimedGift, setClaimedGift] = useState();
  const history = useHistory();
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({});

  let currentTime = moment();

  useEffect(() => {
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }
    if (userDbInfo && userDbInfo.data()) {
      fetchGiftRecord();
    }
  }, []);

  const fetchGiftRecord = () => {
    // Push all gift record to an array
    let giftRecordArray = [];
    for (let giftRecord in userDbInfo.data().claimedGift) {
      console.log(userDbInfo.data().claimedGift[giftRecord]);
      giftRecordArray.push(userDbInfo.data().claimedGift[giftRecord]);
    }

    // Sort the array by gift expiring earliest at top
    giftRecordArray.sort(function compareDate(a, b) {
      const dateA = moment(a.gift_expiry_date);
      const dateB = moment(b.gift_expiry_date);
      return dateB - dateA;
    });

    console.log("this is the sorted recrod array");
    console.log(giftRecordArray);
    setClaimedGift(giftRecordArray);
  };

  const RenderGiftRecord = () => {
    if (claimedGift) {
      if (claimedGift.length == 0) {
        return <div>no gift claimed yet</div>;
      }
      if (claimedGift[0]) {
        return claimedGift.map((gift) => (
          <div>
            <div>{gift.shop_name}</div>
            <div>{gift.shop_address}</div>
            <div>{gift.shop_city}</div>
            {currentTime < gift.gift_expiry_date ? <div>Expired</div> : <div>Active</div> }
            <div>{gift.gift_expiry_date}</div>
          </div>
        ));
      }
    } else {
      return <div>loading...</div>;
    }
  };

  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <div>Record</div>
        <RenderGiftRecord />
      </ThemeProvider>
    </div>
  );
}
