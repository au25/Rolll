import React, { useEffect, useContext, useState } from "react";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessAddShopComponent from "./businessAddShopPage";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import { CSSTransition } from "react-transition-group";
import "./businessManageShopPage.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      height: "100%",
      justifyContent: "center",
    },
  },
  inner_container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "415px",
      height: "600px",
      overflow: "auto",
      backgroundColor: "#e8e8e8",
      borderRadius: "20px",
    },
  },
  manageShop_text: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.7)",
    width: "80%",
    margin: "50px 0 15px 0",
    backgroundColor: "#4a4a4a",
    color: "#fbfcfc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0",
  },
  formContainer: {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "1px solid lightgray",
  },
  countryContainer: {
    margin: "0 0 28px 0",
    width: "100%",
  },
  regionContainer: {
    margin: "0 0 28px 0",
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
  updateButton: {
    width: "50%",
    border: "0",
    height: "50px",
    backgroundColor: "#4caf50 !important",
    borderRadius: "0",
    borderRadius: "4px",
    fontSize: "16px",
    outline: "none",
    color: "white",
    padding: "6px 8px",
    margin: "0 0 15px 0",
    textTransform: "none",
    letterSpacing: "1px",
  },
  deleteShopContainer: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0 0 28px 0",
  },
  deleteShopButton: {
    fontSize: "12px",
    height: "40px",
    color: "rgba(204, 0 ,0)",
    padding: "6px 8px",
  },
  openCloseForm: {
    margin: "28px 0 20px 0",
    fontWeight: "bold",
    backgroundColor: "#4caf50",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "126px",
    height: "50px",
    "&:hover": {
      backgroundColor: "#439a47 !important",
      margin: "28px 0 45px 0",
    },
  },
  addShop_container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    // borderTop: "1px solid rgba(0, 0, 0, 0.2)",
  },
  shopName_text: {
    margin: "0 0 0 10px",
  },
}));

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
          backgroundColor: "#cc0000",
          color: "white",
          padding: "3px 15px 0",
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
    MuiExpansionPanel: {
      root: {
        width: "80%",
        position: "none",
        "&$expanded": {
          margin: "0",
        },
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: "0",
        justifyContent: "center",
        margin: "20px 0 0 0",
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        height: "60px",
        padding: "0",
        borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
        width: "90%",
        margin: "0 auto 7px auto",
        borderRadius: "0 5px 5px 0",
        backgroundColor: "white",
        borderLeft: "4px solid green",
      },
      content: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: "16px",
        fontFamily: "CoreSans, sans-serif",
        // borderLeft: "5px solid green",
        padding: "8px 0px 8px 0",
        margin: "0",
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: "none",
      },
      root: {
        backgroundColor: "none",
      },
    },
  },
});

const db = firebase.firestore();
let countryArray = [];
let regionArray = [];
let cityArray = [];
let cityAreaArray = [];

/**
 * Form outside of export function so input doesnt unfocus after single character change
 */
