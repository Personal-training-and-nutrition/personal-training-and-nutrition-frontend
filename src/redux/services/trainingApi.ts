import { combinedApi } from './combinedApi';

export const trainingApi = combinedApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrainingPlansList: builder.query<TResponse, void>({
      query() {
        return {
          url: 'training-plans/',
        };
      },
    }),
    createTrainingPlan: builder.mutation<TResponse, ITrainingPlan>({
      query(data) {
        return {
          url: 'training-plans/',
          method: 'POST',
          body: data,
        };
      },
    }),
    retrieveTrainingPlan: builder.query<TResponse, number>({
      query(id) {
        return {
          url: `training-plans/${id}/`,
        };
      },
    }),
    updateTrainingPlan: builder.mutation<TResponse, { id: number; data: ITrainingPlan }>({
      query(arg) {
        const { id, data } = arg;
        return {
          url: `training-plans/${id}/`,
          method: 'PUT',
          body: data,
        };
      },
    }),
    destroyTrainingPlan: builder.mutation<TResponse, number>({
      query(id) {
        return {
          url: `training-plans/${id}/`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetTrainingPlansListQuery,
  useCreateTrainingPlanMutation,
  useRetrieveTrainingPlanQuery,
  useUpdateTrainingPlanMutation,
  useDestroyTrainingPlanMutation,
} = trainingApi;
