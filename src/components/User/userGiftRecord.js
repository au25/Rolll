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

const useStyles = makeStyles((theme) => ({
  record_text: {
    color: "rgba(0, 0, 0, 0.7)",
    width: "70%",
    margin: "50px 0 10px 0",
    fontSize: "16px",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    borderBottom: "1px solid black",
  },
  renderGift_container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  giftInfo_container: {
    width: "70%",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    padding: "0 0 10px 0",
    borderBottom: "1px solid black",
    margin: "15px 0px",
  },
  shopName_text: {
    fontWeight: "bold",
  },
  statusPrize_container: {
    display: "flex",
  },
  expirePrize_container: {},
  expireReward_text: {
    fontWeight: "bold",
    margin: "0 0 5px 0",
  },
  expire_text: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "94px",
    height: "35px",
    padding: "6px 8px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "0",
    letterSpacing: "1px",
    textTransform: "none",
    backgroundColor: "rgba(204, 0, 0, 0.7)",
  },
  activePrize_outerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  active_text: {
    fontWeight: "bold",
  },
  reward_text: {
    margin: "0 0 0 5px",
    fontWeight: "bold",
  },
  view_button: {
    color: "white",
    height: "35px",
    margin: "10px 0",
    padding: "6px 8px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "0",
    letterSpacing: "1px",
    textTransform: "none",
    backgroundColor: "#4caf50",
  },
}));

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

  const toGiftResult = (gift) => {
    history.push({ pathname: "/giftResult", state: { giftCopy: gift } });
  };

  const RenderGiftRecord = () => {
    if (claimedGift) {
      if (claimedGift.length == 0) {
        return <div>no gift claimed yet</div>;
      }
      if (claimedGift[0]) {
        return claimedGift.map((gift) => (
          <div className={classes.giftInfo_container}>
            <div className={classes.shopName_text}>{gift.shop_name}</div>
            <div>{gift.shop_address}</div>
            <div>{gift.shop_city}</div>
            <br />
            {currentTime > moment(gift.gift_expiry_date) ? (
              <div className={classes.expirePrize_container}>
                <div className={classes.expireReward_text}>{gift.reward}</div>
                <div className={classes.expire_text}>Expired</div>
              </div>
            ) : (
              <div className={classes.activePrize_outerContainer}>
                <div className={classes.statusPrize_container}>
                  {/* <div className={classes.active_text}>Active</div> */}
                  <div className={classes.reward_text}>{gift.reward}</div>
                </div>
                <Button
                  className={classes.view_button}
                  onTouchStart={() => toGiftResult(gift)}
                >
                  View
                </Button>
              </div>
            )}
            {/* <div>{gift.gift_expiry_date}</div> */}
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
        <div className={classes.renderGift_container}>
          <div className={classes.record_text}>Record</div>
          <RenderGiftRecord />
        </div>
      </ThemeProvider>
    </div>
  );
}
