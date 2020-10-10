import React, { useContext, useState, useEffect } from "react";
import * as firebase from "firebase";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import moment from "moment";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  outerContaniner: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "415px",
      height: "600px",
      overflow: "auto",
      backgroundColor: "#e8e8e8",
      borderRadius: "20px"
    },
  },
  giftContainer: {
    width: "80%",
    // height: "100%",
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
    backgroundColor: "#4a4a4a",
    padding: "10px 0 5px 0",
    borderRadius: "10px 10px 0 0",
    // borderLeft: "9px solid rgba(9, 68, 16)"
  },
  shopName_text: {
    fontSize: "16px",
    // fontWeight: "bold",
    margin: "0 0 0px 0",
    color: "#fbfcfc",
    fontFamily: "CoreSans, sans-serif",
    letterSpacing: "0.5px",
  },
  shopAddress_text: {
    fontSize: "14px",
    margin: "0 0 5px 0",
    color: "#fbfcfc",
    fontFamily: "CoreSans, sans-serif",
  },
  userHomeContainer: {
    display: "flex",
    flexDirection: "column",
  },
  imageDescription_container: {
    padding: "0px 40px 5px 25px",
    // borderRadius: "3px",
    height: "120px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // background:
    //   "linear-gradient(to right, rgba(254, 239, 186, 0.4), rgba(0, 0, 0, 0.05))",
    backgroundColor: "white",
    borderRadius: "0 0 0 70px",
    borderLeft: "8px solid rgb(149, 149, 148, 0.5)",
  },
  giftImageContainer: {
    width: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px 0 15px 0",
    // "&:active:hover": {
    //   width: "110px",
    // },
  },
  shakeCSS: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px 0",
    width: "70px",
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
    width: "130%",
    // "& > * + *": {
    //   marginTop: theme.spacing(2),
    // },
  },
  loading_container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 0 80px 0"
  },
  actualLoading_container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo_image: {
    width: "100px",
    margin: "0 0 10px 0",
    opacity: "50%",
  },
  allGiftsClaimed_text: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "15px",
    color: "rgba(0, 0, 0, 0.6)",
  },
  cityAreaSelect_container: {
    margin: "25px 0 20px 0",
    width: "80%",
    height: "56px",
  },
  logo_image: {
    width: "45px",
    margin: "0 0 10px 0",
    backgroundColor: "white",
    borderRadius: "50px",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "70%",
      },
    },
    MuiNativeSelect: {
      root: {
        padding: "0 0 0 11px",
        height: "40px",
      },
      select: {
        "&$select": {
          backgroundColor: "transparent",
        },
      },
    },
  },
});

