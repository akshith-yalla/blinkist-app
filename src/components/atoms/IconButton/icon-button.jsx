import React from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";

const IconButtonComponent = (props) => {
    const { icon, disabled, onClick } = props;
    return(
        <IconButton color="primary" disabled={disabled} onClick={onClick}>
            {icon}
        </IconButton>
    );
};

IconButtonComponent.propTypes = {
  icon: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButtonComponent.defaultProps = {
  disable: false,
};

export default IconButtonComponent;
