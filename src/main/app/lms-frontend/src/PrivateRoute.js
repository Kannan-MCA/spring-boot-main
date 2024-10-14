import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
let token = sessionStorage.getItem('token');

const PrivateRoutes = () => {
 
  let auth = { 'token': token }
  return (
    auth.token !=null? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRoutes