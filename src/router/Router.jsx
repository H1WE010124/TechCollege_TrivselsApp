// Router.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { ProtectedRoutes } from '../layout/ProtectedRoutes';
import routeArray from './routes';

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          {routeArray.map((route, index) =>
            route.protected ? (
              <Route key={index} path={route.path} element={<ProtectedRoutes protectedRoute={true} />}>
                <Route path={route.path} element={<route.component />} />
              </Route>
            ) : (
              <Route key={index} index={route.index} path={route.path} element={<route.component />} />
            )
          )}
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;
