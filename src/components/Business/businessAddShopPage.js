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
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
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
  location_errorText: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "13px",
    color: "rgba(204, 0, 0, 1)",
    margin: "3px 0 0px 0px",
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
    MuiNativeSelect: {
      root: {
        margin: "15px 0 10px 0",
        padding: "0 0 0 11px",
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
    shop_cityArea: "",
  });
  const [countryErrorState, setCountryErrorState] = useState(null);
  const [regionErrorState, setRegionErrorState] = useState(null);
  const [locationInfo, setLocationInfo] = useState();
  const [selectDisable, setSelectDisable] = useState({
    regionDisable: true,
    cityDisable: true,
    cityAreaDisable: true,
  });
  const [locationValid, setLocationValid] = useState({
    cityArea: true,
    city: true,
    region: true,
    country: false,
  });

  const db = firebase.firestore();
  let countryArray = [];
  let regionArray = [];
  let cityArray = [];
  let cityAreaArray = [];

  useEffect(() => {
    const fetchCountryInfo = async () => {
      const countryCollection = await db.collection("country").get();
      countryCollection.docs.map((country) => countryArray.push(country.id));
      setLocationInfo({
        ...locationInfo,
        countryArray: countryArray,
        regionArray: regionArray,
        cityArray: cityArray,
        cityAreaArray: cityAreaArray,
      });
    };
    fetchCountryInfo();
  }, []);

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
          shop_area: shopInfo.shop_cityArea
        }),
      });

    let newShopInfo = { ...parentShopInfo };
    newShopInfo.shop.push(shopInfo);
    setParentShopInfo(newShopInfo);
  }

  const handleCountryChange = async (e) => {
    setShopInfo({
      ...shopInfo,
      shop_country: e.target.value,
    });
    const regionCollection = await db
      .collection("country")
      .doc(e.target.value)
      .collection("region")
      .get();
    regionCollection.docs.map((region) => regionArray.push(region.id));
    setLocationInfo({ ...locationInfo, regionArray: regionArray });
    setSelectDisable({
      ...selectDisable,
      regionDisable: false,
      cityDisable: true,
      cityAreaDisable: true,
    });
    setLocationValid({
      ...locationValid,
      country: true,
      region: false,
      city: false,
      cityArea: false,
    });
  };
  const handleRegionChange = async (e) => {
    setShopInfo({
      ...shopInfo,
      shop_region: e.target.value,
    });
    const cityCollection = await db
      .collection("country")
      .doc(shopInfo.shop_country)
      .collection("region")
      .doc(e.target.value)
      .collection("city")
      .get();
    cityCollection.docs.map((city) => cityArray.push(city.id));
    setLocationInfo({ ...locationInfo, cityArray: cityArray });
    setSelectDisable({
      ...selectDisable,
      cityDisable: false,
      cityAreaDisable: true,
    });
    setLocationValid({ ...locationValid, region: true });
  };

  const handleCityChange = async (e) => {
    setShopInfo({ ...shopInfo, shop_city: e.target.value });
    const cityAreaCollection = await db
      .collection("country")
      .doc(shopInfo.shop_country)
      .collection("region")
      .doc(shopInfo.shop_region)
      .collection("city")
      .doc(e.target.value)
      .collection("area")
      .get();
    cityAreaCollection.docs.map((cityArea) => cityAreaArray.push(cityArea.id));
    setLocationInfo({ ...locationInfo, cityAreaArray: cityAreaArray });
    setSelectDisable({
      ...selectDisable,
      cityAreaDisable: false,
    });
    setLocationValid({ ...locationValid, city: true });
  }

  const handleCityAreaChange = async (e) => {
    setShopInfo({
      ...shopInfo, shop_cityArea: e.target.value,
    });
    setLocationValid({ ...locationValid, cityArea: true });
  }

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
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Country</InputLabel>
            <NativeSelect
              className={classes.citySelect_input}
              defaultValue=""
              value={shopInfo.shop_country}
              onChange={(e) => handleCountryChange(e)}
            >
              <option value="" disabled></option>
              {locationInfo
                ? locationInfo.countryArray.map((country) => {
                    return <option value={country}>{country}</option>;
                  })
                : null}
            </NativeSelect>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Region</InputLabel>
            <NativeSelect
              className={classes.citySelect_input}
              defaultValue=""
              value={shopInfo.shop_region}
              onChange={(e) => handleRegionChange(e)}
              disabled={selectDisable.regionDisable}
            >
              <option value="" disabled></option>
              {locationInfo
                ? locationInfo.regionArray.map((region) => {
                    return <option value={region}>{region}</option>;
                  })
                : null}
            </NativeSelect>
            {locationValid.region ? null : (
              <div className={classes.location_errorText}>Select a Region</div>
            )}
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>City</InputLabel>
              <NativeSelect
                className={classes.citySelect_input}
                defaultValue=""
                value={shopInfo.shop_city}
                onChange={(e) => handleCityChange(e)}
                disabled={selectDisable.cityDisable}
              >
                <option value="" disabled></option>
                {locationInfo
                  ? locationInfo.cityArray.map((city) => {
                      return <option value={city}>{city}</option>;
                    })
                  : null}
              </NativeSelect>
              {locationValid.city ? null : (
                <div className={classes.location_errorText}>Select a City</div>
              )}
            </FormControl>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>Area</InputLabel>
              <NativeSelect
                className={classes.citySelect_input}
                defaultValue=""
                value={shopInfo.shop_cityArea}
                onChange={(e) => handleCityAreaChange(e)}
                disabled={selectDisable.cityAreaDisable}
              >
                <option value="" disabled></option>
                {locationInfo
                  ? locationInfo.cityAreaArray.map((area) => {
                      return <option value={area}>{area}</option>;
                    })
                  : null}
              </NativeSelect>
              {locationValid.cityArea ? null : (
                <div className={classes.location_errorText}>Select an Area</div>
              )}
            </FormControl>
          <div className={classes.addButton_container}>
            <Button
              className={classes.addText}
              type="submit"
              disabled={
                !(
                  locationValid.cityArea &&
                  locationValid.city &&
                  locationValid.region &&
                  locationValid.country
                )
              }
            >
              Add
            </Button>
          </div>
        </ValidatorForm>
      </div>
    </ThemeProvider>
  );
}
