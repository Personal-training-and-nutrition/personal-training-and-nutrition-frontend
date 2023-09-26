import { configureStore } from '@reduxjs/toolkit';
import landing from './slices/LandingPageSlice.ts';
import userReducer from './slices/userSlice.ts';
import { useDispatch } from 'react-redux';
import { combinedApi } from './api/combinedApi.ts';

export const store = configureStore({
  reducer: {
    [combinedApi.reducerPath]: combinedApi.reducer,
    landing,
    userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([combinedApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
