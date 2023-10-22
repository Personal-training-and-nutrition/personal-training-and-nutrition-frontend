import { combinedApi } from './combinedApi';

export const trainingApi = combinedApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrainingPlansList: builder.query<ITrainingPlan[], void>({
      query() {
        return {
          url: 'training-plans/',
        };
      },
      providesTags: ['trainingPlanList'],
    }),
    createTrainingPlan: builder.mutation<ITrainingPlan, ITrainingPlan>({
      query(data) {
        return {
          url: 'training-plans/',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['trainingPlanList'],
    }),
    retrieveTrainingPlan: builder.query<ITrainingPlan, string>({
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
      invalidatesTags: ['trainingPlanList'],
    }),
    destroyTrainingPlan: builder.mutation<TResponse, number>({
      query(id) {
        return {
          url: `training-plans/${id}/`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['trainingPlanList'],
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
