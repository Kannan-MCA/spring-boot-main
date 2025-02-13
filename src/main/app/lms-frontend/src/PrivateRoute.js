import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { whitelistedRoutes } from './whitelistedRoutes';

const PrivateRoute = ({ component: Component, path, requiredRole, ...rest }) => {
  const { isAuthenticated, role } = useAuth();

  if (whitelistedRoutes.includes(path)) {
    return <Route path={path} element={<Component />} {...rest} />;
  }

  return (
    <Route
      path={path}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/" />
        )
      }
      {...rest}
    />
  );
};

export default PrivateRoute;
