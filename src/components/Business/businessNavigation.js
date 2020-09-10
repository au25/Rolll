import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Div100vh from "react-div-100vh";
import BusinessCreateGiftPage from "./businessCreateGiftPage";
import BusinessGiftHistoryPage from "./businessGiftHistoryPage";
import BusinessProfilePage from "./businessProfilePage";
import BusinessManageShopPage from "./businessManageShopPage";

const useStyles = makeStyles((theme) => ({
  div100Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  root: {
    width: 500,
  },
  renderBodyContainer: {
    height: "100%",
    overflow: "auto",
  },
  profileIcon: {
    width: "100%",
  },
  navigationIconContainer: {
    // height: "80px",
    // backgroundColor: "white",
    // padding: "0 40px 4px 40px",
    // boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.03)",
    // zIndex: "100",
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "center",

    [theme.breakpoints.down(600)]: {
      // display: "flex",
      // flexDirection: "row",
      // justifyContent: "space-around",
      // alignItems: "center",
    },
    [theme.breakpoints.up(600)]: {
      // boxShadow: "none",
      // backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
    },
  },
  navigation_innerContainer: {
    [theme.breakpoints.down(600)]: {
      height: "80px",
      backgroundColor: "white",
      padding: "0 40px 4px 40px",
      boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.03)",
      zIndex: "100",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    [theme.breakpoints.up(600)]: {
      width: "500px",
      backgroundColor: "white",
      height: "80px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: "30px 30px 0 0",
      padding: "15px 10px 15px 10px",
      boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.03)",
      zIndex: "100",
    },
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
    width: "32px",
    height: "32px",
  },
  create_icon_image: {
    width: "95%",
    margin: "5px 0 0 0",
  },
  giftList_image: {
    width: "25px",
    height: "25px",
    margin: "5px 0 0 0",
  },
  iconTitle: {
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    margin: "3px 0 0 0",
  },
}));

export default function ({ userDbInfo, location }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("create");
  const [parentShopInfo, setParentShopInfo] = useState({});

  useEffect(() => {
    setParentShopInfo(userDbInfo.data());
    console.log("this is navigation page", userDbInfo.data());
    if (location && location.state) {
      if (value == "") {
        setValue("create");
      } else {
        setValue(location.state.pushState);
      }
    }
  }, []);

  const RenderBody = () => {
    if (value == "") {
      return null;
    }
    if (value == "create") {
      return (
        <BusinessCreateGiftPage
          userDbInfo={userDbInfo}
          parentShopInfo={parentShopInfo}
          setValue={setValue}
        />
        // null
      );
    }
    if (value == "history") {
      return <BusinessGiftHistoryPage userDbInfo={userDbInfo} />;
      // return null
    }
    if (value == "shop") {
      return (
        <BusinessManageShopPage
          userDbInfo={userDbInfo}
          parentShopInfo={parentShopInfo}
          setParentShopInfo={setParentShopInfo}
        />
        // null
      );
    }
    if (value == "profile") {
      return <BusinessProfilePage userDbInfo={userDbInfo} />;
    }
  };

  return (
    <Div100vh className={classes.div100Container}>
      <div className={classes.renderBodyContainer}>
        <RenderBody />
      </div>
      <div className={classes.navigationIconContainer}>
        <div className={classes.navigation_innerContainer}>
          <div className={classes.icon_container}>
            <div className={classes.image_container}>
              <img
                className={classes.giftList_image}
                style={{
                  filter:
                    value === "create"
                      ? "invert(58%) sepia(11%) saturate(3250%) hue-rotate(-98deg) brightness(80%) contrast(82%)"
                      : null,
                }}
                src="img/rolll.png"
                onClick={() => setValue("create")}
              />
            </div>
            <div
              className={classes.iconTitle}
              style={{
                color: value === "create" ? "black" : "#a9a8a9",
              }}
            >
              Create
            </div>
          </div>
          <div className={classes.icon_container}>
            <div className={classes.image_container}>
              <img
                className={classes.giftList_image}
                style={{
                  filter:
                    value === "history"
                      ? "invert(33%) sepia(93%) saturate(2157%) hue-rotate(110deg) brightness(70%) contrast(101%)"
                      : null,
                }}
                src="img/history.png"
                onClick={() => setValue("history")}
              />
            </div>
            <div
              className={classes.iconTitle}
              style={{
                color: value === "history" ? "black" : "#a9a8a9",
              }}
            >
              Record
            </div>
          </div>
          <div className={classes.icon_container}>
            <div className={classes.image_container}>
              <img
                className={classes.giftList_image}
                style={{
                  filter:
                    value === "shop"
                      ? "invert(86%) sepia(71%) saturate(625%) hue-rotate(3deg) brightness(94%) contrast(95%)"
                      : null,
                }}
                src="img/shop.png"
                onClick={() => setValue("shop")}
              />
            </div>
            <div
              className={classes.iconTitle}
              style={{
                color: value === "shop" ? "black" : "#a9a8a9",
              }}
            >
              Shop
            </div>
          </div>
          <div className={classes.icon_container}>
            <div className={classes.image_container}>
              <img
                className={classes.giftList_image}
                style={{
                  filter:
                    value === "profile"
                      ? "invert(10%) sepia(100%) saturate(7026%) hue-rotate(252deg) brightness(70%) contrast(124%)"
                      : null,
                }}
                src="img/profile_v2.png"
                onClick={() => setValue("profile")}
              />
            </div>
            <div
              className={classes.iconTitle}
              style={{
                color: value === "profile" ? "black" : "#a9a8a9",
              }}
            >
              Profile
            </div>
          </div>
        </div>
      </div>
    </Div100vh>
  );
}
