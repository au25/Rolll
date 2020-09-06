import React, { useEffect, useContext, useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import { CSSTransition } from "react-transition-group";
import "./businessManageShopPage.css";
import * as firebase from "firebase";
import moment from "moment";
import "moment-timezone";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  chooseGift_container: {
    width: "70%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  chooseGiftText: {
    fontSize: "18px",
    display: "flex",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    borderBottom: "1px solid black",
    color: "#fbfcfc",
    width: "100%",
    padding: "15px 0 15px 10px",
    backgroundColor: "#4a4a4a",
    margin: "0 0 10px 0",
  },
  giftOfferText: {
    fontSize: "16px",
    width: "70%",
    margin: "35px 0 15px 0",
    display: "flex",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    borderBottom: "1px solid black",
  },
  giftTitle_text: {
    fontWeight: "bold",
    margin: "0 0 10px 0",
  },
  giftIntro_text: {
    margin: "0 0 20px 0",
  },
  giftInfoContainer: {
    fontSize: "16px",
    width: "70%",
    margin: "12px 0 15px 0",
    display: "flex",
    flexDirection: "column",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
  },
  chooseGiftAppearContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  chooseGiftContainer: {
    margin: "12px 0 30px 0",
  },
  linkContainer: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.87)",
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
  giftImage: {
    width: "40%",
    overflow: "hidden",
  },
  giftTitle: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
  },
  giftDescription_container: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "0 15px 0 35px",
  },
  chanceText_container: {
    color: "rgba(0, 0, 0, 0.8)",
    margin: "10px 0 0 0",
    textAlign: "right",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
  },
  rewardText_container: {
    color: "rgba(0, 0, 0, 0.8)",
    margin: "10px 0 0 0",
    fontFamily: "CoreSans, sans-serif",
  },
  chanceText: {
    margin: "3px 0 0 0",
  },
  rewardText: {
    margin: "3px 0 0 0",
  },
  giftSelectButton_container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "15px 0 0 0",
  },
  giftSelectButton: {
    fontWeight: "bold",
    backgroundColor: "#4caf50",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "126px",
    height: "50px",
  },
  nextButton: {
    fontWeight: "bold",
    backgroundColor: "#4caf50",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "126px",
    height: "50px",
    margin: "0 0 35px 0",
  },
  disableButton: {
    fontWeight: "bold",
    backgroundColor: "lightgray",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "126px",
    height: "50px",
    margin: "0 0 35px 0",
  },
  expireDate_container: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "16px",
    color: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
  },
  giftExpiryDate_text: {
    backgroundColor: "#4a4a4a",
    color: "#fbfcfc",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "10px 0",
  },
  giftExpiryDateInfo_container: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "0 0 10px 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
  },
  dayOfWeek_text: {
    // width: "100%",
  },
});

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        height: "60px",
        width: "100%",
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50",
          },
        },
      },
    },
    MuiNativeSelect: {
      root: {
        height: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      },
      select: {
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
        padding: "8px 0 8px 12px",
        height: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        "&:focus": {
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
    MuiFormControl: {
      root: {
        width: "70%",
        // margin: "0 0 28px 0",
      },
    },
    MuiInput: {
      underline: {
        "&$disabled": {
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        "&:before": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
        },
        "&:after": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
        },
        // "&:hover": {
        //   borderBottom: "1px solid transparent",
        //   // Reset on touch devices, it doesn't add specificity
        //   "@media (hover: none)": {
        //     borderBottom: "1px solid transparent",
        //   },
        // },
      },
    },
  },
});

