import React from "react";
import Button from "@material-ui/core/Button";

const ButtonComponent = (props) => {
  const   {onClick, title} = props;

  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {title}
    </Button>
  );
};

export default ButtonComponent;
