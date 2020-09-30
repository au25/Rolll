import React, { useContext, useState, useEffect } from "react";
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
    [theme.breakpoints.up("sm")]: {
      width: "415px",
      height: "600px",
      overflow: "scroll",
      backgroundColor: "#e8e8e8",
      borderRadius: "20px"
    },
  },
  giftInfo_container_active: {
    width: "70%",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    padding: "10px 0 10px 15px",
    borderLeft: "5px solid #91b96c",
    margin: "15px 0px",
    backgroundColor: "white",
    borderRadius: "5px 10px 10px 5px",
  },
  giftInfo_outerContainer: {
    width: "70%",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    backgroundColor: "white",
    borderRadius: "5px 10px 10px 5px",
    margin: "15px 0px",
    borderRadius: "0 0 10px 40px",
  },
  giftInfo_container: {
    width: "100%",
    // padding: "10px 0 10px 15px",
    // borderRadius: "5px 10px 10px 5px",
  },
  shopInfo_container: {
    backgroundColor: "#4a4a4a",
    color: "#fbfcfc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0",
  },
  shopName_text: {
    fontWeight: "bold",
  },
  statusPrize_container: {
    display: "flex",
  },
  expirePrize_container: {},
  start_container: {
    display: "flex",
  },
  end_container: {
    display: "flex",
    margin: "0 0 5px 0",
  },
  start_text: {
    fontWeight: "bold",
    margin: "0 5px 0 0",
  },
  end_text: {
    fontWeight: "bold",
    margin: "0 5px 0 0",
  },
  expireReward_text: {
    fontWeight: "bold",
  },
  expire_text: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "94px",
    height: "35px",
    padding: "6px 8px",
    margin: "0 0 5px 0",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "0",
    letterSpacing: "1px",
    textTransform: "none",
    backgroundColor: "rgba(204, 0, 0, 0.7)",
  },
  activePrize_outerContainer: {},
  active_text: {
    fontWeight: "bold",
  },
  reward_text: {
    // margin: "0 0 0 5px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  view_button: {
    color: "white",
    height: "35px",
    margin: "0 0 5px 0",
    padding: "6px 8px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "0",
    letterSpacing: "1px",
    textTransform: "none",
    backgroundColor: "#4caf50",
    borderRadius: "5px",
  },
  active_rewardInfo_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0 10px 0px",
    borderLeft: "5px solid green",
    borderRadius: "0 0 10px 40px",
  },
  expire_rewardInfo_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0 10px 0px",
    borderLeft: "5px solid red",
    borderRadius: "0 0 10px 40px",
  },
}));

const theme = createMuiTheme({});

export default function ({ userDbInfo }) {
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
      // console.log(userDbInfo.data().claimedGift[giftRecord]);
      giftRecordArray.push(userDbInfo.data().claimedGift[giftRecord]);
    }

    // Sort the array by gift expiring earliest at top
    giftRecordArray.sort(function compareDate(a, b) {
      const dateA = moment(a.gift_expiry_date);
      const dateB = moment(b.gift_expiry_date);
      return dateB - dateA;
    });

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
          <div className={classes.giftInfo_outerContainer}>
            {currentTime > moment(gift.gift_expiry_date) ? (
              <div className={classes.giftInfo_container}>
                <div className={classes.expirePrize_container}>
                  <div className={classes.shopInfo_container}>
                    <div className={classes.shopName_text}>
                      {gift.shop_name}
                    </div>
                    <div>{gift.shop_address}</div>
                    <div>{gift.shop_city}</div>
                  </div>
                  <div className={classes.expire_rewardInfo_container}>
                    <div className={classes.expireReward_text}>
                      {gift.reward}
                    </div>
                    <div className={classes.start_container}>
                      <div className={classes.start_text}>Start:</div>
                      <div className={classes.startTime_text}>
                        {moment
                          .unix(gift.gift_open_timeStamp.seconds)
                          .format("lll")}
                      </div>
                    </div>
                    <div className={classes.end_container}>
                      <div className={classes.end_text}>End: </div>
                      <div className={classes.endTime_text}>
                        {moment(gift.gift_expiry_date).format("lll")}
                      </div>
                    </div>
                    <div className={classes.expire_text}>Expired</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={classes.giftInfo_container}>
                <div className={classes.shopInfo_container}>
                  <div className={classes.shopName_text}>{gift.shop_name}</div>
                  <div>{gift.shop_address}</div>
                  <div>{gift.shop_city}</div>
                </div>
                <div className={classes.active_rewardInfo_container}>
                  <div className={classes.reward_text}>{gift.reward}</div>
                  <div className={classes.start_container}>
                    <div className={classes.start_text}>Start:</div>
                    <div className={classes.startTime_text}>
                      {moment
                        .unix(gift.gift_open_timeStamp.seconds)
                        .format("lll")}
                    </div>
                  </div>
                  <div className={classes.end_container}>
                    <div className={classes.end_text}>End: </div>
                    <div className={classes.endTime_text}>
                      {moment(gift.gift_expiry_date).format("lll")}
                    </div>
                  </div>
                  <div>
                    <Button
                      className={classes.view_button}
                      onClick={() => toGiftResult(gift)}
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
            )}
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
