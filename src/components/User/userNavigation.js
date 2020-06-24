import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import UserProfile from "./userProfilePage";
import UserFavorite from "./userFavorite";
import UserGiftRecord from "./userGiftRecord";
import UserGiftList from "./userGift";
import Div100vh from "react-div-100vh";

// Navigation Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faEdit,
  faHeart,
  faClone,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  userNavigation_container: {
    [theme.breakpoints.down(600)]: {
      width: "100%",
      //   height: "100vh",
    },
  },
  userNavigation_div100Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  userNavigation_renderBodyContainer: {},
  userNavigation_navContainer: {
    height: "14%",
    backgroundColor: "#d4dcdc",
    padding: "0 30px 0 25px",
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
    width: "10%",
    height: "60px",
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
    width: "95%",
    margin: "5px 0 0 0",
  },
  profile_icon_image: {
    width: "100%",
    margin: "5px 0 0 0",
    height: "38px",
  },
  iconTitle: {
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    margin: "3px 0 0 0",
  },
}));

export default function ({ userDbInfo, setUserDbInfo }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [parentShopInfo, setParentShopInfo] = useState({});
  const [navigationValue, setNavigationValue] = useState("giftList");
  const history = useHistory();

  /**
   * Renders body content based on value of icon clicked
   */
  const RenderBody = () => {
    if (navigationValue == "giftList") {
      return (
        <UserGiftList userDbInfo={userDbInfo} setUserDbInfo={setUserDbInfo} />
      );
    }
    if (navigationValue == "giftRecord") {
      return <UserGiftRecord userDbInfo={userDbInfo} />;
    }
    if (navigationValue == "profile") {
      return <UserProfile userDbInfo={userDbInfo} />;
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
                    navigationValue === "giftRecord" ? null : "grayscale(1)",
                }}
                src="https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2FplainBlue_giftBox.png?alt=media&token=73690a9c-81c8-4d84-88dc-e10a8784fab3"
                onClick={() => setNavigationValue("giftRecord")}
              />
            </div>
            <div className={classes.iconTitle}>Record</div>
          </div>
          <div className={classes.icon_container}>
            <div className={classes.image_container}>
              <img
                className={classes.giftList_image}
                style={{
                  filter:
                    navigationValue === "giftList" ? null : "grayscale(1)",
                }}
                src="https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2FplainBlue_giftBox.png?alt=media&token=73690a9c-81c8-4d84-88dc-e10a8784fab3"
                onClick={() => setNavigationValue("giftList")}
              />
            </div>
            <div className={classes.iconTitle}>Gift</div>
          </div>
          <div className={classes.icon_container}>
            <img
              className={classes.profile_icon_image}
              style={{
                filter: navigationValue === "profile" ? null : "grayscale(1)",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fprofile_icon.png?alt=media&token=2611a18c-502f-47e3-8dac-252adec806cd"
              onClick={() => setNavigationValue("profile")}
            />
            <div className={classes.iconTitle}>Profile</div>
          </div>
        </div>
      </Div100vh>
    </div>
  );
}
