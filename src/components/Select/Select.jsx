import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import style from "./Select.module.scss";

export const CustomSelect = ({ OptionsArray, callback, defaultText }) => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    callback(value);
  };

  return (
    <FormControl fullWidth className={style.select}>
      <Select
        className={style.celector}
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => (selected ? selected : defaultText)}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #34C759',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#34C759',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#34C759',
          },
        }}

      >
        {OptionsArray.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
