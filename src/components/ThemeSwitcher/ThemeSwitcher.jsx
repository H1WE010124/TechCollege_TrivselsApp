import { Button } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Button onClick={toggleTheme} style={{ minWidth: auto }}>
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </Button>
  );
};
