import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'

import firebase from 'firebase/compat/app'
import UserInfo = firebase.UserInfo
import { type UserType } from 'src/types/users'

type AuthSliceState = {
	currentUser: UserType | null
	isLoading: boolean
}

const initialState: AuthSliceState = {
	currentUser: null,
	isLoading: true,
}

export const authSlice = createSlice({
	name: NameSpace.Auth,
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<UserInfo>) => {
			state.currentUser = {
				name: action.payload.displayName,
				email: action.payload.email,
				id: action.payload.uid,
			}
			state.isLoading = false
		},
		logoutUser: (state) => {
			state.currentUser = null
			state.isLoading = false
		},
	},
})

export const authActions = authSlice.actions

export const authReducer = authSlice.reducer
