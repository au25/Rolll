import React, { useContext, useState, useEffect } from "react";
import * as firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";
import Gift from "../gift";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import moment from "moment";

const useStyles = makeStyles({
  userHomeContainer: {
    display: "flex",
    flexDirection: "column",
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
          return userGiftIdMap.has(cityGift.gift_id) ? (
            <div>
              <br />
              <div>{cityGift.shop_name}</div>
              <div>Claimed, resets in:</div>
              <br />
            </div>
          ) : (
            <div>
              <br />
              <div>{cityGift.shop_name}</div>
              <div onClick={() => claimGift(cityGift)}>
                {moment(cityGift.gift_expiry_date).format("LLL")}
              </div>
              <br />
            </div>
          );
        }
      });
    } else return <div>lol</div>;
  };

  return (
    <div>
      <br />
      Here is where I render gifts based on user location
      <RenderGift />
    </div>
  );
}
