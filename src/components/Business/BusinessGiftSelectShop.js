import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as firebase from "firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessSelectShopNavigation from "./businessSelectShopNavigation";
import Div100vh from "react-div-100vh";
import Button from "@material-ui/core/Button";
import moment from "moment";
import "moment-timezone";

import { CSSTransition } from "react-transition-group";
import "./styles.css";

const useStyles = makeStyles({
  div100Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgba(241, 241, 241, 0.7)",
  },
  selectShopOuterContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    overflow: "scroll",
  },
  selectShopContainer: {
    display: "flex",
    width: "70%",
    flexDirection: "column",
    alignItems: "center",
  },
  giftInfo_container: {
    margin: "48px 0 0 0",
  },
  chooseShopText: {
    fontSize: "16px",
    width: "100%",
    margin: "40px 0 26px 0",
    display: "flex",
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
  },
  giftImage: {
    width: "40%",
    overflow: "hidden",
  },
  giftTitle: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
  },
  giftTitle_text: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 10px 0",
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "CoreSans, sans-serif",
  },
  giftIntro_text: {
    margin: "0 0 20px 0",
    fontSize: "16px",
    color: "rgba(0, 0, 0, 0.6)",
    fontFamily: "CoreSans, sans-serif",
  },
  giftDescription_container: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "0 15px 0 35px",
  },
  chanceText_container: {
    margin: "10px 0 0 0",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "right",
  },
  rewardText_container: {
    margin: "10px 0 0 0",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.8)",
  },
  chanceText: {
    margin: "3px 0 0 0",
  },
  rewardText: {
    margin: "3px 0 0 0",
  },
  imageDescription_container: {
    border: "3px solid rgb(0, 0, 0, 0.3)",
    padding: "15px",
    borderRadius: "5px",
  },
  giftImageContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px 0",
  },
  applyGiftShopContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "0 0 15px 0",
  },
  shopName_text: {
    width: "60%",
    fontSize: "16px",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: "21px",
    padding: "5px",
  },
  shopEnabled_message: {
    fontSize: "14px",
    color: "#4caf50",
    margin: "0 0 5px 0",
    fontFamily: "CoreSans, sans-serif",
    margin: "0 0 5px 0",
  },
  shopName_disable: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "52px",
  },
  shopName_select: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectShop_button: {
    width: "40%",
    fontSize: "14px",
    padding: "10px 5px",
    backgroundColor: "#4caf50",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
  },
  enableGift_button: {
    fontSize: "12px",
    padding: "12px 15px",
    backgroundColor: "#4caf50",
    fontSize: "14px",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    height: "50px",
    width: "126px",
    padding: "6px 8px",
  },
  enableGift_backButton: {
    margin: "5px 0 0 0",
    textTransform: "none",
  },
  disableGift_button: {
    width: "40%",
    fontSize: "13px",
    padding: "10px 5px",
    backgroundColor: "rgba(204, 0, 0, 0.7)",
    letterSpacing: "1px",
    textTransform: "none",
    color: "white",
  },
  renderShop_container: {
    margin: "0 0 25px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function ({ location }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  /**
   * States for showing and hiding gift options and choosing shop
   */
  const [showSelection, setShowSelection] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
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

  console.log("this is the selected gift info");
  console.log(gift);

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
    setShowConfirmation(true);
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
          const giftRecordArray = giftRecord.data()[gift.gift_name]; // Bracket notation, same as . notation but dynamic for parem
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

      const handleGiftDisable = async (shop, index) => {
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

                // Changes expiry date in business user
                db.collection("businessUser")
                  .doc(userId)
                  .collection("giftRecord")
                  .doc(gift.gift_name)
                  .set({
                    ...giftRecord.data(),
                    [gift.gift_name]: giftRecordArray,
                  });

                // Changes expiry date in gift Collection - city and cityArea
                const cityAreaRef = db
                  .collection("gift")
                  .doc(shop.shop_country)
                  .collection(shop.shop_region)
                  .doc(shop.shop_city)
                  .collection("area")
                  .doc(shop.shop_area);
                const cityRefSnapshop = await cityAreaRef.get();
                console.log(cityRefSnapshop.data());
                let claimedGifts = cityRefSnapshop.data().gift;

                const cityRef = db
                  .collection("gift")
                  .doc(shop.shop_country)
                  .collection(shop.shop_region)
                  .doc(shop.shop_city);

                console.log("before change");
                console.log(claimedGifts);

                for (let j = claimedGifts.length - 1; j >= 0; j--) {
                  if (claimedGifts[j].gift_id == giftRecordArray[i].gift_id) {
                    console.log("changing expiry date");
                    claimedGifts[j].gift_expiry_date = moment(
                      firebase.firestore.Timestamp.now(new Date()).toDate()
                    ).format();
                  }
                }
                console.log("new claimed gift array");
                console.log(claimedGifts);
                await cityAreaRef.set({ gift: claimedGifts });
                await cityRef.set({ gift: claimedGifts });
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
            showSelection && (
              <div className={classes.applyGiftShopContainer}>
                <div className={classes.shopEnabled_message}>
                  Gift enabled for this shop.
                </div>
                <div className={classes.shopName_disable}>
                  <div className={classes.shopName_text}>{shop.shop_name}</div>
                  <Button
                    className={classes.disableGift_button}
                    onClick={() => {
                      handleGiftDisable(shop, index);
                    }}
                  >
                    Disable
                  </Button>
                </div>
              </div>
            )
          );
        } else {
          return (
            showSelection && (
              <div
                className={classes.applyGiftShopContainer}
                onClick={() => {
                  handleShopClick(shop);
                }}
              >
                <div className={classes.shopName_select}>
                  <div className={classes.shopName_text}>{shop.shop_name}</div>
                  <Button className={classes.selectShop_button}>Enable</Button>
                </div>
              </div>
            )
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
    const add_duration = moment(currentTimeStamp.toDate())
      .add(giftDuration, "days")
      .format();
    const gift_expiry_date = moment(add_duration).endOf("day").toString();

    /**
     * Creates gift in gift collection where user can access
     * Gets the ID of document before creating it
     */
    const giftDocRef = db.collection("gift").doc();
    console.log("this is the select shop info");
    console.log(selectShop);

    const cityAreaRef = db
      .collection("gift")
      .doc(selectShop.shop_country)
      .collection(selectShop.shop_region)
      .doc(selectShop.shop_city)
      .collection("area")
      .doc(selectShop.shop_area);
    const cityAreaRefSnapshop = await cityAreaRef.get();
    // console.log(cityRefSnapshop);

    const cityRef = db
      .collection("gift")
      .doc(selectShop.shop_country)
      .collection(selectShop.shop_region)
      .doc(selectShop.shop_city);
    const cityRefSnapshop = await cityRef.get();
    console.log("this is city ref");
    console.log(cityRefSnapshop);

    const giftName = "gift";

    /**
     * If cityArea reference in database exists, update the array with the new gift (push)
     * Else creates the reference and push gift inside
     */
    if (cityAreaRefSnapshop.exists) {
      await cityAreaRef.update({
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
          gift_description: gift.gift_description,
          gift_intro: gift.gift_intro,
          image_url: gift.image_url,
          shop_area: selectShop.shop_area,
        }),
      });
    } else {
      await cityAreaRef.set({
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
          gift_description: gift.gift_description,
          gift_intro: gift.gift_intro,
          image_url: gift.image_url,
          shop_area: selectShop.shop_area,
        }),
      });
    }

    /**
     * If city reference in database exists, update the array with the new gift (push)
     * Else creates the reference and push gift inside
     */
    if (cityRefSnapshop.exists) {
      await cityRef.update({
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
          gift_description: gift.gift_description,
          gift_intro: gift.gift_intro,
          image_url: gift.image_url,
          shop_area: selectShop.shop_area,
        }),
      });
    } else {
      await cityRef.set({
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
          gift_description: gift.gift_description,
          gift_intro: gift.gift_intro,
          image_url: gift.image_url,
          shop_area: selectShop.shop_area,
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
            shop_area: selectShop.shop_area,
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
          shop_area: selectShop.shop_area,
        }),
      });
      console.log("new gift record created");
      fetch_giftRecord();
    }

    setShowConfirmation(false);
  };

  return (
    <Div100vh className={classes.div100Container}>
      <div className={classes.selectShopOuterContainer}>
        <div className={classes.selectShopContainer}>
          <div className={classes.giftInfo_container}>
            <div className={classes.chooseGiftContainer}>
              <div className={classes.giftTitle_text}>{gift.gift_name}</div>
              <div className={classes.giftIntro_text}>{gift.gift_intro}</div>
              <div
                className={classes.imageDescription_container}
                style={{
                  backgroundColor: "#e0eee0",
                  borderColor: "#3d9140",
                }}
              >
                <div className={classes.giftImageContainer}>
                  <img
                    className={classes.giftImage}
                    src={gift.image_url}
                    alt="lol"
                  />
                </div>
                <div className={classes.giftDescription_container}>
                  <div className={classes.chanceText_container}>
                    {gift.gift_description.chance.map((chance) => {
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
                    {gift.gift_description.reward.map((reward) => {
                      {
                        return (
                          <div className={classes.rewardText}>{reward}</div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.chooseShopText}>Choose shop to apply:</div>
          <div className={classes.renderShop_container}>
            <RenderShop />
            <CSSTransition
              in={showConfirmation}
              timeout={300}
              classNames="alert"
              unmountOnExit
              onEnter={() => setShowSelection(false)}
              onExited={() => setShowSelection(true)}
            >
              <div key="lol">
                <Button
                  className={classes.enableGift_button}
                  onClick={() => createGift()}
                >
                  Enable Gift
                </Button>
                <Button
                  className={classes.enableGift_backButton}
                  onClick={() => setShowConfirmation(false)}
                >
                  Back
                </Button>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
      <BusinessSelectShopNavigation />
    </Div100vh>
  );
}
