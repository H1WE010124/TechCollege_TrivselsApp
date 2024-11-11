import React from "react";
import WifiOffIcon from "@mui/icons-material/WifiOff";

export const OfflinePage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "rgba(46, 125, 50, 0.4)", 
      color: "#2e7d32", 
      textAlign: "center",
    }}
  >
    <WifiOffIcon style={{ fontSize: "4rem", color: "#2e7d32" }} />
    <h1 style={{ color: "#2e7d32", padding: "20px" }}>
      Du er i øjeblikket offline
    </h1>
    <p style={{ color: "#2e7d32" }}>Tjek venligst din internetforbindelse og prøv igen.</p>
  </div>
);

