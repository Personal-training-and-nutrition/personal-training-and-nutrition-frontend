import { TClientListElement, ICreateClient, IClientRetrieve, IEditClient } from '../types/clients';
import { TResponse } from '../types/common';
import { combinedApi } from './combinedApi';

export const clientsApi = combinedApi.injectEndpoints({
  endpoints: (builder) => ({
    getClientsList: builder.query<TClientListElement[], void>({
      query() {
        return {
          url: 'clients/',
        };
      },
      providesTags: ['clientList'],
    }),
    createClient: builder.mutation<TResponse, ICreateClient>({
      query(data) {
        return {
          url: 'clients/',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['clientList'],
    }),
    retrieveClient: builder.query<IClientRetrieve, string>({
      query(id) {
        return {
          url: `clients/${id}/`,
        };
      },
    }),
    updateClient: builder.mutation<TResponse, { id: number; data: IEditClient }>({
      query(arg) {
        const { id, data } = arg;
        return {
          url: `clients/${id}/`,
          method: 'PUT',
          body: data,
        };
      },
    }),
    partialUpdateClient: builder.mutation<TResponse, { id: number; data: IEditClient }>({
      query(arg) {
        const { id, data } = arg;
        return {
          url: `clients/${id}/`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
    destroyClient: builder.mutation<TResponse, number>({
      query(id) {
        return {
          url: `clients/${id}/`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetClientsListQuery,
  useCreateClientMutation,
  useRetrieveClientQuery,
  useUpdateClientMutation,
  usePartialUpdateClientMutation,
  useDestroyClientMutation,
} = clientsApi;
