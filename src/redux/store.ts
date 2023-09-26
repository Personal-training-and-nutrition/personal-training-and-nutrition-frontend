import { configureStore } from '@reduxjs/toolkit';
import landing from './slices/LandingPageSlice.ts';
import userReducer from './slices/userSlice.ts';
import { useDispatch } from 'react-redux';
import { combinedApi } from './api/combinedApi.ts';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { authApi } from './api/authApi.ts';
import { userApi } from './api/userApi.ts';

const loginMiddleware = createListenerMiddleware();
const refreshMiddleware = createListenerMiddleware();
loginMiddleware.startListening({
  matcher: authApi.endpoints.login.matchFulfilled,
  effect: ({ payload }) => {
    window.localStorage.setItem('refreshToken', payload.refresh);
    window.localStorage.setItem('accessToken', payload.access);
  },
});
refreshMiddleware.startListening({
  matcher: authApi.endpoints.refresh.matchFulfilled,
  effect: ({ payload }) => {
    console.log('renew attempt', payload.access);
    window.localStorage.setItem('accessToken', payload.access);
  },
});

export const store = configureStore({
  reducer: {
    [combinedApi.reducerPath]: combinedApi.reducer,
    [userApi.reducerPath]: combinedApi.reducer,
    landing,
    userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([combinedApi.middleware, loginMiddleware.middleware, refreshMiddleware.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
