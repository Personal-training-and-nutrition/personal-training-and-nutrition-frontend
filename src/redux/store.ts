import { configureStore } from '@reduxjs/toolkit';
import landingReducer from './slices/landingPageSlice';
import currentClientReducer from './slices/clientSlice';
import modalReducer from './slices/modalsSlice';
import userReducer from './slices/userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { loginMiddleware, refreshMiddleware } from './middleware/tokensStorage';
import { userApi } from './services/userApi';
import { combinedApi } from './services/combinedApi';
import {clientsApi} from "./services/clientsApi";

export const store = configureStore({
  reducer: {
    [combinedApi.reducerPath]: combinedApi.reducer,
    [userApi.reducerPath]: combinedApi.reducer,
    [clientsApi.reducerPath]: combinedApi.reducer,
    landing: landingReducer,
    user: userReducer,
    currentClient: currentClientReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([combinedApi.middleware, loginMiddleware.middleware, refreshMiddleware.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
