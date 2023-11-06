import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useEffect } from 'react';
import { useLazyGetMeQuery } from '../../redux/services/userApi';
import { setUserId } from '../../redux/slices/userSlice';

export default function RequireUser() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const id = useAppSelector((store) => store.user.id);
  const [getMe, { isSuccess, isError }] = useLazyGetMeQuery();

  const refreshToken = window.localStorage.getItem('refreshToken');
  if (!refreshToken) window.localStorage.removeItem('accessToken');

  useEffect(() => {
    if (!id && refreshToken) {
      getMe()
        .unwrap()
        .then((res) => {
          dispatch(setUserId(res.id));
        });
    }
  }, []);

  if (isSuccess || id) return <Outlet />;
  if (isError || !refreshToken) return <Navigate to="/" state={{ from: location, isUnAuth: true }} replace />;

  return <div>loading...</div>;
}
