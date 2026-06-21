import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User, Subscription } from '../types';

type UpdateUserArg = {
  id: string;
  body: Partial<Pick<User, 'name' | 'phoneNumber' | 'email' | 'accountStatus'>>;
};

type AddSubscriptionArg = {
  userId: string;
  body: Pick<Subscription, 'licensePlate' | 'type'>;
};

type UpdateSubscriptionArg = {
  userId: string;
  subId: string;
  body: Partial<Pick<Subscription, 'licensePlate' | 'type' | 'status'>>;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], string | void>({
      query: (q) => ({ url: 'users', params: q ? { q } : undefined }),
      providesTags: [{ type: 'User', id: 'LIST' }],
    }),
    getUser: builder.query<User, string>({
      query: (id) => `users/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'User', id }],
    }),
    updateUser: builder.mutation<User, UpdateUserArg>({
      query: ({ id, body }) => ({ url: `users/${id}`, method: 'PATCH', body }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: 'User', id },
        { type: 'User', id: 'LIST' },
      ],
    }),
    addSubscription: builder.mutation<User, AddSubscriptionArg>({
      query: ({ userId, body }) => ({ url: `users/${userId}/subscriptions`, method: 'POST', body }),
      invalidatesTags: (_result, _error, { userId }) => [
        { type: 'User', id: userId },
        { type: 'User', id: 'LIST' },
      ],
    }),
    updateSubscription: builder.mutation<User, UpdateSubscriptionArg>({
      query: ({ userId, subId, body }) => ({ url: `users/${userId}/subscriptions/${subId}`, method: 'PATCH', body }),
      invalidatesTags: (_result, _error, { userId }) => [
        { type: 'User', id: userId },
        { type: 'User', id: 'LIST' },
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useAddSubscriptionMutation,
  useUpdateSubscriptionMutation,
} = api;
