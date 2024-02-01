import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { breadCrumbsReducer } from 'src/modules/bread-crumbs/store/bread-crumbs.slice'
import { usersApi } from 'src/store/users/users.api'

import { NameSpace } from 'src/helpers/consts'
import { authReducer } from 'src/store/auth/auth.slice'
import { authApi } from 'src/store/auth/auth.api'

export const store = configureStore({
	reducer: {
		[NameSpace.BreadCrumbs]: breadCrumbsReducer,
		[NameSpace.Auth]: authReducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			usersApi.middleware,
			authApi.middleware,
		),
})

setupListeners(store.dispatch)
