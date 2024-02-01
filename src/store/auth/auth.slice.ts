import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User } from 'src/types/users'
import { NameSpace } from 'src/helpers/consts'
import { dropToken, saveToken } from 'src/helpers/token'

type AuthSliceState = {
	currentUser: User | null
}

const initialState: AuthSliceState = {
	currentUser: null,
}

export const authSlice = createSlice({
	name: NameSpace.Auth,
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<User>) => {
			state.currentUser = action.payload
			saveToken(action.payload.token)
		},
		checkLoginUser: (state, action: PayloadAction<User | undefined>) => {
			state.currentUser = action.payload ?? null
		},
		logoutUser: (state) => {
			state.currentUser = null
			dropToken()
		},
	},
})

export const authActions = authSlice.actions

export const authReducer = authSlice.reducer
