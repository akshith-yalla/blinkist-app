import React from "react";
import PropTypes from "prop-types";

import TextField from '@material-ui/core/TextField';

const InputFieldComponent = (props) => { 
    const { label,value,required,onChange,onBlur,type,error,errorMessage } = props;
    return(
        <TextField
            fullWidth
            label={label}
            defaultValue={value}
            required={required}
            onChange={onChange}
            error={error}
            helperText={errorMessage}
            type={type}
            onBlur={onBlur}
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            }}
        />
    );
};

InputFieldComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "date",
    "time",
    "datetime-local",
  ]),
  onBlur: PropTypes.func,
};

InputFieldComponent.defaultProps = {
  value: "",
  required: false,
  error: false,
  errorMessage: "",
  type: "text",
};

export default InputFieldComponent;
