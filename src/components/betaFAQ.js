import React, { useContext, useEffect } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  intro_container: {
    margin: "0 0 15px 0",
  },
  intro_text: {
    fontFamily: "CoreSans, sans-serif",
    margin: "25px 0 0 0",
    fontSize: "15px",
    color: "#000000d1"
  },
  questions_text: {
    margin: "25px 0 0 0",
    fontFamily: "CoreSans, sans-serif",
  },
  faq_outerContainer: {
    width: "70%",
    maxWidth: "415px",
    [theme.breakpoints.down(600)]: {
      margin: "0 0 80px 0",
    },
  },
  accordion_container: {
    margin: "25px 0 0 0",
  },
  logo_image: {
    width: "50px",
    margin: "0px 0 5px 0",
    backgroundColor: "white",
    borderRadius: "50px",
  },
  logoImg_container: {
    margin: "70px 0 0 0",
    display: "flex",
    justifyContent: "center",
  },
  betaVersion_text: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "CoreSans, sans-serif",
    fontSize: "13px",
  },
  copyright_text: {
    margin: "0 0 30px 0",
    fontSize: "13px",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiExpansionPanel: {
      root: {
        position: "unset",
        margin: "0 0 3px 0",
        "&$expanded": {
          borderRadius: "15px",
        },
      },
    },
    MuiExpansionPanelSummary: {
      content: {
        padding: "0 45px 0 0",
      },
      root: {
        minHeight: "30px",
        "&$expanded": {
          // height: "48px",
          minHeight: "48px",
        },
      },
    },
    MuiPaper: {
      root: {
        boxShadow: "transparent",
        // backgroundColor: "transparent",
      },
      elevation1: {
        boxShadow: "none",
      },
    },
    MuiTypography: {
      body1: {
        fontSize: "14px",
        lineHeight: "18px",
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        margin: "0 15px 15px",
        padding: "15px 15px 0px",
      },
    },
    MuiCollapse: {
      wrapperInner: {
        backgroundColor: "#e2e2e2",
        // borderRadius: "0 0 15px 15px",
      },
    },
  },
});

export default function () {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.faq_outerContainer}>
        <div className={classes.logoImg_container}>
          <img className={classes.logo_image} src="img/logo_96x96_ver1.png" />
        </div>
        <div className={classes.intro_container}>
          <div className={classes.betaVersion_text}>1.0.0 beta</div>
          <div className={classes.intro_text}>
            Rolll is meant to create a fun interaction with your local beverage
            shops.
          </div>
        </div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Is it free?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Yes.</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              How do I use it?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              1. Sign up <br />
              <br />
              2. Choose the shop you want to go to
              <br />
              <br />
              3. Let the cashier know. Open gift and show the prize to cashier.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              The sign-up form does not have my location?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.heading}>
              We are currently only supporting Vancouver BC. If you want to use
              our services, please send a brief email with your location to
              support@rolll.app.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div className={classes.copyright_text}> &copy; 2020 Rolll App</div>
    </ThemeProvider>
  );
}
