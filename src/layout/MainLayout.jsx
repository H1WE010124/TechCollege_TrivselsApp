import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ThemeSwitcher } from "../components/ThemeSwitcher/ThemeSwitcher";
import { Grid2, Box } from "@mui/material";
import { AppButton } from "../components/AppButton/AppButton";
import { BackButton } from "../components/BackButton/BackButton";
import { useEffect } from "react";

export const MainLayout = () => {
  const location = useLocation();

  console.log(location.pathname);

  useEffect(() => {
    document.title =
      "TechPulse" +
      (location.pathname !== "/" ? " - " + location.pathname.slice(1) : "");
  }, [location]);
  return (
    <>
      <Grid2 gridTemplateRows={"1fr 10fr"} display="grid" height="95vh">
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {location.pathname === "/login" || location.pathname === "/admin" ? (
            <BackButton page=""></BackButton>
          ) : (
            <NavLink to="/login">
              <AppButton buttonText={"Admin"}></AppButton>
            </NavLink>
          )}
          <ThemeSwitcher />
        </Box>
        <Outlet />
      </Grid2>
    </>
  );
};
