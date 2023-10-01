import { configureStore } from '@reduxjs/toolkit';
import landing from './slices/LandingPageSlice.ts';
import userReducer from './slices/userSlice.ts';
import { useDispatch } from 'react-redux';
import { loginMiddleware, refreshMiddleware } from './middleware/tokensStorage.ts';
import { userApi } from './services/userApi.ts';
import { combinedApi } from './services/combinedApi.ts';

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
