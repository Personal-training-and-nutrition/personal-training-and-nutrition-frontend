import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  code: string,
  redirect_url?: string
}


export const mailApi = createApi({
  reducerPath: 'mailApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/'}),
  endpoints: (builder) => ({
    getToken: builder.mutation<string, Post>({
      query: ({code, redirect_url ='http://localhost:5173'}) => ({
        url: `https://oauth.mail.ru/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect_url}`,
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'authorization': 'Basic YzU1MTBiYTNmZGVmNDg5ZTk1N2Q1NTdmN2E5MzQ2MDU6MjYzMzY0NzA4NmE1NDQ0NmFjMmZlMTllMmQwMmQxZTQ='
      }
      })
      }),
    }),
  })
export const { useGetTokenMutation } = mailApi