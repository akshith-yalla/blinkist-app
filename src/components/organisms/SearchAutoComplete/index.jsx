import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const  SearchAutoComplete = (props) => {
    const {inputData} = props
    return (
        <Autocomplete
          id="combo-box-demo"
          options={inputData}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
      );
};

export default SearchAutoComplete;
