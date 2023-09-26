import { combinedApi } from './combinedApi';

export const userApi = combinedApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<TResponse, void>({
      query() {
        return { url: 'users/' };
      },
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
