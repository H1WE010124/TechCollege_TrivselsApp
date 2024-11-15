import { Button } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";

export const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      style={{ minWidth: "auto", position: "absolute", right: "5%", top: "2%" }}
    >
      {mode === "light" ? (
        <DarkModeIcon sx={{ width: "50px", height: "50px" }} />
      ) : (
        <LightModeIcon sx={{ width: "50px", height: "50px" }} />
      )}
    </Button>
  );
};
