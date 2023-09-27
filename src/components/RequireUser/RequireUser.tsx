import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function RequireUser() {
  const refreshToken = window.localStorage.getItem('refreshToken');
  if (!refreshToken) window.localStorage.removeItem('accessToken');
  const location = useLocation();

  return refreshToken ? <Outlet /> : <Navigate to="/login/" state={{ from: location }} replace />;
}
