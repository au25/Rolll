import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import BusinessLogin from "./businessLogin";
import { Link } from "react-router-dom";
import Navigation from "../landingPageNavigation";

const useStyles = makeStyles({});

export default function() {
  const classes = useStyles();
  return (
    <div>
      <Navigation />
      <div>
        <BusinessLogin />
      </div>
    </div>
  );
}
