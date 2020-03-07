import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./businessLogin";
import { Link } from "react-router-dom";

const useStyles = makeStyles({});

export default function() {
  const classes = useStyles();
  return (
    <div>
      This is the business info page.
      <br />
      <br />
      <div>
        <Login />
      </div>
      <br />
      <Link to="/registerBusiness">
        <button>Register</button>
      </Link>
    </div>
  );
}
