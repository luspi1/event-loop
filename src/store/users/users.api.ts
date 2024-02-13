import { type UserType } from 'src/types/users'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ReducerPath } from 'src/helpers/consts'

export const usersApi = createApi({
	reducerPath: ReducerPath.Users,
	tagTypes: ['Users'],
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	endpoints: (build) => ({
		getAllUsers: build.query<UserType[], string>({
			query: (search) => ({
				url: `users`,
				params: {
					q: search,
				},
			}),
		}),
		getUserById: build.query<UserType, string>({
			query: (userId) => ({
				url: `users/${userId}`,
			}),
		}),
	}),
})

export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi
