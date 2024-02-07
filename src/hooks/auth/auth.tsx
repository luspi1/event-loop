import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { useActions } from 'src/hooks/actions/actions'
import { auth } from 'src/helpers/firebaseConfig'

export const useAuth = () => {
	const { loginUser, logoutUser } = useActions()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				loginUser(user)
			} else {
				logoutUser()
			}
		})
		return () => unsubscribe()
	}, [])
}
