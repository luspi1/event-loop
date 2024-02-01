import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type User } from 'src/types/users'

export const authApi = createApi({
	reducerPath: 'auth/api',
	tagTypes: ['Auth'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4444',
		prepareHeaders: (headers) => {
			const token = localStorage.getItem('token')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
		},
	}),
	endpoints: (build) => ({
		regUser: build.mutation({
			query: (formData) => ({
				url: '/register',
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['Auth'],
		}),
		loginUser: build.mutation({
			query: (formData) => ({
				url: '/login',
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['Auth'],
		}),
		getAllUsers: build.query<User[], null>({
			query: () => ({
				url: '/users',
			}),
			providesTags: ['Auth'],
		}),
		checkUser: build.query({
			query: () => ({
				url: '660/check',
			}),
		}),
		getUser: build.query<User, string>({
			query: (id) => ({
				url: `660/users/${id}`,
			}),
		}),
	}),
})

export const {
	useRegUserMutation,
	useLoginUserMutation,
	useLazyCheckUserQuery,
	useLazyGetUserQuery,
} = authApi
