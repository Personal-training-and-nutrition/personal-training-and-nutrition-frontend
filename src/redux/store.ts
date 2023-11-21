import { configureStore } from '@reduxjs/toolkit';
import landingReducer from './slices/landingPageSlice.ts';
import currentClientReducer from './slices/clientSlice.ts';
import modalReducer from './slices/modalsSlice.ts';
import userReducer from './slices/userSlice.ts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { loginMiddleware, refreshMiddleware } from './middleware/tokensStorage.ts';
import { userApi } from './services/userApi.ts';
import { combinedApi } from './services/combinedApi.ts';
import {clientsApi} from "./services/clientsApi.ts";
import {mailApi} from './services/mailApi.ts';


export const store = configureStore({
  reducer: {
    [combinedApi.reducerPath]: combinedApi.reducer,
    [userApi.reducerPath]: combinedApi.reducer,
    [clientsApi.reducerPath]: combinedApi.reducer,
    [mailApi.reducerPath]: mailApi.reducer,
    landing: landingReducer,
    user: userReducer,
    currentClient: currentClientReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([combinedApi.middleware, loginMiddleware.middleware, refreshMiddleware.middleware, mailApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
