import { useLazyGetMeQuery } from '../redux/services/userApi';
import { setIsLoggedIn, setUserId } from '../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

const useIsAuth = () => {
  const dispatch = useAppDispatch();
  const [getMe] = useLazyGetMeQuery();
  const { id, isLoggedIn } = useAppSelector((state) => state.user);

  const refreshToken = window.localStorage.getItem('refreshToken');
  if (!refreshToken) window.localStorage.removeItem('accessToken');

  function checkIsAuth() {
    if (!id && refreshToken) {
      getMe()
        .unwrap()
        .then((res) => {
          dispatch(setUserId(res.id));
          dispatch(setIsLoggedIn(true));
        });
    }
  }

  return { isLoggedIn, checkIsAuth };
};

export default useIsAuth;
