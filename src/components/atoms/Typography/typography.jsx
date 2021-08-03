import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

const getMappedVariant = (variant) => {
  switch (variant) {
    case "header":
      return "h4";
    case "title":
      return "subtitle1";
    case "subtitle":
      return "subtitle2";
    default:
      return "body1";
  }
};

const TypographyComponent = (props) =>{ 
  const { variant, children } = props;

  return(
  <Typography variant={getMappedVariant(variant)}>
    {children}
  </Typography>
);};

TypographyComponent.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

TypographyComponent.defaultProps = {
    children: 'body1',
    variant: "body",
};

export default TypographyComponent;
