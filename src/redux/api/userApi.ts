import { combinedApi } from './combinedApi';

export const userApi = combinedApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<TResponse, void>({
      query() {
        return { url: 'users/' };
      },
    }),
    retrieveUser: builder.query<TResponse, number>({
      query(id) {
        return { url: `users/${id}/` };
      },
    }),
    updateUser: builder.mutation<TResponse, { id: number; data: IUser }>({
      query(arg) {
        const { id, data } = arg;
        return {
          url: `users/${id}/`,
          method: 'PUT',
          body: data,
        };
      },
    }),
    // TODO: пока не работает из-за ошибки КОРС
    partialUpdateUser: builder.mutation<TResponse, { id: number; data: Partial<IUser> }>({
      query(arg) {
        const { id, data } = arg;
        return {
          url: `users/${id}/`,
          method: 'PATH',
          body: data,
        };
      },
    }),
    // TODO: не работает, потому что эндпойнт в нарушение документации требует мыло и пароль юзера
    destroyUser: builder.mutation<TResponse, number>({
      query(id) {
        return { url: `users/${id}`, method: 'DELETE' };
      },
    }),
    getMe: builder.query<TResponse, void>({
      query() {
        return { url: 'users/me/' };
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetMeQuery,
  useRetrieveUserQuery,
  useDestroyUserMutation,
  useUpdateUserMutation,
  usePartialUpdateUserMutation,
} = userApi;
