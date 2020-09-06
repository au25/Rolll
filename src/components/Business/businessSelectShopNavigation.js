import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
    height: "80px",
    padding: "0 15px",
    backgroundColor: "white",
    padding: "0 40px 4px 40px",
    boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.03)",
    zIndex: "100",
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
    width: "32px",
    height: "32px",
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
    height: "35px",
  },
  profile_icon_image: {
    width: "100%",
    margin: "3px 0 0 0",
    height: "37px",
  },
  iconTitle: {
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    margin: "3px 0 0 0",
  },
  giftList_image: {
    width: "25px",
    height: "25px",
    margin: "5px 0 0 0",
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
            className={classes.giftList_image}
            style={{
              filter: value === "create" ? null : null,
            }}
            src="img/rolll.png"
            onClick={() => handleCreate()}
          />
        </div>
        <div className={classes.iconTitle}>Create</div>
      </div>
      <div className={classes.icon_container}>
        <div className={classes.image_container}>
          <img
            className={classes.giftList_image}
            style={{
              filter: value === "history" ? null : "grayscale(1)",
            }}
            src="img/history.png"
            onClick={() => handleHistory()}
          />
        </div>
        <div className={classes.iconTitle}>Record</div>
      </div>
      <div className={classes.icon_container}>
        <div className={classes.image_container}>
          <img
            className={classes.giftList_image}
            style={{
              filter: value === "shop" ? null : "grayscale(1)",
            }}
            src="img/shop.png"
            onClick={() => handleShop()}
          />
        </div>
        <div className={classes.iconTitle}>Shop</div>
      </div>
      <div className={classes.icon_container}>
        <div className={classes.image_container}>
          <img
            className={classes.giftList_image}
            style={{
              filter: value === "profile" ? null : "grayscale(1)",
            }}
            src="img/profile_v2.png"
            onClick={() => handleProfile()}
          />
        </div>
        <div className={classes.iconTitle}>Profile</div>
      </div>
    </div>
  );
}
