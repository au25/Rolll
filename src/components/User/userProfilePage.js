import React, { useContext, useState, useEffect } from "react";
import firebase from "../../firebase";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down(600)]: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  yourProfileText: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "45px 0 20px 0",
    display: "flex",
    width: "70%",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
  },
  userProfileFormContainer: {
    [theme.breakpoints.down(600)]: {
      width: "70%",
    },
  },
  userProfile_input: {
    [theme.breakpoints.down(600)]: {
      width: "250px",
      margin: "6px 0",
      border: "none",
      fontSize: "16px",
      backgroundColor: "transparent",
    },
  },
  userProfile_cityInputContainer: {
    width: "70%",
    display: "flex",
    borderBottom: "1px solid black",
  },
  userProfile_emailInputContainer: {
    width: "70%",
    display: "flex",
    borderBottom: "1px solid black",
  },
  userProfile_emailTitle: {
    width: "70%",
    display: "flex",
    fontSize: "14px",
    margin: "45px 0 0 0",
  },
  userProfile_cityTitle: {
    width: "70%",
    display: "flex",
    fontSize: "14px",
    margin: "45px 0 0 0",
  },
  userProfile_emailInput: {
    [theme.breakpoints.down(600)]: {
      width: "193px",
      margin: "5px 0",
      border: "none",
      fontSize: "20px",
      backgroundColor: "transparent",
      padding: "0 0 1px 4px",
      outline: "none",
      fontSize: "16px",
    },
  },
  userProfile_cityInput: {
    [theme.breakpoints.down(600)]: {
      width: "193px",
      margin: "5px 0",
      border: "none",
      fontSize: "20px",
      backgroundColor: "transparent",
      padding: "0 0 1px 4px",
      outline: "none",
      fontSize: "16px",
    },
  },
  userProfile_countryRegionContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "70%",
  },
  userProfile_countryRegionTitleContainer: {
    display: "flex",
    width: "70%",
    margin: "15px 0 0 0",
    justifyContent: "space-between",
  },
  userProfile_countryDropdownContainer: {
    borderBottom: "1px solid black",
    height: "100%",
    width: "120px",
  },
  userProfile_saveLogoutContainer: {
    display: "flex",
    width: "65%",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: "10px 0 0 0",
  },
  userProfile_saveButton: {
    padding: " 8px 15px 8px",
    backgroundColor: "darkgoldenrod",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
  },
  userProfile_logoutButton: {
    width: "60px",
    padding: "5px",
    margin: "8px 0 0 0",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "14px",
  },
  updateButton: {
    textTransform: "none",
    backgroundColor: "#4caf50",
    color: "rgba(255, 255, 255)",
    letterSpacing: "1px",
    fontSize: "16px",
    width: "50%",
    margin: " 0 0 12px 0",
    height: "50px",
  },
  logoutButton: {
    width: "40%",
    fontSize: "12px",
    padding: "0",
    height: "40px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    margin: "0 0 25px 0",
  },
  logoutContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  citySelect_input: {
    // margin: "10px 0 0 0"
  },
  location_errorText: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "13px",
    color: "rgba(204, 0, 0, 1)",
    margin: "3px 0 0px 0px",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "transparent",
      },
      input: {
        "&:disabled": {
          backgroundColor: "rgba(234, 234, 234)",
        },
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
        "&$disabled": {
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
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
        height: "60px",
        transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px",
      },
    },
    MuiNativeSelect: {
      root: {
        margin: "15px 0 10px 0",
        padding: "0 0 0 11px",
      },
    },
    Mui: {
      disabled: {
        color: "red !important",
      },
    },
  },
});

