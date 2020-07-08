import React, { useContext, useState, useEffect } from "react";
import firebase from "../../firebase";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import Countdown from "react-countdown";
import IconButton from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Div100vh from "react-div-100vh";
import gift from "../gift";
import "./giftAnimation.css";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundImage:
      'url("https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fbackground_35.png?alt=media&token=a5be174a-cd06-4d97-b282-be6b33e71946")',
    backgroundColor: "rgba(237, 232, 218, 0.7)",
    display: "flex",
    flexDirection: "column",
    fontFamily: "CoreSans, sans-serif",
    alignItems: "center",
  },
  reward_text: {
    display: "flex",
    justifyContent: "center",
    fontSize: "40px",
    fontWeight: "bold",
    height: "175px",
    alignItems: "center",
    textAlign: "center",
    margin: "0 0 0 0",
  },
  expire_text: {
    // margin: "0 10px 0 0"
  },
  countdown_outerContainer: {
    display: "flex",
    width: "70%",
    justifyContent: "center",
  },
  countdown_container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(255, 255, 255)",
    fontSize: "24px",
    height: "40px",
    alignItems: "center"
  },
  countdown_text: {},
  expired_text: {},
  storeRights_text: {
    width: "70%",
    textAlign: "center",
    fontSize: "14px",
    margin: "3% 0 0 0",
  },
  xIcon: {
    fontSize: "40px",
    margin: "10% 0 0 0",
  },
  dashboard_button: {
    textTransform: "none",
    backgroundColor: "#4caf50",
    color: "rgba(255, 255, 255)",
    letterSpacing: "1px",
    fontSize: "16px",
    width: "50%",
    margin: "20% 0 0 0",
    height: "50px",
  }
}));

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        height: "60px",
        width: "100%",
      },
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0",
      },
    },
  },
});

export default function ({ userDbInfo, location }) {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState({});
  const [giftResult, setGiftResult] = useState();
  const [expire, setExpire] = useState(false);
  const [rewardText, setRewardText] = useState();
  const [expireFlag, setExpireFlag] = useState(true);

  useEffect(() => {
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }
    console.log("this is the gift result page");
    console.log(location.state.giftCopy);
    setGiftResult(location.state.giftCopy);
  }, []);

  const countdownComplete = () => {
    console.log("timer expired");
  };

  const countDown = (props) => {
    if (props.completed && expireFlag) {
      setExpireFlag(false);
      setGiftResult({ ...giftResult, reward: "Expired" });
    }
    return (
      <div className={classes.countdown_container}>
        {/* <div className={classes.expire_text}>Time </div> */}
        <div className={classes.countdown_text}>
          {props.minutes}:{props.seconds}
        </div>
      </div>
    );
  };

  return (
    <Div100vh>
      <ThemeProvider theme={theme}>
        <div className={classes.container}>
          <ThemeProvider theme={theme}>
            {giftResult && giftResult.reward ? (
              <>
                <div className="h1_container">
                  <div
                    // className="block-reveal"
                    className={`${classes.reward_text} ${"block-reveal"}`}
                  >
                    {giftResult.reward}
                  </div>
                </div>
                <div className={classes.countdown_outerContainer}>
                  <Countdown
                    date={
                      new Date(
                        moment(giftResult.gift_open_timeStamp).add(
                          10,
                          "seconds"
                        )
                      )
                    }
                    precision={3}
                    renderer={(props) => {
                      return countDown(props);
                    }}
                  />
                </div>
                <div className={classes.storeRights_text}>
                  Show cashier before it expires! :)
                </div>
                <Button className={classes.dashboard_button}>Dashboard</Button>
              </>
            ) : (
              <div>no result</div>
            )}
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </Div100vh>
  );
}
