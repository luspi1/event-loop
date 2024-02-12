import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { breadCrumbsReducer } from 'src/modules/bread-crumbs/store/bread-crumbs.slice'
import { usersApi } from 'src/store/users/users.api'

import { NameSpace } from 'src/helpers/consts'
import { authReducer } from 'src/store/auth/auth.slice'
import { modalsReducer } from 'src/store/modals/modals.slice'

export const store = configureStore({
	reducer: {
		[NameSpace.BreadCrumbs]: breadCrumbsReducer,
		[NameSpace.Auth]: authReducer,
		[NameSpace.Modals]: modalsReducer,
		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(usersApi.middleware),
})

setupListeners(store.dispatch)
