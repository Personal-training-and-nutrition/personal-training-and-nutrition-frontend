import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';

const BASE_URL = 'http://127.0.0.1:8000/api';

type TError = {
  data: {
    detail: string;
    code: string;
  };
};

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      headers.set('Authorization', `JWT ${token}`);
    }
    return headers;
  },
});
const baseQueryWithRefresh: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && (result.error as TError).data.code === 'token_not_valid') {
    console.log('token is not valid');
    const { data } = await baseQuery(
      { url: 'auth/jwt/refresh', method: 'POST', body: { refresh: window.localStorage.getItem('refreshToken') } },
      api,
      extraOptions,
    );
    console.log('new', data);
    window.localStorage.setItem('accessToken', (data as TRefreshResponse).access);
    result = await baseQuery(args, api, extraOptions);
  }
  return result;
};

export const combinedApi = createApi({
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({}),
});
