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
  const [value, setValue] = React.useState("");
  const [parentShopInfo, setParentShopInfo] = useState({});
  const history = useHistory();

    const handleCreate = () => {
        const pushState = "create";
        history.push({
            pathname: "/businessHome",
            state: { pushState }
        })
    }

    const handleHistory = () => {
        const pushState = "history";
        history.push({
            pathname: "/businessHome",
            state: { pushState }
        })
    }

    const handleShop = () => {
        const pushState = "shop";
        history.push({
            pathname: "/businessHome",
            state: { pushState }
        })
    }

    const handleProfile = () => {
        const pushState = "profile";
        history.push({
            pathname: "/businessHome",
            state: { pushState }
        })
    }

  return (
    <div>
        <FontAwesomeIcon
          icon={faEdit}
          className={classes.profileIcon}
          onClick={() => handleCreate()}
        />
      <FontAwesomeIcon
        icon={faClone}
        className={classes.profileIcon}
        onClick={() => handleHistory()}
      />
      <FontAwesomeIcon
        icon={faStoreAlt}
        className={classes.profileIcon}
        onClick={() => handleShop()}
      />
      <FontAwesomeIcon
        icon={faUserCircle}
        className={classes.profileIcon}
        onClick={() => handleProfile()}
      />
    </div>
  );
}
