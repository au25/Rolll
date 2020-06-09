import React, { useEffect, useContext, useState } from "react";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { useHistory } from "react-router-dom";
import BusinessNavigation from "./businessNavigation";
import BusinessAddShopComponent from "./businessAddShopPage";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import Button from "@material-ui/core/Button";
import { CSSTransition } from "react-transition-group";
import "./businessManageShopPage.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  manageShop_text: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.7)",
    width: "80%",
    margin: "50px 0 20px 0",
  },
  formContainer: {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  countryContainer: {
    margin: "0 0 28px 0",
    width: "100%"
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
    letterSpacing: "1px"
  },
  deleteShopContainer: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0 0 28px 0",
  },
  deleteShopButton: {
    fontSize: "12px",
    height: "40px",
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
    height: "50px"
  },
  addShop_container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  }
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
          backgroundColor:
            "#4caf50",
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
    MuiExpansionPanel: {
      root: {
        width: "80%",
        position: "none",
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
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
      },
      content: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: "16px",
        fontFamily: "CoreSans, sans-serif",
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

/**
 * Form outside of export function so input doesnt unfocus after single character change
 */
const FormComponent = ({
  classes,
  setParentShopInfo,
  parentShopInfo,
  handleShopProfileUpdate,
  handleRemoveShop,
  countryErrorState,
  regionErrorState,
  validateCountryRegion,
}) => {
  return parentShopInfo.shop
    ? parentShopInfo.shop.map((shop, index) => (
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            {shop.shop_name}
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
                onChange={(e) =>
                  handleShopProfileChange(
                    setParentShopInfo,
                    parentShopInfo,
                    index,
                    e
                  )
                }
              />
              <div className={classes.countryContainer}>
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
              </div>
              <div className={classes.regionContainer}>
                <RegionDropdown
                  required
                  disableWhenEmpty={true}
                  country={shop.shop_country}
                  value={shop.shop_region}
                  disableWhenEmpty={true}
                  onChange={(region) =>
                    handleRegionChange(
                      setParentShopInfo,
                      parentShopInfo,
                      index,
                      region
                    )
                  }
                  classes="manageShop_selectRegion add_businessManageShop_regionCss"
                />
              </div>
              <div>
                {regionErrorState && shop.shop_region == "" ? (
                  <div className={classes.regionErrorMessage}>
                    Select a region
                  </div>
                ) : null}
              </div>
              <Button
                type="submit"
                className={classes.updateButton}
                onClick={() => validateCountryRegion(index)}
              >
                Update
              </Button>
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

const handleCountryChange = (
  setParentShopInfo,
  parentShopInfo,
  index,
  country
) => {
  console.log("country:" + country);
  let shopInfoCopy = parentShopInfo.shop;
  shopInfoCopy[index].shop_country = country;
  setParentShopInfo({
    ...parentShopInfo,
    shop: shopInfoCopy,
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

  const db = firebase.firestore();

  const [countryErrorState, setCountryErrorState] = useState(null);
  const [regionErrorState, setRegionErrorState] = useState(null);
  const [newParentShopInfo, setNewParentShopInfo] = useState();
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
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
  );
}
