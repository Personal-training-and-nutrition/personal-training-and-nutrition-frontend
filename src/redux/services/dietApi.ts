import { combinedApi } from './combinedApi';

export const dietApi = combinedApi.injectEndpoints({
  endpoints: (builder) => ({
    getDietPlansList: builder.query<TResponse, void>({
      query() {
        return {
          url: 'diet-plans/',
        };
      },
    }),
    createDietPlan: builder.mutation<TResponse, IDietPlan>({
      query(data) {
        return {
          url: 'diet-plans/',
          method: 'POST',
          body: data,
        };
      },
    }),
    retrieveDietPlan: builder.query<TResponse, number>({
      query(id) {
        return {
          url: `diet-plans/${id}/`,
        };
      },
    }),
    updateDietPlan: builder.mutation<TResponse, { id: number; data: IDietPlan }>({
      query(arg) {
        const { id, data } = arg;
        return {
          url: `diet-plans/${id}/`,
          method: 'PUT',
          body: data,
        };
      },
    }),
    destroyDietPlan: builder.mutation<TResponse, number>({
      query(id) {
        return {
          url: `diet-plans/${id}/`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetDietPlansListQuery,
  useCreateDietPlanMutation,
  useRetrieveDietPlanQuery,
  useUpdateDietPlanMutation,
  useDestroyDietPlanMutation,
} = dietApi;
