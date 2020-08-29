import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import UserProfile from "./userProfilePage";
import UserGiftRecord from "./userGiftRecord";
import UserGiftList from "./userGift";
import Div100vh from "react-div-100vh";

const useStyles = makeStyles((theme) => ({
  userNavigation_container: {
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },
  userNavigation_div100Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  userNavigation_renderBodyContainer: {
    height: "86%",
    overflow: "auto",
  },
  userNavigation_navContainer: {
    height: "70px",
    backgroundColor: "white",
    padding: "0 50px 4px 50px",
    boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.02)",
    [theme.breakpoints.down(600)]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  profileIcon: {
    fontSize: "25px",
  },
  icon_container: {
    fontFamily: "Lato, sans-serif",
    width: "10%",
    height: "54px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image_container: {
    display: "flex",
    justifyContent: "center",
    width: "42px",
    height: "42px",
  },
  giftList_image: {
    width: "30px",
    height: "30px",
    margin: "5px 0 0 0",
  },
  profile_icon_image: {
    width: "100%",
    margin: "5px 0 0 0",
    height: "38px",
  },
  iconTitle: {
    // fontFamily: "CoreSans, sans-serif",
    color: "#a9a8a9",
    fontSize: "14px",
    margin: "3px 0 0 0",
  },
  profileTitle: {
    fontSize: "14px",
    margin: "3px 0 0 0",
  }
}));

export default function ({
  userDbInfo,
  location,
  countryInfo,
  userAuthInfo,
  userLocationInfo,
  setUserLocationInfo,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [navigationValue, setNavigationValue] = useState("giftList");
  const history = useHistory();

  useEffect(() => {
    if (location && location.location.state) {
      setNavigationValue(location.location.state.navigationValue);
    }
  }, []);

  /**
   * Renders body content based on value of icon clicked
   */
  const RenderBody = () => {
    if (navigationValue == "giftList") {
      return (
        <UserGiftList
          userDbInfo={userDbInfo}
          userAuthInfo={userAuthInfo}
          userLocationInfo={userLocationInfo}
        />
      );
    }
    if (navigationValue == "giftRecord") {
      return <UserGiftRecord userDbInfo={userDbInfo} />;
    }
    if (navigationValue == "profile") {
      return (
        <UserProfile
          userDbInfo={userDbInfo}
          countryInfo={countryInfo}
          userLocationInfo={userLocationInfo}
          setUserLocationInfo={setUserLocationInfo}
        />
      );
    }
  };

  return (
    <div className={classes.userNavigation_container}>
      <Div100vh className={classes.userNavigation_div100Container}>
        <div className={classes.userNavigation_renderBodyContainer}>
          <RenderBody />
        </div>
        <div className={classes.userNavigation_navContainer}>
          <div className={classes.icon_container}>
            <div className={classes.image_container}>
              <img
                className={classes.giftList_image}
                style={{
                  filter:
                    navigationValue === "giftRecord"
                      ? "invert(33%) sepia(93%) saturate(2157%) hue-rotate(110deg) brightness(70%) contrast(101%)"
                      : null,
                }}
                src="img/history.png"
                onClick={() => setNavigationValue("giftRecord")}
              />
            </div>
            <div
              className={classes.iconTitle}
              style={{
                color: navigationValue === "giftRecord" ? "black" : "#a9a8a9",
              }}
            >
              History
            </div>
          </div>
          <div className={classes.icon_container}>
            <div className={classes.image_container}>
              <img
                className={classes.giftList_image}
                style={{
                  filter:
                    navigationValue === "giftList"
                      ? "invert(86%) sepia(71%) saturate(625%) hue-rotate(3deg) brightness(94%) contrast(95%)"
                      : null,
                }}
                src="img/rolll.png"
                onClick={() => setNavigationValue("giftList")}
              />
            </div>
            <div
              className={classes.iconTitle}
              style={{
                color: navigationValue === "giftList" ? "black" : "#a9a8a9",
              }}
            >
              Rolll
            </div>
          </div>
          <div className={classes.icon_container}>
            <div className={classes.image_container}>
              <img
                className={classes.giftList_image}
                style={{
                  filter:
                    navigationValue === "profile"
                      ? "invert(10%) sepia(100%) saturate(7026%) hue-rotate(252deg) brightness(70%) contrast(124%)"
                      : null,
                }}
                src="img/profile_v2.png"
                onClick={() => setNavigationValue("profile")}
              />
            </div>
            <div
              className={classes.profileTitle}
              style={{
                color: navigationValue === "profile" ? "black" : "#a9a8a9",
              }}
            >
              Profile
            </div>
          </div>
        </div>
      </Div100vh>
    </div>
  );
}
