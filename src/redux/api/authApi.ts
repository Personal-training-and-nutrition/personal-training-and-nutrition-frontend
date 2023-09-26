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
  }),
});

export const { useRegisterUserMutation, useLoginMutation } = authApi;
