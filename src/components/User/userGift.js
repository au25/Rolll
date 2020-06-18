import React, { useContext, useState, useEffect } from "react";
import * as firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";
import Gift from "../gift";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import moment from "moment";

const useStyles = makeStyles({
  outerContaniner: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  giftContainer: {
    width: "80%",
    margin: "0 0 30px",
  },
  gift_text: {
    width: "80%",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "24px 0 24px 0",
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "CoreSans, sans-serif",
  },
  shopName_text: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 0px 0",
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "CoreSans, sans-serif",
  },
  shopAddress_text: {
    fontSize: "14px",
    margin: "0 0 5px 0",
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "CoreSans, sans-serif",
  },
  userHomeContainer: {
    display: "flex",
    flexDirection: "column",
  },
  imageDescription_container: {
    border: "2px solid rgb(0, 0, 0, 0.2)",
    padding: "5px 10px",
    borderRadius: "3px",
    height: "135px",
    backgroundColor: "rgba(224, 238, 225, 0.6)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  giftImageContainer: {
    width: "90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px 0",
  },
  giftImage: {
    width: "100%",
    overflow: "hidden",
  },
  giftDescription_container: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  chanceText_container: {
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "right",
    fontSize: "15px",
  },
  rewardText_container: {
    fontSize: "15px",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.8)",
    margin: "0 0 0 10px",
  },
  chanceText: {
    margin: "3px 0 0 0",
  },
  rewardText: {
    margin: "3px 0 0 0",
  },
  expiring_container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: "0 5px 0 0",
    margin: "2px 0 0 0"
  },
  expire_text: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "14px",
    margin: "0 10px 0 0",
  },
  expireTime_text: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "14px",
    margin: "0 5px 0 0",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.5)"
  },
});

export default function ({ userDbInfo, setUserDbInfo }) {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [cityGiftRecord, setCityGiftRecord] = useState();
  const [userGiftIdMap, setUserGiftIdMap] = useState();

  const db = firebase.firestore();
  console.log(userDbInfo && userDbInfo.data());
  console.log(cityGiftRecord && cityGiftRecord);

  useEffect(() => {
    fetchCityRecord();
    userGiftRef();
  }, []);

  /**
   * Fetches the gift record from a city and saves it as state
   */
  const fetchCityRecord = async () => {
    if (userDbInfo && userDbInfo.data()) {
      const cityRef = await db
        .collection("gift")
        .doc(userDbInfo.data().user_country)
        .collection(userDbInfo.data().user_region)
        .doc(userDbInfo.data().user_city)
        .get();

      setCityGiftRecord(cityRef.data());
    }
  };

  const userGiftRef = () => {
    let userGiftIdMap = new Map();

    if (userDbInfo && userDbInfo.data()) {
      userDbInfo.data().claimedGift.map((userGift) => {
        userGiftIdMap.set(userGift.gift_id, "gift_id");
      });
    }
    console.log(userGiftIdMap);
    setUserGiftIdMap(userGiftIdMap);
  };

  /**
   * User claims the gift by adding an entry to the database
   */
  const claimGift = async (gift) => {
    console.log("claiming gift");

    let newUserGiftArray = userDbInfo.data().claimedGift;
    newUserGiftArray.push(gift);
    await db
      .collection("user")
      .doc(userDbInfo.id)
      .set({
        ...userDbInfo.data(),
        claimedGift: newUserGiftArray,
      });
  };

  /**
   * Render gifts based on location, if claimed and expiry
   */
  const RenderGift = () => {
    const currentTime = moment(
      firebase.firestore.Timestamp.now(new Date()).toDate()
    );

    if (cityGiftRecord && cityGiftRecord.gift) {
      // cityGiftRecord is from gift collection
      return cityGiftRecord.gift.map((cityGift) => {
        if (currentTime.isBefore(cityGift.gift_expiry_date)) {
          return userGiftIdMap.has(cityGift.gift_id) ? null : ( // </div> //   <br /> //   <div>Claimed</div> //   <div>{cityGift.shop_name}</div> //   <br /> // <div>
            <div className={classes.giftContainer}>
              <div className={classes.shopName_text}>{cityGift.shop_name}</div>
              <div className={classes.shopAddress_text}>
                {cityGift.shop_address}
              </div>
              <div className={classes.imageDescription_container}>
                <div className={classes.giftImageContainer}>
                  <img
                    className={classes.giftImage}
                    src={cityGift.image_url}
                    alt="lol"
                  />
                </div>
                <div className={classes.giftDescription_container}>
                  <div className={classes.chanceText_container}>
                    {cityGift.gift_description.chance.map((chance) => {
                      {
                        return (
                          <div className={classes.chanceText}>
                            {chance * 100}%
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div className={classes.rewardText_container}>
                    {cityGift.gift_description.reward.map((reward) => {
                      {
                        return (
                          <div className={classes.rewardText}>{reward}</div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
              <div
                className={classes.expiring_container}
                onClick={() => claimGift(cityGift)}
              >
                <div className={classes.expire_text}>Expires</div>
                <div className={classes.expireTime_text}>
                  {moment(cityGift.gift_expiry_date)
                    .add("days", 1)
                    .format("LL")}
                </div>
              </div>
            </div>
          );
        }
      });
    } else return <div>lol</div>;
  };

  return (
    <div className={classes.outerContaniner}>
      <div className={classes.gift_text}>Gift for you</div>
      <RenderGift />
    </div>
  );
}
