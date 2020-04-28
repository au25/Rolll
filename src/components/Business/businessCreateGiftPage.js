import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setupUI } from "../setupUI";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles({});

export default function ({ userDbInfo, parentShopInfo }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const [giftDuration, setGiftDuration] = React.useState({
    gift_duration: "",
  });

  const userId = userDbInfo.id;

  console.log("inside renderGift on create gift page");
  console.log(parentShopInfo);

  const handleGiftDuration = (e) => {
    const { name, value } = e.target;
    setGiftDuration({
      ...giftDuration,
      [name]: value,
    });
    console.log(name + "   " + value);
  };

  const RenderGift = () => {
    return parentShopInfo.gift.map((gift) => (
      <div>
        <FormControl className={classes.formControl}>
          <NativeSelect
            className={classes.selectEmpty}
            value={giftDuration.gift_duration}
            name="gift_duration"
            onChange={handleGiftDuration}
          >
            <option value="" disabled>
              Select Duration
            </option>
            <option value={3}>3 Days</option>
            <option value={7}>7 Days</option>
            <option value={30}>30 Days </option>
          </NativeSelect>
        </FormControl>
        <Link
          to={{
            pathname: "/businessGiftSelectShop",
            state: { userId, parentShopInfo, gift, giftDuration },
          }}
        >
          <div>{gift.gift_name}</div>
          <div>gift description</div>
          <br />
        </Link>
      </div>
    ));
  };

  return (
    <div>
      <div>{parentShopInfo.gift ? <RenderGift /> : null}</div>
    </div>
  );
}
