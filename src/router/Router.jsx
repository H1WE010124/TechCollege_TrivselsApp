// Router.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const RouterComponent = ({ routeArray }) => {
  return (
    <Router>
      <Routes>
        {routeArray.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />} 
          />
        ))}
      </Routes>
    </Router>
  );
};

export default RouterComponent;
