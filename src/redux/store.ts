import { configureStore } from '@reduxjs/toolkit';
import landing from './slices/LandingPageSlice.ts';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    landing,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
