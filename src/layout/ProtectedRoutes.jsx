import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

export const ProtectedRoutes = ({ protectedRoute }) => {
  const { adminUser } = useContext(AdminContext);

  if (!adminUser) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
