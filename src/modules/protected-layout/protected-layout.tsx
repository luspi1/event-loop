import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate, Outlet } from 'react-router-dom'

import { AppRoute } from 'src/helpers/consts'
import { auth } from 'src/helpers/firebaseConfig'
import { useActions } from 'src/hooks/actions/actions'
import { useAppSelector } from 'src/hooks/store'
import { getCurrentUser } from 'src/store/auth/auth.selectors'
export const ProtectedLayout = () => {
	const { loginUser } = useActions()
	const isAuth = useAppSelector(getCurrentUser)

	useEffect(() => {
		// Этот обработчик подписывается на изменения состояния аутентификации
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			loginUser(user)
		})
		return unsubscribe
	}, [])

	return isAuth ? <Outlet /> : <Navigate to={AppRoute.Auth} />
}
