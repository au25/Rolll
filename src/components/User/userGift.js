import React, { useContext, useState, useEffect } from "react";
import * as firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";
import Gift from "../gift";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import moment from "moment";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
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
  shopInfo_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(173, 216, 230, 0.8)",
    padding: "10px 0 5px 0",
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
    // border: "2px solid rgb(0, 0, 0, 0.2)",
    padding: "5px 10px",
    borderRadius: "3px",
    height: "135px",
    // backgroundColor: "rgba(224, 238, 225, 0.6)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background:
      "linear-gradient(to right, rgba(254, 239, 186, 0.4), rgba(0, 0, 0, 0.05))",
  },
  giftImageContainer: {
    width: "90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px 0",
    // "&:active:hover": {
    //   width: "110px",
    // },
  },
  shakeCSS: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px 0",
    width: "110px",
    animation: "$shake 500ms",
    animationIterationCount: "infinite",
  },
  "@keyframes shake": {
    "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
    "10%": { transform: "translate(-1px, -2px) rotate(-5deg)" },
    "20%": { transform: "translate(-3px, 0px) rotate(5deg)" },
    "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
    "40%": { transform: "translate(1px, -1px) rotate(5deg)" },
    "50%": { transform: "translate(-1px, 2px) rotate(-5deg)" },
    "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
    "70%": { transform: "translate(3px, 1px) rotate(-5deg)" },
    "80%": { transform: "translate(-1px, -1px) rotate(5deg)" },
    "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
    "100%": { transform: "translate(1px, -2px) rotate(-5deg)" },
  },
  giftImage: {
    pointerEvents: "none",
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
    margin: "2px 0 0 0",
  },
  expire_text: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "12px",
    margin: "0 8px 0 0",
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: "bold",
  },
  expireTime_text: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "14px",
    margin: "0 5px 0 0",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.5)",
  },
  linearProgress: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

/**
 * setInterval function that increases the gift open percentage while onTouchStart (gift is held down)
 * When gift percentage is > 100, the gift will go shake shake
 */
let openGiftPercent = 0;
let timer = null;

const progressIncrease = (
  setActiveGiftIndex,
  progressArray,
  setProgressArray,
  index,
  claimGift,
  gift
) => {
  // setActiveGiftIndex(null);
  openGiftPercent += 1;
  let progressArrayCopy = [...progressArray];
  if (progressArrayCopy[index] < 100) {
    progressArrayCopy[index] = openGiftPercent;
  }
  setProgressArray(progressArrayCopy);
  console.log(openGiftPercent);
  if (openGiftPercent >= 100) {
    clearInterval(timer);
    // setActiveGiftIndex(index);
    // progressArrayCopy[index] = 100;
    openGiftPercent = 0;
    claimGift(gift);
  }
};

