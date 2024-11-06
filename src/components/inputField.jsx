import TextField from "@mui/material/TextField";

export const inputField = ({ placeholder, callback, type, label, value }) => {
  return (
    <TextField
      placeholder={placeholder}
      onChange={(event) => {
        callback(event.target.value);
      }}
      type={type}
      label={label}
      value={value}
    />
  );
};
