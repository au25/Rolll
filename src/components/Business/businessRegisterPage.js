import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BusinessSignupForm from "./businessSignupForm";
import BusinessSignupForm2 from "./businessSignUpForm2";

const useStyles = makeStyles({});

export default function () {
  const classes = useStyles();
  return (
    <div>
      {/* <BusinessSignupForm /> */}
      <BusinessSignupForm2 />
    </div>
  );
}
