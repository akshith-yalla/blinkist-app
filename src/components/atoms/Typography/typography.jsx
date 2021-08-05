import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

const getMappedVariant = (variant) => {
  switch (variant) {
    case "header":
      return "h6";
    case "title":
      return "subtitle1";
    case "subtitle":
      return "subtitle2";
    default:
      return "body1";
  }
};

const TypographyComponent = (props) =>{ 
  const { variant, children, color } = props;

  return(
  <Typography variant={getMappedVariant(variant)} noWrap>
    {children}
  </Typography>
);};

export default TypographyComponent;
