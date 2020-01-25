import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import app from "../firebase";

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
  const [gift, setGift] = useState([]);
  const db = app.firestore();

  useEffect(() => {
    async function fetchData() {
      const snapshot = await db.collection("chat").get();
      const docs = snapshot.docs;
      for (let i = 0; i < 2; i++) {
        setGift( gift => [
          ...gift,
          {
            id: docs[i].id,
            message: docs[i].data().message
          }
        ]);
        console.log(docs[i].id);
      }
    }
    fetchData();
  }, []);

  const renderGift = () => {
    let giftArray = [];
    for (let i = 0; i < gift.length; i++) {}
  };

  return (
    <div className={classes.giftContainer}>
      {gift.map(data => (
        <div> {data.message} </div>
      ))}
      <div className={classes.giftImgShopName}>
        <div className={classes.giftImg}></div>
        <div className={classes.giftDescription}>
          <div>Shp Name</div>
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