export default function ({ userDbInfo, parentShopInfo }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const [durationChosen, setDurationChosen] = useState(false);
  const [giftChosen, setGiftChosen] = useState(false);
  const [selectGift, setSelectGift] = useState();
  const [giftDuration, setGiftDuration] = React.useState({
    gift_duration: "",
  });
  const [activeDiv, setActiveDiv] = useState(null);
  const [showTemplateContainer, setShowTemplateContainer] = useState(false);
  const [showContainer, setShowContainer] = useState(false);
  const [giftExpirySelection, setGiftExpirySelection] = useState({
    dayOfWeek_selection: null,
    date_selection: null,
    time_selection: null,
    endTime_text: null,
  });

  const userId = userDbInfo.id;

  /**
   * Sets gift duration state
   * Sets gift chosen state for validation
   */
  const handleGiftDuration = (e) => {
    const { name, value } = e.target;
    setGiftDuration({
      ...giftDuration,
      [name]: value,
    });

    const currentTimeStamp = firebase.firestore.Timestamp.now(new Date());
    // const gift_creation_date = moment(currentTimeStamp.toDate()).format();
    const add_duration = moment(currentTimeStamp.toDate())
      .add(value, "days")
      .format();
    const gift_expiry_dayOfWeek = moment(add_duration)
      .endOf("day")
      .format("dddd");
    const gift_expiry_date = moment(add_duration).endOf("day").format("LL");
    const gift_expiry_time = moment(add_duration).endOf("day").format("LT");
    setGiftExpirySelection({
      ...giftExpirySelection,
      dayOfWeek_selection: gift_expiry_dayOfWeek,
      date_selection: gift_expiry_date,
      time_selection: gift_expiry_time,
      endTime_text: "Expires",
    });
    setDurationChosen(true);
    setShowTemplateContainer(true);
    setShowContainer(true);
  };

  /**
   * Handle gift click, set validation to chosen and gift state to be passed to next component
   */
  const handleGiftClick = (gift) => {
    setGiftChosen(true);
    setSelectGift(gift);
    setActiveDiv(gift.gift_name);
  };

  /**
   * Renders the gift templates
   */
  const RenderGift = () => {
    return parentShopInfo.gift.map((gift) => (
      <div className={classes.chooseGiftContainer}>
        <div className={classes.giftTitle_text}>{gift.gift_name}</div>
        <div className={classes.giftIntro_text}>{gift.gift_intro}</div>
        <div
          className={classes.imageDescription_container}
          style={{
            backgroundColor:
              gift.gift_name === activeDiv ? "#e0eee0" : "#f5f5f5",
            borderColor:
              gift.gift_name === activeDiv ? "#3d9140" : "rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className={classes.giftImageContainer}>
            <img className={classes.giftImage} src={gift.image_url} alt="lol" />
          </div>
          <div className={classes.giftDescription_container}>
            <div className={classes.chanceText_container}>
              {gift.gift_description.chance.map((chance) => {
                {
                  return (
                    <div className={classes.chanceText}>{chance * 100}%</div>
                  );
                }
              })}
            </div>
            <div className={classes.rewardText_container}>
              {gift.gift_description.reward.map((reward) => {
                {
                  return <div className={classes.rewardText}>{reward}</div>;
                }
              })}
            </div>
          </div>
        </div>
        <div className={classes.giftSelectButton_container}>
          <Button
            className={classes.giftSelectButton}
            onClick={() => handleGiftClick(gift)}
          >
            Select
          </Button>
        </div>
      </div>
    ));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <div className={classes.chooseGift_container}>
          <div className={classes.chooseGiftText}>1. Choose Gift Duration</div>
          <FormControl className={classes.formControl}>
            <NativeSelect
              className={classes.selectEmpty}
              value={giftDuration.gift_duration}
              name="gift_duration"
              onChange={handleGiftDuration}
            >
              <option value="" disabled>
                Select Duration
              </option>
              <option value={3}>3 Days</option>
              <option value={7}>7 Days</option>
              <option value={30}>30 Days </option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className={classes.expireDate_container}>
          {/* <div className={classes.giftExpiryDate_text}>Gift Expiry Date </div> */}
          <div className={classes.giftExpiryDateInfo_container}>
            {/* <div className={classes.endTime_text}>
              {giftExpirySelection.endTime_text}
            </div> */}
            <div className={classes.dayOfWeek_text}>
              {giftExpirySelection.dayOfWeek_selection}
            </div>
            <div className={classes.date_text}>
              {giftExpirySelection.date_selection}
            </div>
            <div className={classes.expireTime_text}>
              {giftExpirySelection.time_selection}
            </div>
          </div>
          {/* <div>{giftExpirySelection.endTime_text}</div> */}
        </div>
        <CSSTransition
          in={showContainer}
          timeout={300}
          classNames="gift_template"
          unmountOnExit
          onEnter={() => setShowTemplateContainer(false)}
          onExited={() => setShowTemplateContainer(true)}
        >
          <div>
            <div className={classes.chooseGiftAppearContainer}>
              <div className={classes.giftOfferText}>
                2. Choose Gift Template
              </div>
              <div className={classes.giftInfoContainer}>
                {parentShopInfo.gift ? <RenderGift /> : null}
              </div>
              {/* Validation check to see which button is shown */}
              {giftChosen && durationChosen && selectGift.gift_name ? (
                <Link
                  className={classes.linkContainer}
                  to={{
                    pathname: "/businessGiftSelectShop",
                    state: { userId, parentShopInfo, selectGift, giftDuration },
                  }}
                >
                  <Button className={classes.nextButton}>Next</Button>
                </Link>
              ) : (
                <Button className={classes.disableButton}>Next</Button>
              )}
            </div>
          </div>
        </CSSTransition>
      </div>
    </ThemeProvider>
  );
}
