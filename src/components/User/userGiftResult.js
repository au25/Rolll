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
import Div100vh from "react-div-100vh";

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
    justifyContent: "center",
    alignItems: "center",
  },
  reward_text: {
    display: "flex",
    justifyContent: "center",
    fontSize: "40px",
    textTransform: "uppercase",
    fontWeight: "bold",
    width: "70%",
    height: "175px",
    alignItems: "center",
    textAlign: "center",
  },
  countdown_text: {
    display: "flex",
    justifyContent: "center",
  },
  countdown_container: {
    display: "flex"
  },
  storeRights_text: {
    width: "70%",
    textAlign: "center",
  }
}));

const theme = createMuiTheme({});

export default function ({ userDbInfo, location }) {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState({});
  const [giftResult, setGiftResult] = useState();
  const [expire, setExpire] = useState(false);

  useEffect(() => {
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }
    console.log("this is the gift result page");
    console.log(location.state.giftCopy);
    console.log(
      new Date(
        moment(location.state.giftCopy.gift_open_timeStamp.seconds)
          .add(10, "minutes")
          .format()
      )
    );
    setGiftResult(location.state.giftCopy);
  }, []);

  const countdownComplete = () => {
    console.log("setting expire to true");
    setExpire(true);
  };

  return (
    <Div100vh>
      <div className={classes.container}>
        <ThemeProvider theme={theme}>
          {giftResult && giftResult.reward ? (
            <>
              <div className={classes.reward_text}>{giftResult.reward}</div>
              <div className={classes.countdown_text}>
                {!expire ? (
                  <Countdown
                    date={
                      new Date(
                        moment(giftResult.gift_open_timeStamp).add(1, "minutes")
                      )
                    }
                    // onComplete={countdownComplete}
                    precision={3}
                    renderer={(props) => {
                      return !props.completed ? (
                        <div className={classes.countdown_container}>
                          <div className={classes.expire_text}>Expires</div>
                          <div className={classes.countdown_text}>
                            {props.minutes}:{props.seconds}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div>Gift expired</div>
                        </div>
                      );
                    }}
                  />
                ) : (
                  <div>Gift has expired</div>
                )}
              </div>
              {/* <div>
                {moment(giftResult.gift_open_timeStamp)
                  .add(10, "minutes")
                  .format("MMMM Do YYYY, h:mm:ss a")}
              </div> */}
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <div className={classes.storeRights_text}>
                The store reserves the right to refeuse redemption of this gift.
              </div>
              <div>Report</div>
            </>
          ) : (
            <div>no result</div>
          )}
        </ThemeProvider>
      </div>
    </Div100vh>
  );
}
