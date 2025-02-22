import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext';

const PrivateRoute = () => {
  const { user, isAuthenticated, logout } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute