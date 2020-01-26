import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import app from "../firebase";

const useStyles = makeStyles({
  giftContainer: {
    display: "flex",
    flexDirection: "column",
    height: "110ox",
    width: "90%"
  },
  individualGiftContainer: {
    margin: "10px 0 10px 0",
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
  const [snapshot, setSnapshot] = useState([]);
  const [gift, setGift] = useState([]);
  const [userSelection, setUserSelection] = useState([]);
  const db = app.firestore();

  // Happens before component mounts
  // Saves a snapshot of gift as state
  useEffect(() => {
    async function fetchData() {
      const snapshot = await db.collection("gift").get();
      const docs = snapshot.docs;
      for (let i = 0; i < 2; i++) {
        setSnapshot(snapshot => [
          ...snapshot,
          {
            id: docs[i].id,
            shopName: docs[i].data().name,
            location: docs[i].data().location,
            giftDescription: docs[i].data().giftDescription
          }
        ]);
      }
    }
    fetchData();
  }, []);

  // To do next time: call function after setState
  // Render location divs according to dropdown input
  const handleChange = event => {
    setUserSelection({
      city: event.target.value
    });
  };

  function RenderGift() {
    return snapshot.map(data => (
      <div className={classes.individualGiftContainer}>
        <div className={classes.giftImgShopName}>
          <div className={classes.giftImg}></div>
          <div className={classes.giftDescription}>
            <div>{data.shopName}</div>
          </div>
        </div>
        <div>
          <br></br>
          <div>{data.giftDescription}</div>
          <br></br>
          <div>{data.location}</div>
        </div>
      </div>
    ));
  }

  return (
    <div className={classes.giftContainer}>
      <FormControl className={classes.formControl}>
        <NativeSelect onChange={handleChange}>
          <option value="">City</option>
          <option value={"richmond"}>richmond</option>
          <option value={"burnaby"}>burnaby</option>
        </NativeSelect>
      </FormControl>
      <React.Fragment>
        <RenderGift />
      </React.Fragment>
    </div>
  );
}
