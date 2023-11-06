import { createListenerMiddleware } from '@reduxjs/toolkit';
import { authApi } from '../services/authApi';

export const loginMiddleware = createListenerMiddleware();
export const refreshMiddleware = createListenerMiddleware();
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
