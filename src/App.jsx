import { useContext } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import { green, lightGreen, purple } from "@mui/material/colors";
import RouterComponent from "./router/Router";
import routes from "./router/routes";
import { ThemeContext } from "./context/ThemeContext";

const themeLight = createTheme({
  palette: {
    primary: {
      main: lightGreen[500],
    },
    background: {
      default: "#ECFFED",
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
    fontFamily: "sans-serif",
    fontWeight: 400,
  },
});

const themeDark = createTheme({
  palette: {
    primary: {
      main: green[100],
    },
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
    action: {
      disabled: "#8a8c7d",
    },
    button: {
      backgroundColor: green[300],
    },
  },
});

function App() {
  const { mode } = useContext(ThemeContext);

  return (
    <>
      {/* wrapping everything in ThemeProvider component so it affects everything and passing prop called theme and set it ecqual to which theme we want to provode to our app */}
      <ThemeProvider theme={mode === "light" ? themeLight : themeDark}>
        {/* CssBaseline inside ThemeProvider enables dark mode background */}
        <CssBaseline enableColorScheme />
        <RouterComponent routeArray={routes} />
      </ThemeProvider>
    </>
  );
}

export default App;
