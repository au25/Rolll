import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({});

const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "green"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "green"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "red"
        },
        "&:hover fieldset": {
          borderColor: "yellow"
        },
        "&.Mui-focused fieldset": {
          borderColor: "green"
        }
      }
    }
  })(TextField);

export default function() {
  const classes = useStyles();
  return (
    <div>
      <div>Welcome back!</div>
      <form className={classes.signupFormContainer} noValidate>
        <CssTextField label="Email" />
        <br />
        <CssTextField type="password" label="Password" />
        <br />
        <br />
        <Button variant="contained" >
          LOG IN
        </Button>
      </form>
    </div>
  );
}
