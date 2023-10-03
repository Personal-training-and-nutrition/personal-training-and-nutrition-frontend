import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { useEffect } from 'react';

export default function RequireUser() {
  const location = useLocation();
  const id = useAppSelector((store) => store.user.id);

  useEffect(() => {
    console.log(id);
  }, []);

  const refreshToken = window.localStorage.getItem('refreshToken');
  if (!refreshToken) window.localStorage.removeItem('accessToken');

  const allowed = Boolean(id && refreshToken);

  return allowed ? <Outlet /> : <Navigate to="/login/" state={{ from: location }} replace />;
}
