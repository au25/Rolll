import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  giftContainer: {
    display: "flex",
    flexDirection: "column",
    height: "110ox",
    width: "90%",
    backgroundColor: "grey"
  },
  giftImgShopName: {
    display: "flex"
  },
  giftImg: {
    backgroundColor: "yellow",
    height: "50px",
    width: "50px"
  },
  giftDescription: {
    display: "flex",
    flexDirection: "column"
  }
});

export default function() {
  const classes = useStyles();

  return (
    <div className={classes.giftContainer}>
      <div className={classes.giftImgShopName}>
        <div className={classes.giftImg}></div>
        <div className={classes.giftDescription}>
          <div>Shop Name</div>
        </div>
      </div>
      <div>
        <br></br>
        <div>Description</div>
        <br></br>
        <div>Expiring...</div>
      </div>
    </div>
  );
}
