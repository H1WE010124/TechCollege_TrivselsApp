import { createContext, useState, useEffect } from "react";
import { generateUUID } from "../utils/generateUUID";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  //holder styr på brugerens access token
  const [accessToken, setAccessToken] = useState(null);

  //funktion der gemmer access token
  const saveAccessToken = (token) => {
    setAccessToken(token);
    localStorage.setItem("accessToken", JSON.stringify(token));
  };

  //funktion der checker om access token allerede er i localstorage
  const checkAccessToken = () => {
    const token = localStorage.getItem("accessToken");
    if (token !== null) {
      console.log("Access token er allerede oprettet i localstorage");
      return true;
    } else {
      console.log("Access token er ikke oprettet i localstorage");
      return false;
    }
  };

  //funktion der indlæser access token fra localstorage
  const loadAccessToken = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  };

  //funktionen kaldes kun 1 gang, når komponentet mountes
  useEffect(() => {
    if (checkAccessToken() === true) {
      loadAccessToken();
    } else {
      let token = generateUUID();
      saveAccessToken(token);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ accessToken, saveAccessToken, checkAccessToken }}
    >
      {children}
    </UserContext.Provider>
  );
}
