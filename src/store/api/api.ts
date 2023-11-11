import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Point } from '../../types/department';
import { ResponseTask } from '../../types/responseTask';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Bank'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://alexbobr.ru',
  }),
  endpoints: (builder) => ({
    getAuth: builder.query({
      query: (body) => ({
        url: '/user_auth/',
        method: 'POST',
        body,
      }),
    }),
    getPoints: builder.query<Point[], null>({
      query: () => ({
        url: '/get_points/',
      }),
    }),
    getUsers: builder.query<ResponseTask[], null>({
      query: () => ({
        url: '/timesheet/',
      }),
    }),
  }),
});

export const { useLazyGetAuthQuery, useGetPointsQuery, useGetUsersQuery } = api;
