import { Box, Typography, Button, TextField } from "@mui/material";
import s from "./Login.module.scss";
import { usePost } from "../../hooks/usePost";
import { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { data, isLoading, error } = usePost("http://localhost:5173/");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    // tjek brugernavn og password, hvis fejler så setErrorMessage.
    if (response?.error) {
      setErrorMessage("Brugernavn eller Adgangkode er forkert");
    }
  };

  return (
    <Box variant="section" className={s.loginStyle}>
      <Typography variant="h2">
        Log ind som <span>admin</span>
      </Typography>
      <Box
        component="form"
        className={s.container}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="username"
          label="Brugernavn"
          variant="outlined"
          size="medium"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={s.inputField}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#34C759",
              },
              "&:hover fieldset": {
                borderColor: "#2E7D32",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#34C759",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#2E7D32",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#2E7D32",
            },
          }}
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={s.inputField}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#34C759",
              },
              "&:hover fieldset": {
                borderColor: "#2E7D32",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#34C759",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#2E7D32",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#2E7D32",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          className={s.signInButton}
          sx={{
            marginTop: 2,
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          LOG IND
        </Button>

        {errorMessage && (
          <Typography color="error" sx={{ marginTop: 2 }}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