export default function ({ userDbInfo, setUserDbInfo }) {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [cityGiftRecord, setCityGiftRecord] = useState();
  const [userGiftIdMap, setUserGiftIdMap] = useState();
  const [progressArray, setProgressArray] = useState([]);
  const [activeGiftIndex, setActiveGiftIndex] = useState(null);
  const [giftReadyOpenIndex, setGiftReadyOpenIndex] = useState(null);
  const [giftRewardArray, setGiftRewardArray] = useState([]);

  const db = firebase.firestore();

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

      // Array to hold the progress of each gift
      createProgressArray(cityRef.data());
      //
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
    setUserGiftIdMap(userGiftIdMap);
  };

  /**
   * User claims the gift by adding an entry to the database
   */
  const claimGift = async (gift) => {
    console.log("claiming gift");

    // Creates the array for gift rewards
    let giftRewardArrayCopy = [];
    for (let j = 0; j < gift.gift_description.chance.length; j++) {
      for (let k = 0; k < gift.gift_description.chance[j] * 100; k++) {
        giftRewardArrayCopy.push({
          reward: gift.gift_description.reward[j],
          expireTime: gift.gift_description.expire_time[j],
        });
      }
    }
    setGiftRewardArray(giftRewardArrayCopy);

    let newUserGiftArray = userDbInfo.data().claimedGift;
    let rollNumber = Math.floor(Math.random() * 100 + 1);
    let giftCopy = {
      ...gift,
      roll: rollNumber,
      reward: giftRewardArrayCopy[rollNumber].reward,
      gift_open_timeStamp: firebase.firestore.Timestamp.now(
        new Date()
      ).toDate(),
      gift_expiry_date: moment()
        .add(giftRewardArrayCopy[rollNumber].expireTime, "minutes")
        .toString(),
    };
    console.log("1 day expiry");
    console.log(giftCopy);
    newUserGiftArray.push(giftCopy);
    await db
      .collection("user")
      .doc(userDbInfo.id)
      .set({
        ...userDbInfo.data(),
        claimedGift: newUserGiftArray,
      });

    setGiftRewardArray([]);

    history.push({ pathname: "/giftResult", state: { giftCopy } });
  };

  /**
   * Fires onTouchStart, when gift is pressed
   */
  const handleGiftMouseDown = (e, index, gift) => {
    // e.preventDefault();
    console.log("mouse down");
    setActiveGiftIndex(index);
    setGiftReadyOpenIndex(index);
    // timer = setInterval(function () {
    //   progressIncrease(
    //     setActiveGiftIndex,
    //     progressArray,
    //     setProgressArray,
    //     index,
    //     claimGift,
    //     gift
    //   );
    // }, 10);
  };

  const handleGiftMouseUp = (e, index, gift) => {
    clearInterval(timer);
    openGiftPercent = 0;
    console.log("mouse up");
  };

  const clearGiftProgress = () => {
    console.log("scrolling");
    clearInterval(timer);
    openGiftPercent = 0;
  };

  /**
   * Creates the progressArray state
   */
  const createProgressArray = (giftRecordIteration) => {
    for (let i = 0; i < giftRecordIteration.gift.length; i++) {
      setProgressArray((progressArray) => [...progressArray, 0]);
    }
  };

  /**
   * Render gifts based on location, if claimed and expiry
   */
  const RenderGift = () => {
    const currentTime = moment(
      firebase.firestore.Timestamp.now(new Date()).toDate()
    );

    // if (cityGiftRecord && cityGiftRecord.gift) {
      if(false){
      console.log("this is city gift record");
      console.log(cityGiftRecord);
      // cityGiftRecord is from gift collection
      return cityGiftRecord.gift.map((cityGift, index) => {
        if (currentTime.isBefore(cityGift.gift_expiry_date)) {
          return userGiftIdMap.has(cityGift.gift_id) ? null : (
            <div
              className={classes.giftContainer}
              onTouchMove={() => {
                clearGiftProgress(cityGift);
              }}
            >
              <div className={classes.shopInfo_container}>
                <div className={classes.shopName_text}>
                  {cityGift.shop_name}
                </div>
                <div className={classes.shopAddress_text}>
                  {cityGift.shop_address}
                </div>
              </div>
              {/* <LinearProgress
                variant="determinate"
                value={progressArray[index]}
              /> */}
              <div className={classes.imageDescription_container}>
                {/* If gift is shaking and ready to be opened */}
                {index == giftReadyOpenIndex ? (
                  <div
                    className={
                      index == giftReadyOpenIndex
                        ? classes.shakeCSS
                        : classes.giftImageContainer
                    }
                    onTouchStart={() => {
                      claimGift(cityGift);
                    }}
                  >
                    <img
                      className={classes.giftImage}
                      src={cityGift.image_url}
                      alt="lol"
                    />
                  </div>
                ) : (
                  // Push gift to charge progress bar
                  <div
                    className={
                      index == activeGiftIndex
                        ? classes.shakeCSS
                        : classes.giftImageContainer
                    }
                    onTouchStart={(e) =>
                      handleGiftMouseDown(e, index, cityGift)
                    }
                    onMouseUp={(e) => handleGiftMouseUp(e, index, cityGift)}
                  >
                    <img
                      className={classes.giftImage}
                      src={cityGift.image_url}
                      alt="lol"
                    />
                  </div>
                )}
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
                // onClick={() => claimGift(cityGift)}
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
    } else
      return (
        <div>
          <div>Loading...</div>
          <div className={classes.linearProgress}>
            <LinearProgress color="secondary" />
          </div>
        </div>
      );
  };

  return (
    <div className={classes.outerContaniner}>
      {/* <div className={classes.gift_text}>Gift for you</div> */}
      <RenderGift />
    </div>
  );
}