export default function ({ userDbInfo, userAuthInfo, userLocationInfo }) {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState();
  const [cityGiftRecord, setCityGiftRecord] = useState();
  const [userGiftIdMap, setUserGiftIdMap] = useState();
  // const [progressArray, setProgressArray] = useState([]);
  const [activeGiftIndex, setActiveGiftIndex] = useState(null);
  const [giftReadyOpenIndex, setGiftReadyOpenIndex] = useState(null);
  const [giftRewardArray, setGiftRewardArray] = useState([]);
  const [locationValid, setLocationValid] = useState({
    cityArea: true,
    city: true,
    region: true,
    country: true,
  });
  const [selectDisable, setSelectDisable] = useState({
    cityDisable: false,
    cityAreaDisable: false,
  });
  const [locationInfo, setLocationInfo] = useState();
  const [locationLoaded, setLocationLoaded] = useState({
    cityArea: false,
  });
  const [cityAreaSelect, setCityAreaSelect] = useState("");

  const db = firebase.firestore();
  let cityAreaArray = [];

  useEffect(() => {
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }
    /**
     * Fetches the gift record from a city and saves it as state
     */
    const fetchCityRecord = async () => {
      if (userDbInfo && userDbInfo.data() && userLocationInfo) {
        const cityRef = await db
          .collection("gift")
          .doc(userDbInfo.data().user_country)
          .collection(userDbInfo.data().user_region)
          .doc(userDbInfo.data().user_city)
          .collection("area")
          .doc(userLocationInfo.cityArea)
          .get();

        // Sets the gifts from the city
        setCityGiftRecord(cityRef.data());
      }
    };
    fetchCityRecord();
    const userGiftRef = () => {
      let userGiftIdMap = new Map();

      if (userDbInfo && userDbInfo.data()) {
        userDbInfo.data().claimedGift.map((userGift) => {
          userGiftIdMap.set(userGift.gift_id, "gift_id");
        });
      }
      setUserGiftIdMap(userGiftIdMap);
    };
    userGiftRef();

    const fetchCountryInfo = async () => {
      if (userLocationInfo) {
        setLocationInfo({
          ...locationInfo,
          cityAreaArray: [userLocationInfo.cityArea],
        });
        setCityAreaSelect(userLocationInfo.cityArea);
      }
    };
    fetchCountryInfo();
  }, []);

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
  };

  /**
   * Render gifts based on location, if claimed and expiry
   */
  const RenderGift = () => {
    const currentTime = moment(
      firebase.firestore.Timestamp.now(new Date()).toDate()
    );

    let nonExpiredGiftCounter = 0;
    let nonExpiredGiftClaimedCounter = 0;
    const counterNull = () => {
      return null;
    };

    if (cityGiftRecord) {
      // if (false) {
      if (cityGiftRecord.gift) {
        cityGiftRecord.gift.map((cityGift, index) => {
          if (currentTime.isBefore(cityGift.gift_expiry_date)) {
            nonExpiredGiftCounter++;
            if (userGiftIdMap.has(cityGift.gift_id)) {
              nonExpiredGiftClaimedCounter++;
            }
          }
        });
        // cityGiftRecord is from gift collection
        if (nonExpiredGiftCounter != nonExpiredGiftClaimedCounter) {
          return cityGiftRecord.gift.map((cityGift, index) => {
            if (currentTime.isBefore(cityGift.gift_expiry_date)) {
              nonExpiredGiftCounter++;
              return userGiftIdMap.has(cityGift.gift_id) ? (
                counterNull()
              ) : (
                <div className={classes.giftContainer}>
                  <div className={classes.shopInfo_container}>
                    <div className={classes.shopName_text}>
                      {cityGift.shop_name}
                    </div>
                    <div className={classes.shopAddress_text}>
                      {cityGift.shop_address}
                    </div>
                  </div>
                  <div className={classes.imageDescription_container}>
                    {/* If gift is shaking and ready to be opened */}
                    {index == giftReadyOpenIndex ? (
                      <div
                        className={
                          index == giftReadyOpenIndex
                            ? classes.shakeCSS
                            : classes.giftImageContainer
                        }
                        onClick={() => {
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
                        onClick={(e) =>
                          handleGiftMouseDown(e, index, cityGift)
                        }
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
                  <div className={classes.expiring_container}>
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
        }
        if (nonExpiredGiftCounter == nonExpiredGiftClaimedCounter) {
          return (
            <div className={classes.loading_container}>
              <div className={classes.logo_container}>
              <img className={classes.logo_image} src="img/logo_96x96_ver1.png" />
              </div>
              <div className={classes.allGiftsClaimed_text}>
                No gifts available, come back later!
              </div>
            </div>
          );
        }
      }
    } else return null;
    if (cityGiftRecord.gift.length == 0) {
      return <div className={classes.giftContainer}>No gift Available.</div>;
    }
  };

  /**
   *
   */
  const handleCityAreaChange = async (e) => {
    const evtTargetValue = e.target.value;
    setCityAreaSelect(evtTargetValue);
    setCityGiftRecord({ gift: [] });
    const cityRef = await db
      .collection("gift")
      .doc(userLocationInfo.country)
      .collection(userLocationInfo.region)
      .doc(userLocationInfo.city)
      .collection("area")
      .doc(evtTargetValue)
      .get();
    setCityGiftRecord(cityRef.data());
    setLocationLoaded({ ...locationLoaded, cityArea: true });
  };

  const handleCityAreaClick = async (e) => {
    if (!locationLoaded.cityArea) {
      console.log("running click");
      let cityAreaCollection = await db
        .collection("country")
        .doc(userLocationInfo.country)
        .collection("region")
        .doc(userLocationInfo.region)
        .collection("city")
        .doc(userLocationInfo.city)
        .collection("area")
        .get();
      cityAreaArray = [];
      cityAreaCollection.docs.map((cityArea) =>
        cityAreaArray.push(cityArea.id)
      );
      setLocationLoaded({ ...locationLoaded, cityArea: true });
      setLocationInfo({
        ...locationInfo,
        cityAreaArray: cityAreaArray,
      });
    }
  };

  return locationInfo ? (
    <div className={classes.outerContaniner}>
      <ThemeProvider theme={theme}>
        <div className={classes.cityAreaSelect_container}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Area</InputLabel>
            <NativeSelect
              disabled={selectDisable.cityAreaDisable}
              className={classes.citySelect_input}
              defaultValue={userLocationInfo.cityArea}
              value={cityAreaSelect}
              onChange={(e) => handleCityAreaChange(e)}
              onClick={(e) => handleCityAreaClick()}
            >
              <option value="" disabled></option>
              {locationInfo.cityAreaArray.map((cityArea) => {
                return <option value={cityArea}>{cityArea}</option>;
              })}
            </NativeSelect>
            {locationValid.cityArea ? null : (
              <div className={classes.location_errorText}>Select an area</div>
            )}
          </FormControl>
        </div>
        <RenderGift />
      </ThemeProvider>
    </div>
  ) : (
    <div className={classes.actualLoading_container}>
      <div className={classes.logo_container}>
      <img className={classes.logo_image} src="img/logo_96x96_ver1.png" />
      </div>
      <div className={classes.allGiftsClaimed_text}>Loading...</div>
    </div>
  );
}
