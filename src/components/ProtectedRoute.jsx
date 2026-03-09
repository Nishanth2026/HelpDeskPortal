import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useIsAuthenticated } from '@azure/msal-react';

/**
 * Wraps content that requires authentication.
 * Redirects unauthenticated users to /login, preserving the intended URL in state.
 */
function ProtectedRoute({ children }) {
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
