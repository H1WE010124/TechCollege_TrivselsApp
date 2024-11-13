// Router.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
const RouterComponent = ({ routeArray }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routeArray.map((route, index) => (
            <Route
              key={index}
              index={route.index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;
