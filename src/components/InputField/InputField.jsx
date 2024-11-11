import TextField from "@mui/material/TextField";

export const InputField = ({ placeholder, callback, type, label, value }) => {
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
