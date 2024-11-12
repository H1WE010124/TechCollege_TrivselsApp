import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material";
import { green, lightGreen, purple } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { QuestionStepper } from "./components/QuestionStepper/QuestionStepper";
import { Question } from "./components/Question/Question";
import { Clock } from "./components/Clock/Clock";
import RouterComponent from "./router/Router";
import routes from "./router/routes";

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
  const [light, setLight] = useState(true);

  return (
    <>
      {/* wrapping everything in ThemeProvider component so it affects everything and passing prop called theme and set it ecqual to which theme we want to provode to our app */}
      <ThemeProvider theme={light ? themeLight : themeDark}>
        {/* CssBaseline inside ThemeProvider enables dark mode background */}
        <CssBaseline enableColorScheme />
        <RouterComponent routeArray={routes} />
      </ThemeProvider>
    </>
  );
}

export default App;