const FormComponent = ({
  classes,
  setParentShopInfo,
  parentShopInfo,
  handleShopProfileUpdate,
  handleRemoveShop,
}) => {
  return parentShopInfo.shop
    ? parentShopInfo.shop.map((shop, index) => (
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <div className={classes.shopName_text}>{shop.shop_name}</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ValidatorForm
              key={index}
              className={classes.formContainer}
              noValidate
              autoComplete="off"
              onSubmit={handleShopProfileUpdate}
            >
              <TextValidator
                id="filled-basic"
                label="Shop Name"
                variant="filled"
                InputLabelProps={{ shrink: true }}
                value={shop.shop_name}
                validators={["required"]}
                errorMessages={["Shop name is requred"]}
                name="shop_name"
                onChange={(e) =>
                  handleShopProfileChange(
                    setParentShopInfo,
                    parentShopInfo,
                    index,
                    e
                  )
                }
                disabled
              />
              <TextValidator
                id="filled-basic"
                label="Address"
                variant="filled"
                InputLabelProps={{ shrink: true }}
                value={shop.shop_address}
                validators={["required"]}
                errorMessages={["Address is requred"]}
                name="shop_address"
                onChange={(e) =>
                  handleShopProfileChange(
                    setParentShopInfo,
                    parentShopInfo,
                    index,
                    e
                  )
                }
                disabled
              />
              <TextValidator
                id="filled-basic"
                label="Country"
                variant="filled"
                InputLabelProps={{ shrink: true }}
                value={shop.shop_country}
                validators={["required"]}
                errorMessages={["Country is requred"]}
                name="shop_country"
                disabled
              />
              <TextValidator
                id="filled-basic"
                label="Region"
                variant="filled"
                InputLabelProps={{ shrink: true }}
                value={shop.shop_region}
                validators={["required"]}
                errorMessages={["Region is requred"]}
                name="shop_region"
                disabled
              />
              <TextValidator
                id="filled-basic"
                label="City"
                variant="filled"
                InputLabelProps={{ shrink: true }}
                value={shop.shop_city}
                validators={["required"]}
                errorMessages={["City is requred"]}
                name="shop_city"
                disabled
                // onChange={(e) =>
                //   handleShopProfileChange(
                //     setParentShopInfo,
                //     parentShopInfo,
                //     index,
                //     e
                //   )
                // }
              />
              <TextValidator
                id="filled-basic"
                label="Area"
                variant="filled"
                InputLabelProps={{ shrink: true }}
                value={shop.shop_area}
                validators={["required"]}
                errorMessages={["Area is requred"]}
                name="shop_cityArea"
                disabled
              />
              {/* <div className={classes.countryContainer}>
                <CountryDropdown
                  required
                  value={shop.shop_country}
                  onChange={(country) =>
                    handleCountryChange(
                      setParentShopInfo,
                      parentShopInfo,
                      index,
                      country
                    )
                  }
                  whitelist={["CA", "US"]}
                  priorityOptions={["CA", "US"]}
                  classes="manageShop_selectCountry add_businessManageShop_countryCss"
                />
              </div>
              <div>
                {countryErrorState && shop.shop_country == "" ? (
                  <div className={classes.countryErrorMessage}>
                    Select a country
                  </div>
                ) : null}
              </div> */}

              {/* <Button
                type="submit"
                className={classes.updateButton}
                onClick={() => validateCountryRegion(index)}
              >
                Update
              </Button> */}
              <div className={classes.deleteShopContainer}>
                <Button
                  className={classes.deleteShopButton}
                  onClick={(e) => handleRemoveShop(shop, e)}
                >
                  Delete Shop
                </Button>
              </div>
            </ValidatorForm>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))
    : null;
};

const handleRegionChange = (
  setParentShopInfo,
  parentShopInfo,
  index,
  region
) => {
  let shopInfoCopy = parentShopInfo.shop;
  shopInfoCopy[index].shop_region = region;
  setParentShopInfo({
    ...parentShopInfo,
    shop: shopInfoCopy,
  });
};

