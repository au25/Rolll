import React, { useEffect, useContext, useState } from "react";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import Button from "@material-ui/core/Button";
import "./businessManageShopPage.css";
import "firebase/firestore";

const useStyles = makeStyles({
  addShopText: {
    fontSize: "16px",
    margin: "28px 0 15px 0",
    width: "100%",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    // borderBottom: "1px solid rgba(0, 0, 0, 0.7)"
  },
  outerFormContainer: {},
  formContainer: {},
  countryOuterContainer: {
    margin: "0 0 28px 0",
    width: "100%",
  },
  regionOuterContainer: {
    margin: "0 0 28px 0",
    width: "100%",
  },
  countryErrorMessage: {
    fontSize: "12.5px",
    color: "#f44336",
    padding: "5px 0 0 14px",
    fontFamily: "CoreSans, sans-serif",
  },
  regionErrorMessage: {
    fontSize: "12.5px",
    color: "#f44336",
    padding: "5px 0 0 14px",
    fontFamily: "CoreSans, sans-serif",
  },
  addButton_container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  addText: {
    fontWeight: "bold",
    backgroundColor: "#4caf50",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "126px",
    height: "50px",
    margin: "0 0 28px 0",
  },
});

const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      },
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0",
      },
    },
    MuiButton: {
      root: {
        height: "60px",
        width: "100%",
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50",
          },
        },
      },
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0",
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "0 0 28px 0",
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px",
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: "0",
        justifyContent: "center",
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        height: "70px",
      },
      content: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: "16px",
        fontFamily: "CoreSans, sans-serif",
      },
    },
  },
});

export default function ({ userDbInfo, parentShopInfo, setParentShopInfo }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const [shopInfo, setShopInfo] = useState({
    shop_name: "",
    shop_address: "",
    shop_city: "",
    shop_country: "",
    shop_region: "",
  });
  const [countryErrorState, setCountryErrorState] = useState(null);
  const [regionErrorState, setRegionErrorState] = useState(null);

  /**
   * Handler for shop information inputs
   * @param {*} index Parameter to indicate which index in array to update
   */
  function handleShopProfileChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setShopInfo({ ...shopInfo, [name]: value });
  }

  /**
   * Adds shop to the database
   * Updates parent state of shop information
   */
  function handleShopProfileUpdate(e) {
    e.preventDefault();

    const db = firebase.firestore();
    db.collection("businessUser")
      .doc(userDbInfo.id)
      .update({
        shop: firebase.firestore.FieldValue.arrayUnion({
          shop_name: shopInfo.shop_name,
          shop_address: shopInfo.shop_address,
          shop_city: shopInfo.shop_city,
          shop_country: shopInfo.shop_country,
          shop_region: shopInfo.shop_region,
        }),
      });

    let newShopInfo = { ...parentShopInfo };
    newShopInfo.shop.push(shopInfo);
    setParentShopInfo(newShopInfo);
  }

  const handleCountryChange = () => {};

  const validateCountryRegion = () => {
    if (shopInfo.shop_country == "") {
      setCountryErrorState(true);
    } else {
      setCountryErrorState(false);
    }

    if (shopInfo.shop_region == "") {
      setRegionErrorState(true);
    } else {
      setRegionErrorState(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.addShopText}>Add Shop</div>
      <div className={classes.outerFormContainer}>
        <ValidatorForm
          className={classes.formContainer}
          noValidate
          autoComplete="off"
          onSubmit={handleShopProfileUpdate}
        >
          <TextValidator
            id="filled-basic"
            label="Shop Name"
            variant="filled"
            name="shop_name"
            value={shopInfo.shop_name}
            validators={["required"]}
            errorMessages={["Shop name is requred"]}
            onChange={(e) => handleShopProfileChange(e)}
          />
          <TextValidator
            id="filled-basic"
            label="Address"
            variant="filled"
            name="shop_address"
            value={shopInfo.shop_address}
            validators={["required"]}
            errorMessages={["Address is requred"]}
            onChange={(e) => handleShopProfileChange(e)}
          />
          <TextValidator
            id="filled-basic"
            label="City"
            variant="filled"
            name="shop_city"
            value={shopInfo.shop_city}
            validators={["required"]}
            errorMessages={["City is requred"]}
            onChange={(e) => handleShopProfileChange(e)}
          />
          <div className={classes.countryOuterContainer}>
            <div className={classes.countryContainer}>
              <CountryDropdown
                required
                value={shopInfo.shop_country}
                whitelist={["CA", "US"]}
                priorityOptions={["CA", "US"]}
                classes="manageShop_selectCountry"
                onChange={(country) =>
                  setShopInfo({
                    ...shopInfo,
                    shop_country: country,
                  })
                }
              />
            </div>
            <div>
              {countryErrorState && shopInfo.shop_country == "" ? (
                <div className={classes.countryErrorMessage}>
                  Select a country
                </div>
              ) : null}
            </div>
          </div>
          <div className={classes.regionOuterContainer}>
            <div className={classes.regionContainer}>
              <RegionDropdown
                required
                disableWhenEmpty={true}
                country={shopInfo.shop_country}
                value={shopInfo.shop_region}
                disableWhenEmpty={true}
                classes="manageShop_selectRegion"
                onChange={(region) =>
                  setShopInfo({
                    ...shopInfo,
                    shop_region: region,
                  })
                }
              />
            </div>
            <div>
              {regionErrorState && shopInfo.shop_region == "" ? (
                <div className={classes.regionErrorMessage}>
                  Select a region
                </div>
              ) : null}
            </div>
          </div>
          <div className={classes.addButton_container}>
            <Button
              className={classes.addText}
              type="submit"
              onClick={validateCountryRegion}
            >
              Add
            </Button>
          </div>
        </ValidatorForm>
      </div>
    </ThemeProvider>
  );
}
