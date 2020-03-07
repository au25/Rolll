import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import app from "../firebase";
import { AuthContext } from "../Auth";

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
  const [giftSnapshot, setGiftSnapshot] = useState([]);
  const [userSnapshot, setUserSnapshot] = useState([]);
  const [gift, setGift] = useState([]);
  const [userSelection, setUserSelection] = useState([]);
  const [location, setLocation] = useState([]);
  const db = app.firestore();
  const { currentUser } = useContext(AuthContext);

  const user = db.collection("user").doc(currentUser.uid);
  const userFireBaseSnapShot = db.collec;

  // Happens before component mounts
  // Saves a snapshot of gift as state
  useEffect(() => {
    async function fetchGiftData() {
      const giftSnapshot = await db.collection("gift").get();
      const giftDocs = giftSnapshot.docs;
      for (let i = 0; i < giftDocs.length; i++) {
        setGiftSnapshot(snapshot => [
          ...snapshot,
          {
            id: giftDocs[i].id,
            shopName: giftDocs[i].data().name,
            location: giftDocs[i].data().location,
            giftDescription: giftDocs[i].data().giftDescription
          }
        ]);
      }
    }

    async function fetchUserData() {
      const userDoc = await user.get();
      // console.log(userDoc.data().giftLocationView);
      setUserSnapshot(snapshot => [
        ...snapshot,
        {
          email: userDoc.data().email,
          giftLocationView: userDoc.data().giftLocationView
        }
      ]);
    }

    async function fetchLocationData() {
      const locationDoc = await db.collection("location").get();
      const locationDocs = locationDoc.docs;
      const locationArray = locationDocs[0].data();
      console.log(Object.keys(locationArray));
      console.log(Object.keys(locationArray).length);

      for (let i = 0; i < Object.keys(locationArray).length; i++) {
        console.log(i);
        setLocation(location => [
          ...location,
          {
            [Object.keys(locationArray)[i]]: Object.values(locationArray)[i]
          }
        ]);
      }
    }

    fetchGiftData();
    fetchUserData();
    fetchLocationData();
  }, []);

  const handleChange = event => {
    const locationPref = event.target.value;
    setUserSelection({
      city: locationPref
    });
    console.log(locationPref);
  };

  function RenderGift() {
    return giftSnapshot.map(data => (
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
        {/*   Location is an array holding an city array
              City : Municipal is key value pair within the city array
              Map the array, and callback returns */}
        <NativeSelect onChange={handleChange}>
          <option value="">City</option>
          {location.map(x => (
            <option value={Object.keys(x)}>{Object.keys(x)}</option>
          ))}
        </NativeSelect>
      </FormControl>
      <React.Fragment>
        <RenderGift />
      </React.Fragment>
    </div>
  );
}
