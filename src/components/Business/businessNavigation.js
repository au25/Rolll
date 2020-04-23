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
  root: {
    width: 500,
  },
  renderBodyContainer: {
    height: "600px",
  },
  profileIcon: {
    fontSize: "25px",
  },
});

export default function ({ userDbInfo }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("active");
  const [parentShopInfo, setParentShopInfo] = useState({});

  useEffect(() => {
    setParentShopInfo(userDbInfo.data());
  }, []);

  const RenderBody = () => {
    if (value == "active") {
      return <BusinessActiveGiftPage userDbInfo={userDbInfo} />;
    }
    if (value == "create") {
      return (
        <BusinessCreateGiftPage
          userDbInfo={userDbInfo}
          parentShopInfo={parentShopInfo}
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
    <div>
      <div className={classes.renderBodyContainer}>
        <RenderBody />
      </div>
      <FontAwesomeIcon
        icon={faPaperPlane}
        className={classes.profileIcon}
        onClick={() => setValue("active")}
      />
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
  );
}
