import { IRegisterUser, ILoginUser, IRefreshToken, IAuthO } from '../types/auth';
import { TResponse, TTokensResponse, TRefreshResponse } from '../types/common';
import { combinedApi } from './combinedApi';

export const authApi = combinedApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<TResponse, IRegisterUser>({
      query(data) {
        return {
          url: 'users/',
          method: 'POST',
          body: data,
        };
      },
    }),
    login: builder.mutation<TTokensResponse, ILoginUser>({
      query(creds) {
        return {
          url: 'auth/jwt/create',
          method: 'POST',
          body: creds,
        };
      },
    }),
    refresh: builder.mutation<TRefreshResponse, IRefreshToken>({
      query(data) {
        return {
          url: 'auth/jwt/refresh',
          method: 'POST',
          body: data,
        };
      },
    }),
    oRetrieve: builder.mutation<TResponse, { provider: string; data: IAuthO }>({
      query(arg) {
        const { provider, data } = arg;
        return {
          url: `auth/o/${provider}/`,
          method: 'GET',
          body: data,
        };
      },
    }),
    oCreate: builder.mutation<TResponse, { provider: string; data: IAuthO }>({
      query(arg) {
        const { provider, data } = arg;
        return {
          url: `auth/o/${provider}/`,
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginMutation, useORetrieveMutation, useOCreateMutation } = authApi;
