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
import UserProfile from "./userProfilePage";
import UserFavorite from "./userFavorite";
import UserGiftList from "./userGift";

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
        height: "100vh",
    },
  },
  userNavigation_renderBodyContainer: {
    height: "85%",
  },
  userNavigation_navContainer: {
    [theme.breakpoints.down(600)]: {
        width: "100%",
        height: "15%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
  },
  profileIcon: {
    fontSize: "25px",
  },
}));

export default function ({ userDbInfo, setUserDbInfo }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [parentShopInfo, setParentShopInfo] = useState({});
  const [navigationValue, setNavigationValue] = useState("giftList");
  const history = useHistory();

  const RenderBody = () => {
    if (navigationValue == "giftList") {
      return (
        <UserGiftList userDbInfo={userDbInfo} setUserDbInfo={setUserDbInfo} />
      );
    }
    if (navigationValue == "favorite") {
      return <UserFavorite userDbInfo={userDbInfo} />;
    }
    if (navigationValue == "profile") {
      return <UserProfile userDbInfo={userDbInfo} />;
    }
  };

  return (
    <div className={classes.userNavigation_container}>
      <div className={classes.userNavigation_renderBodyContainer}>
        <RenderBody />
      </div>
      <div className={classes.userNavigation_navContainer}>
        <FontAwesomeIcon
          icon={faHeart}
          className={classes.profileIcon}
          onClick={() => setNavigationValue("favorite")}
        />
        <FontAwesomeIcon
          icon={faClone}
          className={classes.profileIcon}
          onClick={() => setNavigationValue("giftList")}
        />
        <FontAwesomeIcon
          icon={faUserCircle}
          className={classes.profileIcon}
          onClick={() => setNavigationValue("profile")}
        />
      </div>
    </div>
  );
}
