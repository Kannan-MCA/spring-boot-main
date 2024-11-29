import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
const PrivateRoute = () => {
  const { user: { token: authToken } = {} } = useAuth() ?? {};

  return authToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;