// import { createContext, useState, useEffect } from "react";
// import { generateUUID } from "../utils/generateUUID";

// export const UserContext = createContext();

// export function UserContextProvider({ children }) {
//   //holder styr på brugerens access token
//   const [accessToken, setAccessToken] = useState(null);

//   //funktion der gemmer access token
//   const saveAccessToken = (token) => {
//     setAccessToken(token);
//     localStorage.setItem("accessToken", JSON.stringify(token));
//   };

//   //funktion der checker om access token allerede er i localstorage
//   const checkAccessToken = () => {
//     const token = localStorage.getItem("accessToken");
//     if (token !== null) {
//       console.log("Access token er allerede oprettet i localstorage");
//       return true;
//     } else {
//       console.log("Access token er ikke oprettet i localstorage");
//       return false;
//     }
//   };

//   //funktion der indlæser access token fra localstorage
//   const loadAccessToken = () => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       setAccessToken(JSON.parse(token));
//     }
//   };

//   //funktionen kaldes kun 1 gang, når komponentet mountes
//   useEffect(() => {
//     if (checkAccessToken() === true) {
//       loadAccessToken();
//     } else {
//       let token = generateUUID();
//       saveAccessToken(token);
//     }
//   }, []);

//   return (
//     <UserContext.Provider
//       value={{ accessToken, saveAccessToken, checkAccessToken }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// }
import { createContext, useState, useEffect } from "react";
import { generateUUID } from "../utils/generateUUID";
import Cookies from "js-cookie";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  const saveAccessToken = (token) => {
    setAccessToken(token);
    Cookies.set("accessToken", token, { expires: 0.5 }); 
    console.log("Access token saved in cookie:", token); 
  };

  const checkAccessToken = () => {
    const token = Cookies.get("accessToken");
    if (token) {
      console.log("Access token is already created in cookies");
      return true;
    } else {
      console.log("Access token is not created in cookies");
      return false;
    }
  };

  const loadAccessToken = () => {
    const token = Cookies.get("accessToken");
    if (token) {
      setAccessToken(token);
      console.log("Loaded access token from cookie:", token); 
    }
  };

  useEffect(() => {
    console.log("useEffect is running"); 

    if (checkAccessToken()) {
      loadAccessToken();
    } else {
      const token = generateUUID();
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