export default function ({ userDbInfo, countryInfo }) {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState({});
  const [locationInfo, setLocationInfo] = useState();
  const [selectDisable, setSelectDisable] = useState({
    cityDisable: false,
    cityAreaDisable: false,
  });
  const [locationValid, setLocationValid] = useState({
    cityArea: true,
    city: true,
    region: true,
    country: true,
  });
  const [locationArray, setLocationArray] = useState({
    countryArray: [],
    regionArray: [],
    cityArray: [],
    cityAreaArray: [],
  });
  const [currentLocation, setCurrentLocation] = useState({
    currentCountry: "",
    currentRegion: "",
    currentCity: "",
    currentCityArea: "",
  });

  const db = firebase.firestore();
  let countryArrayCopy = [];
  let regionArrayCopy = [];
  let cityArrayCopy = [];
  let cityAreaArrayCopy = [];
  let countryCollection, regionCollection, cityCollection, cityAreaCollection;

  useEffect(() => {
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }
    const fetchCountryInfo = async () => {
      if (countryInfo) {
        countryInfo.docs.map((country) => countryArrayCopy.push(country.id));
        cityAreaArrayCopy.push(userDbInfo.data().user_cityArea);
        cityArrayCopy.push(userDbInfo.data().user_city);
        regionArrayCopy.push(userDbInfo.data().user_region);
        setLocationArray({
          ...locationArray,
          countryArray: countryArrayCopy,
          regionArray: regionArrayCopy,
          cityArray: cityArrayCopy,
          cityAreaArray: cityAreaArrayCopy,
        });
        setCurrentLocation({
          ...currentLocation,
          country: userDbInfo.data().user_country,
          region: userDbInfo.data().user_region,
          city: userDbInfo.data().user_city,
          cityArea: userDbInfo.data().user_cityArea,
        });
      }
      setLocationInfo({
        ...locationInfo,
        countryArray: countryArrayCopy,
        regionArray: regionArrayCopy,
        cityArray: cityArrayCopy,
        cityAreaArray: cityAreaArrayCopy,
      });
    };
    fetchCountryInfo();
  }, []);

  /**
   * Handles profile changes
   */
  function handleProfileChange(e) {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  /**
   * Write to db new profile updates
   */
  const handleProfileUpdate = (e) => {
    e.preventDefault();

    const db = firebase.firestore();
    // console.log(userInfo);
    db.collection("user").doc(userDbInfo.id).set(userInfo);
  };

  /**
   * Series of event handlers for cityArea, city, region and country
   * Dynamically generates lower tier inputs, ex. country -> region -> city -> cityArea
   */
  const handlecityAreaChange = (e) => {
    e.persist();
    setUserInfo({
      ...userInfo,
      user_cityArea: e.target.value,
    });
    setCurrentLocation({ ...currentLocation, cityArea: e.target.value });
    setLocationValid({
      ...locationValid,
      cityArea: true,
    });
  };

  const handleCityChange = async (e) => {
    e.persist();
    setUserInfo({
      ...userInfo,
      user_cityArea: "",
      user_city: e.target.value,
    });

    let cityAreaCollection = await db
      .collection("country")
      .doc(userInfo.user_country)
      .collection("region")
      .doc(userInfo.user_region)
      .collection("city")
      .doc(e.target.value)
      .collection("area")
      .get();

    let newCityAreaArray = [];
    cityAreaCollection.docs.map((cityArea) =>
      newCityAreaArray.push(cityArea.id)
    );
    setLocationArray({ ...locationArray, cityAreaArray: newCityAreaArray });
    setSelectDisable({
      ...selectDisable,
      cityAreaDisable: false,
    });
    setCurrentLocation({
      ...currentLocation,
      city: e.target.value,
      cityArea: "",
    });
    setLocationValid({
      ...locationValid,
      cityArea: false,
      city: true,
    });
  };

  const handleRegionChange = async (e) => {
    e.persist();
    setUserInfo({
      ...userInfo,
      user_cityArea: "",
      user_city: "",
      user_region: e.target.value,
    });

    let cityCollection = await db
      .collection("country")
      .doc(userInfo.user_country)
      .collection("region")
      .doc(e.target.value)
      .collection("city")
      .get();

    let newCityArray = [];
    cityCollection.docs.map((city) => newCityArray.push(city.id));
    setSelectDisable({
      ...selectDisable,
      cityDisable: false,
      cityAreaDisable: true,
    });
    setLocationArray({
      ...locationArray,
      cityArray: [],
      cityAreaArray: [],
    });
    setCurrentLocation({
      ...currentLocation,
      region: e.target.value,
      city: "",
      cityArea: "",
    });
    setLocationValid({
      ...locationValid,
      cityArea: false,
      city: false,
      region: true,
    });
  };

  const handleCountryChange = async (e) => {
    e.persist();
    setUserInfo({
      ...userInfo,
      user_cityArea: "",
      user_city: "",
      user_region: "",
      user_country: e.target.value,
    });

    let regionCollection = await db
      .collection("country")
      .doc(e.target.value)
      .collection("region")
      .get();

    let newRegionArray = [];
    regionCollection.docs.map((region) => newRegionArray.push(region.id));
    setSelectDisable({
      ...selectDisable,
      cityDisable: true,
      cityAreaDisable: true,
    });
    setLocationArray({
      ...locationArray,
      region: [],
      cityArray: [],
      cityAreaArray: [],
    });
    setCurrentLocation({
      ...currentLocation,
      country: e.target.value,
      region: "",
      city: "",
      cityArea: "",
    });
    setLocationValid({
      ...locationValid,
      cityArea: false,
      city: false,
      region: false,
    });
  };

  const handleCityAreaClick = async () => {
    if (!selectDisable.cityAreaDisable) {
      cityAreaCollection = await db
        .collection("country")
        .doc(currentLocation.country)
        .collection("region")
        .doc(currentLocation.region)
        .collection("city")
        .doc(currentLocation.city)
        .collection("area")
        .get();
      cityAreaCollection.docs.map((cityArea) =>
        cityAreaArrayCopy.push(cityArea.id)
      );
      setLocationArray({ ...locationArray, cityAreaArray: cityAreaArrayCopy });
    }
  };

  const handleCityClick = async (e) => {
    if (!selectDisable.cityDisable) {
      cityCollection = await db
        .collection("country")
        .doc(currentLocation.country)
        .collection("region")
        .doc(currentLocation.region)
        .collection("city")
        .get();
      cityArrayCopy = [];
      cityCollection.docs.map((city) => cityArrayCopy.push(city.id));
      setLocationArray({ ...locationArray, cityArray: cityArrayCopy });
    }
  };

  const handleRegionClick = async () => {
    regionCollection = await db
      .collection("country")
      .doc(currentLocation.country)
      .collection("region")
      .get();
    regionArrayCopy = [];
    regionCollection.docs.map((region) => regionArrayCopy.push(region.id));
    setLocationArray({ ...locationArray, regionArray: regionArrayCopy });
  };

  const handleCountryClick = async (e) => {
    countryCollection = await db.collection("country").get();
    countryArrayCopy = [];
    countryCollection.docs.map((country) => countryArrayCopy.push(country.id));
    setLocationArray({ ...locationArray, countryArray: countryArrayCopy });
  };

  return locationInfo ? (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <ValidatorForm
          className={classes.userProfileFormContainer}
          noValidate
          autoComplete="off"
          onSubmit={handleProfileUpdate}
        >
          <div className={classes.yourProfileText}>Your Profile</div>
          <TextValidator
            disabled
            id="filled-basic"
            label="Email"
            variant="filled"
            InputLabelProps={{ shrink: true }}
            value={userInfo.user_email}
            validators={["required", "isEmail"]}
            errorMessages={[
              "Email address is requred",
              "Email address is not valid",
            ]}
            onChange={(e) =>
              setUserInfo({ ...userInfo, user_email: e.target.value })
            }
          />
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Area</InputLabel>
            <NativeSelect
              disabled={selectDisable.cityAreaDisable}
              className={classes.citySelect_input}
              defaultValue={userInfo.user_cityArea}
              value={userInfo.user_cityArea}
              onChange={(e) => handlecityAreaChange(e)}
              onClick={() => handleCityAreaClick()}
            >
              <option value="" disabled></option>
              {locationArray.cityAreaArray.map((cityArea) => {
                return <option value={cityArea}>{cityArea}</option>;
              })}
            </NativeSelect>
            {locationValid.cityArea ? null : (
              <div className={classes.location_errorText}>Select an area</div>
            )}
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>City</InputLabel>
            <NativeSelect
              disabled={selectDisable.cityDisable}
              className={classes.citySelect_input}
              defaultValue={userInfo.user_city}
              value={userInfo.user_city}
              onChange={(e) => handleCityChange(e)}
              onClick={(e) => handleCityClick(e)}
            >
              <option value="" disabled></option>
              {locationArray.cityArray.map((city) => {
                return <option value={city}>{city}</option>;
              })}
            </NativeSelect>
            {locationValid.city ? null : (
              <div className={classes.location_errorText}>Select a City</div>
            )}
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Region</InputLabel>
            <NativeSelect
              className={classes.citySelect_input}
              defaultValue={userInfo.user_region}
              value={userInfo.user_region}
              onChange={(e) => handleRegionChange(e)}
              onClick={(e) => handleRegionClick()}
            >
              <option value="" disabled></option>
              {locationArray.regionArray.map((region) => {
                return <option value={region}>{region}</option>;
              })}
            </NativeSelect>
            {locationValid.region ? null : (
              <div className={classes.location_errorText}>Select a Region</div>
            )}
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Country</InputLabel>
            <NativeSelect
              className={classes.citySelect_input}
              defaultValue={userInfo.user_country}
              value={userInfo.user_country}
              onChange={(e) => handleCountryChange(e)}
              onClick={(e) => handleCountryClick(e)}
            >
              {locationArray.countryArray.map((country) => {
                return <option value={country}>{country}</option>;
              })}
            </NativeSelect>
          </FormControl>
          <div className={classes.regionOuterContainer}>
            <div className={classes.logoutContainer}>
              <Button
                type="submit"
                className={classes.updateButton}
                disabled={
                  !(
                    locationValid.cityArea &&
                    locationValid.city &&
                    locationValid.region &&
                    locationValid.country
                  )
                }
              >
                Update
              </Button>
              <Button
                className={classes.logoutButton}
                onClick={async (e) => {
                  e.preventDefault();
                  await firebase.auth().signOut();
                  history.push("/home");
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </ValidatorForm>
      </ThemeProvider>
    </div>
  ) : null;
}
