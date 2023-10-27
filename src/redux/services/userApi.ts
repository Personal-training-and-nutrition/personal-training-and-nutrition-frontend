import { TResponse } from '../types/common';
import { IUser, TMeUser, IUserPassword, IUserEmail, IUserActivationCreate, IUserResetEmail, IUserResetPasswordConfirm, IUserSetEmail, IUserSetPassword, IUserUpdate } from '../types/user';
import { combinedApi } from './combinedApi';

export const userApi = combinedApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<TResponse, void>({
      query() {
        return { url: 'users/' };
      },
    }),
    retrieveUser: builder.query<IUser, string>({
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
    partialUpdateUser: builder.mutation<IUserUpdate, { id: string; data: Partial<IUserUpdate> }>({
      query(arg) {
        const { id, data } = arg;
        return {
          url: `users/${id}/`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
    // TODO: не работает, потому что эндпойнт в нарушение документации требует мыло и пароль юзера
    destroyUser: builder.mutation<TResponse, number>({
      query(id) {
        return { url: `users/${id}/`, method: 'DELETE' };
      },
    }),
    getMe: builder.query<TMeUser, void>({
      query() {
        return { url: 'users/me/' };
      },
    }),
    updateMe: builder.mutation<TResponse, IUserPassword>({
      query(data) {
        return {
          url: 'users/me/',
          method: 'PUT',
          body: data,
        };
      },
    }),
    partialUpdateMe: builder.mutation<TResponse, IUserPassword>({
      query(data) {
        return {
          url: 'users/me/',
          method: 'PATCH',
          body: data,
        };
      },
    }),
    destroyMe: builder.mutation<TResponse, IUserEmail>({
      query(data) {
        return {
          url: 'users/me/',
          method: 'DELETE',
          body: data,
        };
      },
    }),
    getUserClientList: builder.query<TResponse, void>({
      query() {
        return { url: 'users/get_client_list/' };
      },
    }),
    getUserDietPrograms: builder.query<TResponse, void>({
      query() {
        return { url: 'users/get_diet_programs/' };
      },
    }),
    getUserWorkoutPrograms: builder.query<TResponse, void>({
      query() {
        return { url: 'users/get_workout_programs/' };
      },
    }),
    usersActivationCreate: builder.mutation<TResponse, IUserActivationCreate>({
      query(data) {
        return {
          url: 'users/activation/',
          method: 'POST',
          body: data,
        };
      },
    }),
    usersResendActivation: builder.mutation<TResponse, IUserEmail>({
      query(data) {
        return {
          url: 'users/resend_activation/',
          method: 'POST',
          body: data,
        };
      },
    }),
    usersResetEmailCreate: builder.mutation<TResponse, IUserEmail>({
      query(data) {
        return {
          url: 'users/reset-email/',
          method: 'POST',
          body: data,
        };
      },
    }),
    usersResetEmailConfirm: builder.mutation<TResponse, IUserResetEmail>({
      query(data) {
        return {
          url: 'users/reset_email_confirm',
          method: 'POST',
          body: data,
        };
      },
    }),
    usersResetPasswordCreate: builder.mutation<TResponse, IUserEmail>({
      query(data) {
        return {
          url: 'users/reset-password/',
          method: 'POST',
          body: data,
        };
      },
    }),
    usersResetPasswordConfirm: builder.mutation<TResponse, IUserResetPasswordConfirm>({
      query(data) {
        return {
          url: 'users/reset_email_confirm/',
          method: 'POST',
          body: data,
        };
      },
    }),
    usersSetEmail: builder.mutation<TResponse, IUserSetEmail>({
      query(data) {
        return {
          url: 'users/set_email/',
          method: 'POST',
          body: data,
        };
      },
    }),
    usersSetPassword: builder.mutation<TResponse, IUserSetPassword>({
      query(data) {
        return {
          url: 'users/set_password',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetMeQuery,
  useLazyGetMeQuery,
  useUpdateMeMutation,
  usePartialUpdateMeMutation,
  useDestroyMeMutation,
  useRetrieveUserQuery,
  useLazyRetrieveUserQuery,
  useDestroyUserMutation,
  useUpdateUserMutation,
  usePartialUpdateUserMutation,
  useGetUserClientListQuery,
  useGetUserDietProgramsQuery,
  useGetUserWorkoutProgramsQuery,
  useUsersActivationCreateMutation,
  useUsersResendActivationMutation,
  useUsersResetEmailCreateMutation,
  useUsersResetEmailConfirmMutation,
  useUsersResetPasswordCreateMutation,
  useUsersResetPasswordConfirmMutation,
  useUsersSetEmailMutation,
  useUsersSetPasswordMutation,
} = userApi;
