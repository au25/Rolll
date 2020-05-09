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
  },
  profileIcon: {
    fontSize: "25px",
  },
  navigationIconContainer: {
    // borderTop: "1px solid rgba(0, 0, 0, 0.15)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "12%",
    padding: "0 15px",
  },
});

export default function ({ userDbInfo, location }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("create");
  const [parentShopInfo, setParentShopInfo] = useState({});

  console.log("location stuff");
  console.log(location);

  useEffect(() => {
    setParentShopInfo(userDbInfo.data());
    if (location && location.state) {
      console.log("inside location stuff");
      console.log(location);
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
      );
    }
    if (value == "history") {
      return <BusinessGiftHistoryPage userDbInfo={userDbInfo} />;
    }
    if (value == "shop") {
      return (
        <BusinessManageShopPage
          userDbInfo={userDbInfo}
          parentShopInfo={parentShopInfo}
          setParentShopInfo={setParentShopInfo}
        />
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
        <FontAwesomeIcon
          icon={faEdit}
          className={classes.profileIcon}
          onClick={() => setValue("create")}
        />
        <FontAwesomeIcon
          icon={faClone}
          className={classes.profileIcon}
          onClick={() => setValue("history")}
        />
        <FontAwesomeIcon
          icon={faStoreAlt}
          className={classes.profileIcon}
          onClick={() => setValue("shop")}
        />
        <FontAwesomeIcon
          icon={faUserCircle}
          className={classes.profileIcon}
          onClick={() => setValue("profile")}
        />
      </div>
    </Div100vh>
  );
}
