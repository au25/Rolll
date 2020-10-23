import React, { useContext, useState, useEffect } from "react";
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
import Div100vh from "react-div-100vh";
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
    justifyContent: "center",
  },
  shopInfo_container: {
    backgroundColor: "#4a4a4a",
    width: "70%",
    // margin: "20% 0 0 0",
    padding: "10px 0 10px 0",
    borderRadius: "10px 10px 0 0",
  },
  shopName_text: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fbfcfc",
  },
  shopAddress_text: {
    color: "#fbfcfc",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "1% 0 0 0",
    fontSize: "16px",
    // borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
  },
  reward_text: {
    display: "flex",
    justifyContent: "center",
    fontSize: "45px",
    fontWeight: "bold",
    height: "155px",
    alignItems: "center",
    textAlign: "center",
    margin: "0 0 0 0",
    backgroundColor: "white",
    borderRadius: "0 0 10px 10px",
  },
  expire_text: {
    backgroundColor: "#89abe3",
    color: "#fbfcfc",
    fontSize: "16px",
    width: "100%",
    padding: "10px 0 5px 0",
    letterSpacing: "1px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    fontSize: "24px",
    alignItems: "flex-end",
    flexDirection: "column",
    margin: "10px 0 0 0",
  },
  minute_container: {
    display: "flex",
    alignItems: "flex-end",
  },
  second_container: {
    display: "flex",
    alignItems: "flex-end",
  },
  countdown_text: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    padding: "0 45px 0 45px",
    height: "55px",
    alignItems: "center",
  },
  minute_text: {
    fontSize: "40px",
  },
  second_text: {
    fontSize: "40px",
  },
  m_text: {
    margin: "0 0 3px 0",
  },
  s_text: {
    margin: "0 0 3px 0",
  },
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
    width: "45%",
    margin: "20px 0 0 0",
    height: "45px",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
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
  const [expireFlag, setExpireFlag] = useState(true);

  useEffect(() => {
    if (currentUser == null) {
      history.push("/");
    }
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }
    console.log("this is the gift result page");
    console.log(location.state.giftCopy);
    console.log(location.state.giftCopy);
    setGiftResult(location.state.giftCopy);
  }, []);

  const countDown = (props) => {
    if (props.completed && expireFlag) {
      setExpireFlag(false);
      setGiftResult({ ...giftResult, reward: "Expired" });
    }
    return (
      <div className={classes.countdown_container}>
        <div className={classes.expire_text}>Countdown</div>
        <div className={classes.countdown_text}>
          <div className={classes.minute_container}>
            <div className={classes.minute_text}> {props.minutes}</div>
            <div className={classes.m_text}>m</div>
          </div>
          <div className={classes.second_container}>
            <div className={classes.second_text}>{props.seconds}</div>
            <div className={classes.s_text}>s</div>
          </div>
        </div>
      </div>
    );
  };

  const toRecord = () => {
    history.push({
      pathname: "/userHome",
      state: { navigationValue: "giftRecord" },
    });
  };

  return (
    <Div100vh>
      <ThemeProvider theme={theme}>
        <div className={classes.container}>
          <div className={classes.innerContainer}>
            <ThemeProvider theme={theme}>
              {giftResult && giftResult.reward ? (
                <>
                  <div className={classes.shopInfo_container}>
                    <div className={classes.shopName_text}>
                      {giftResult.shop_name}
                    </div>
                    <div className={classes.shopAddress_text}>
                      {giftResult.shop_address}
                    </div>
                  </div>
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
                        // new Date(
                        //   moment(giftResult.gift_open_timeStamp).add(
                        //     10,
                        //     "seconds"
                        //   )
                        // )
                        // Uncomment to set gift expiry time accordingly
                        moment(giftResult.gift_expiry_date)
                      }
                      precision={3}
                      renderer={(props) => {
                        return countDown(props);
                      }}
                    />
                  </div>
                  <div className={classes.storeRights_text}>
                    {giftResult.shop_name} reserves the right to refuse
                    redmeption of this reward.
                  </div>
                  <Button
                    onClick={() => toRecord()}
                    className={classes.dashboard_button}
                  >
                    Back
                  </Button>
                </>
              ) : (
                <div>no result</div>
              )}
            </ThemeProvider>
          </div>
        </div>
      </ThemeProvider>
    </Div100vh>
  );
}
