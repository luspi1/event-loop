import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'

type EventModalState = {
	isActive?: boolean
}

type ModalsState = {
	eventModal: EventModalState
}

const initialState: ModalsState = {
	eventModal: {
		isActive: false,
	},
}

export const modalsSlice = createSlice({
	name: NameSpace.Modals,
	initialState,
	reducers: {
		setEventModal: (state, action: PayloadAction<EventModalState>) => {
			state.eventModal.isActive = action.payload.isActive ?? state.eventModal.isActive
		},
	},
})

export const modalsActions = modalsSlice.actions
export const modalsReducer = modalsSlice.reducer
