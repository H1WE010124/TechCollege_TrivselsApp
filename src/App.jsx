import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from "@mui/material"; 
import { lightGreen } from "@mui/material/colors";


const themeLight = createTheme({
  palette: {
    primary: {
      main: lightGreen[400],
    }
  },
  typography: {
    fontFamily: 'sans-serif',
    fontWeight: 400,
  },
})

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: '#ffffff'
    }
  }
});

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState(true);

  return (
    //wrapping everything in ThemeProvider component so it affects everything and passing prop called theme and set it ecqual to which theme we want to provode to our app
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight((prev) => !prev)}
      variant="contained">Theme</Button>
      {/* <Button onClick={() => console.log('you clicked me')}
      variant="contained">Theme</Button> */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </ThemeProvider>
  );
}

export default App;
