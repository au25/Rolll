import React, { useEffect, useContext, useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { setupUI } from "../setupUI";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import { CSSTransition } from "react-transition-group";
import "./businessManageShopPage.css";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  chooseGiftText: {
    fontSize: "16px",
    width: "70%",
    margin: "45px 0 35px 0",
    display: "flex",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    borderBottom: "1px solid black"
  },
  giftOfferText: {
    fontSize: "16px",
    width: "70%",
    margin: "35px 0 15px 0",
    display: "flex",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    borderBottom: "1px solid black"
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
    color: "rgba(0, 0, 0, 0.5)",
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
    padding: "0 15px 0 35px"
  },
  chanceText_container: {
    color: "rgba(0, 0, 0, 0.8)",
    margin: "10px 0 0 0",
    textAlign: "right",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold"
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
    width: "40%",
    fontSize: "12px",
    padding: "0",
    height: "40px",
    backgroundColor: "lightgreen",
  },
  nextButton: {
    width: "40%",
    fontSize: "12px",
    padding: "0",
    height: "40px",
    backgroundColor: "lightgreen",
    margin: "0 0 25px 0",
  },
  disableButton: {
    width: "40%",
    fontSize: "12px",
    padding: "0",
    height: "40px",
    backgroundColor: "lightgray",
    margin: "0 0 25px 0",
  },
});

const theme = createMuiTheme({
  overrides: {
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
        }
      },
    },
    MuiFormControl: {
      root: {
        width: "70%",
        margin: "0 0 28px 0",
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
    setDurationChosen(!durationChosen);
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
            borderColor: gift.gift_name === activeDiv ? "#3d9140" : "#f5f5f5",
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
        <CSSTransition
          in={showContainer}
          timeout={300}
          classNames="gift_template"
          unmountOnExit
          onEnter={() => setShowTemplateContainer(false)}
          onExited={() => setShowTemplateContainer(true)}
        >
          <div className={classes.chooseGiftAppearContainer}>
            <div className={classes.giftOfferText}>2. Choose Gift Template</div>
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
        </CSSTransition>
      </div>
    </ThemeProvider>
  );
}
