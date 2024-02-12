import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { breadCrumbsActions } from 'src/modules/bread-crumbs/store/bread-crumbs.slice'
import { authActions } from 'src/store/auth/auth.slice'
import { modalsActions } from 'src/store/modals/modals.slice'

const actions = {
	...breadCrumbsActions,
	...authActions,
	...modalsActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
