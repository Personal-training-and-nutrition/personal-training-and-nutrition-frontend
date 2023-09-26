import { combinedApi } from './combinedApi';

export const userApi = combinedApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<TResponse, void>({
      query() {
        return { url: 'users/' };
      },
    }),
    getMe: builder.query<TResponse, void>({
      query() {
        return { url: 'users/me/' };
      },
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