const handleCountryChange = async (
  e,
  setParentShopInfo,
  parentShopInfo,
  index,
  locationInfo,
  selectDisable,
  locationValid,
  setLocationInfo,
  setSelectDisable,
  setLocationValid
) => {
  let shopInfoCopy = parentShopInfo.shop;
  shopInfoCopy[index].shop_country = e.target.value;
  setParentShopInfo({
    ...parentShopInfo,
    shop: shopInfoCopy,
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

/**
 * Handler for shop information inputs
 * @param {*} index Parameter to indicate which index in array to update
 */
const handleShopProfileChange = (
  setParentShopInfo,
  parentShopInfo,
  index,
  e
) => {
  e.preventDefault();
  const { name, value } = e.target;

  let shopInfoCopy = parentShopInfo.shop;
  shopInfoCopy[index][name] = value;
  setParentShopInfo({
    ...parentShopInfo,
    shop: shopInfoCopy,
  });
};

export default function ({ userDbInfo, parentShopInfo, setParentShopInfo }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const [countryErrorState, setCountryErrorState] = useState(null);
  const [regionErrorState, setRegionErrorState] = useState(null);
  const [newParentShopInfo, setNewParentShopInfo] = useState();
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

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

  useEffect(() => {
    const fetchCountryInfo = async () => {
      // console.log("this is the profile page");
      const countryCollection = await db.collection("country").get();
      countryCollection.docs.map((country) => countryArray.push(country.id));
      console.log("this is userDB data");
      console.log(userDbInfo.data());
      // let cityCollection = await db
      // .collection("country")
      // .doc(userDbInfo.data().user_country)
      // .collection("region")
      // .doc(userDbInfo.data().user_region)
      // .collection("city")
      // .get();
      // cityCollection.docs.map((city) => cityArray.push(city.id));
      //   setLocationInfo({
      //     ...locationInfo,
      //     countryArray: countryArray,
      //     regionArray: regionArray,
      //     cityArray: cityArray,
      //     cityAreaArray: cityAreaArray,
      //   });
    };
    fetchCountryInfo();
    setNewParentShopInfo(parentShopInfo);
  }, []);

  /**
   * Updates shop info on the DB
   */
  function handleShopProfileUpdate(e) {
    e.preventDefault();

    db.collection("businessUser")
      .doc(userDbInfo.id)
      .set({
        ...parentShopInfo,
        shop: parentShopInfo.shop,
      });
  }

  /**
   * Handles removing a shop
   * @param {*} shop
   */
  function handleRemoveShop(shop, e) {
    e.preventDefault();

    const filterRemoveShop = parentShopInfo.shop.filter((shopInfoShop) => {
      return shopInfoShop.shop_address != shop.shop_address;
    });

    db.collection("businessUser")
      .doc(userDbInfo.id)
      .set({
        ...parentShopInfo,
        shop: filterRemoveShop,
      });

    setParentShopInfo({
      ...parentShopInfo,
      shop: filterRemoveShop,
    });
  }

  const validateCountryRegion = (index) => {
    if (newParentShopInfo.shop[index].shop_country == "") {
      console.log("country is empty");
      setCountryErrorState(true);
    } else {
      setCountryErrorState(false);
    }

    if (newParentShopInfo.shop[index].shop_region == "") {
      setRegionErrorState(true);
    } else {
      setRegionErrorState(false);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.inner_container}>
        <div className={classes.manageShop_text}>Manage Shop</div>
        {/* Maps a user's shop info */}
        <ThemeProvider theme={theme}>
          {newParentShopInfo && newParentShopInfo.shop ? (
            <FormComponent
              parentShopInfo={newParentShopInfo}
              handleShopProfileChange={handleShopProfileChange}
              handleShopProfileUpdate={handleShopProfileUpdate}
              handleRemoveShop={handleRemoveShop}
              setParentShopInfo={setNewParentShopInfo}
              countryErrorState={countryErrorState}
              regionErrorState={regionErrorState}
              classes={classes}
              validateCountryRegion={validateCountryRegion}
              locationInfo={locationInfo}
              setLocationInfo={setLocationInfo}
              selectDisable={selectDisable}
              setSelectDisable={setSelectDisable}
              locationValid={locationValid}
              setLocationValid={setLocationValid}
            />
          ) : null}
          <div className={classes.addShop_container}>
            {showMessage ? (
              <Button
                className={classes.openCloseForm}
                onClick={() => setShowMessage(false)}
              >
                Close
              </Button>
            ) : (
              <Button
                className={classes.openCloseForm}
                onClick={() => setShowMessage(true)}
              >
                Add Shop
              </Button>
            )}
            <CSSTransition
              in={showMessage}
              timeout={200}
              classNames="alert"
              unmountOnExit
              onEnter={() => setShowButton(false)}
              onExited={() => setShowButton(true)}
            >
              <div>
                <BusinessAddShopComponent
                  userDbInfo={userDbInfo}
                  parentShopInfo={parentShopInfo}
                  setParentShopInfo={setParentShopInfo}
                />
              </div>
            </CSSTransition>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}
