import { TResponse } from '../types/common';
import { IDietPlan } from '../types/diet';
import { combinedApi } from './combinedApi';

export const dietApi = combinedApi.injectEndpoints({
  endpoints: (builder) => ({
    getDietPlansList: builder.query<IDietPlan[], void>({
      query() {
        return {
          url: 'diet-plans/',
        };
      },
      providesTags: ['dietPlanList'],
    }),
    createDietPlan: builder.mutation<IDietPlan, IDietPlan>({
      query(data) {
        return {
          url: 'diet-plans/',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['dietPlanList'],
    }),
    retrieveDietPlan: builder.query<IDietPlan, string>({
      query(id) {
        return {
          url: `diet-plans/${id}/`,
        };
      },
      providesTags: ['dietPlan', 'dietPlanList'],
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
      invalidatesTags: ['dietPlan', 'dietPlanList'],
    }),
    destroyDietPlan: builder.mutation<TResponse, number>({
      query(id) {
        return {
          url: `diet-plans/${id}/`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['dietPlanList'],
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
