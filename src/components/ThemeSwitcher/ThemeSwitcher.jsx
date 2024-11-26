import { Button } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";

export const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>
      {mode === "light" ? (
        <DarkModeIcon sx={{ width: "32px", height: "32px" }} />
      ) : (
        <LightModeIcon sx={{ width: "32px", height: "32px" }} />
      )}
    </Button>
  );
};
