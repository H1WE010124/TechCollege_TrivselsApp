import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({ protectedRoute }) => {
  const isUserLoggedIn = false; 

  if (protectedRoute && !isUserLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
