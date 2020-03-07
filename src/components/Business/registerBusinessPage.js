import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BusinessSignupForm from "./businessSignupForm";

const useStyles = makeStyles({});

export default function() {
  const classes = useStyles();
  return (
    <div>
      <BusinessSignupForm />
    </div>
  );
}
