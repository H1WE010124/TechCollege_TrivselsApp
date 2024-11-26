import React, { useContext } from "react";
import { useState } from "react";
import { Button, TextField, Container, Box, Typography } from "@mui/material";
import s from "./AdminLoginPage.module.scss";
import { supabase } from "../../lib/supabaseClient";
import { AdminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";

export const AdminLoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { setAdminUser } = useContext(AdminContext);
  //const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!user || !password) {
      setError("Udfyld både brugernavn og adgangskode.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: user,
        password: password,
      });

      if (error) {
        throw new Error("Login mislykkedes. Prøv igen.");
      }

      if (data) {
        setAdminUser(data);
        navigate("/admin");
      } else {
        //const errorData = await response.json();
        setError("Login mislykkedes. Prøv igen.");
      }
    } catch (err) {
      setError("Der opstod en fejl. Prøv igen senere.");
    }
  };

  return (
    <Container maxWidth="m" className={s.container}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={3}
        style={{ marginTop: "50px" }}
      >
        <Typography
          variant="h2"
          style={{
            color: "#2e7d32",
            textAlign: "center",
            fontFamily: "Segoe UI, sans-serif",
            fontSize: "40px",
            fontWeight: 600,
          }}
        >
          Log ind som&nbsp;
          <span
            style={{
              fontFamily: "Segoe UI, sans-serif",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "40px",
            }}
          >
            admin
          </span>
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Email"
            id="outlined-required"
            variant="outlined"
            margin="normal"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            sx={{
              width: "240px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#34C759",
                },
                "&:hover fieldset": {
                  borderColor: "#34C759",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#34C759",
                },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: "240px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#34C759",
                },
                "&:hover fieldset": {
                  borderColor: "#34C759",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#34C759",
                },
              },
            }}
          />
          {error && (
            <Typography color="error" variant="body2" style={{ marginTop: 8 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "#2e7d32",
              color: "white",
              marginTop: "16px",
              width: "100px",
            }}
            sx={{
              "&:hover": {
                backgroundColor: "#1b4e35",
              },
            }}
          >
            LOG IND
          </Button>
        </form>
      </Box>
    </Container>
  );
};
