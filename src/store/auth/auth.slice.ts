import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'

import firebase from 'firebase/compat/app'
import UserInfo = firebase.UserInfo

type AuthSliceState = {
	currentUser: UserInfo | null
}

const initialState: AuthSliceState = {
	currentUser: null,
}

export const authSlice = createSlice({
	name: NameSpace.Auth,
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<UserInfo | null>) => {
			state.currentUser = action.payload
			// saveToken(action.payload.token)
		},
	},
})

export const authActions = authSlice.actions

export const authReducer = authSlice.reducer
