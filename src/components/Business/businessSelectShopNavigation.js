import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CreateIcon from "@material-ui/icons/Create";
import FaceIcon from "@material-ui/icons/Face";
import HistoryIcon from "@material-ui/icons/DynamicFeed";
import { useHistory } from "react-router-dom";
import Div100vh from "react-div-100vh";

// Navigation Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faEdit,
  faPaperPlane,
  faClone,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";

// Navigation Pages
import BusinessActiveGiftPage from "./businessActiveGiftPage";
import BusinessCreateGiftPage from "./businessCreateGiftPage";
import BusinessGiftHistoryPage from "./businessGiftHistoryPage";
import BusinessProfilePage from "./businessProfilePage";
import BusinessManageShopPage from "./businessManageShopPage";

const useStyles = makeStyles({
  div100Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  root: {
    width: 500,
  },
  renderBodyContainer: {
    height: "600px",
    overflow: "auto",
  },
  profileIcon: {
    width: "100%",
  },
  navigationIconContainer: {
    // borderTop: "1px solid rgba(0, 0, 0, 0.15)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "14%",
    padding: "0 15px",
    backgroundColor: "lightgray",
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
  create_icon_image: {
    width: "95%",
    margin: "5px 0 0 0",
  },
  history_icon_image: {
    width: "80%",
    margin: "3px 0 0 0",
  },
  shop_icon_image: {
    width: "90%",
    margin: "6px 0 0 0",
    height: "35px"
  },
  profile_icon_image: {
    width: "100%",
    margin: "3px 0 0 0",
    height: "37px"
  },
  iconTitle: {
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    margin: "3px 0 0 0",
  },
});

export default function ({ userDbInfo }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [parentShopInfo, setParentShopInfo] = useState({});
  const history = useHistory();

  const handleCreate = () => {
    const pushState = "create";
    history.push({
      pathname: "/businessHome",
      state: { pushState },
    });
  };

  const handleHistory = () => {
    const pushState = "history";
    history.push({
      pathname: "/businessHome",
      state: { pushState },
    });
  };

  const handleShop = () => {
    const pushState = "shop";
    history.push({
      pathname: "/businessHome",
      state: { pushState },
    });
  };

  const handleProfile = () => {
    const pushState = "profile";
    history.push({
      pathname: "/businessHome",
      state: { pushState },
    });
  };

  return (
      <div className={classes.navigationIconContainer}>
        <div className={classes.icon_container}>
          <div className={classes.image_container}>
            <img
              className={classes.create_icon_image}
              style={{
                filter:
                  value === "create" ? null : null,
              }}
              src="https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2FplainBlue_giftBox.png?alt=media&token=73690a9c-81c8-4d84-88dc-e10a8784fab3"
              onClick={() => handleCreate()}
            />
          </div>
          <div className={classes.iconTitle}>Create</div>
        </div>
        <div className={classes.icon_container}>
          <div className={classes.image_container}>
            <img
              className={classes.history_icon_image}
              style={{
                filter:
                  value === "history" ? null : "grayscale(1)",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fhistory_icon.png?alt=media&token=2cf92ec6-bddb-4f92-a2b2-84df39e8e818"
              onClick={() => handleHistory()}
            />
          </div>
          <div className={classes.iconTitle}>Record</div>
        </div>
        <div className={classes.icon_container}>
          <div className={classes.image_container}>
            <img
              className={classes.shop_icon_image}
              style={{
                filter:
                  value === "shop" ? null : "grayscale(1)",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fshop.png?alt=media&token=541c16fe-7ab4-441d-ae67-430c9b4f7a31"
              onClick={() => handleShop()}
            />
          </div>
          <div className={classes.iconTitle}>Shop</div>
        </div>
        <div className={classes.icon_container}>
          <img
            className={classes.profile_icon_image}
            style={{
              filter:
                value === "profile" ? null : "grayscale(1)",
            }}
            src="https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fprofile_icon.png?alt=media&token=2611a18c-502f-47e3-8dac-252adec806cd"
            onClick={() => handleProfile()}
          />
          <div className={classes.iconTitle}>Profile</div>
        </div>
      </div>
  );
}
