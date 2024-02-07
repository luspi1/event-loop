import { type UserType } from 'src/types/users'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const usersApi = createApi({
	reducerPath: ReducerPath.Users,
	tagTypes: ['Users'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
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
