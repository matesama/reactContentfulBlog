import { Navigate, Outlet} from 'react-router-dom';


const PublicRoute = () => {
  const isAuthenticated = sessionStorage.getItem('token');
  return isAuthenticated ? <Navigate to='/' /> : <Outlet />
}

export default PublicRoute;
