import { Navigate, Outlet} from 'react-router-dom';


const PrivateRoute = () => {
  const isAuthenticated = sessionStorage.getItem('token');
  return !isAuthenticated ? <Navigate to='/login' /> : <Outlet />
}

export default PrivateRoute;
