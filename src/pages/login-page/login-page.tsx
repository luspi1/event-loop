import { type FC } from 'react'

import { Navigate } from 'react-router-dom'

import { AuthForm } from 'src/modules/auth-form/auth-form'
import { useAppSelector } from 'src/hooks/store'
import { getCurrentUser } from 'src/store/auth/auth.selectors'

import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'

export const LoginPage: FC = () => {
	const currentUser = useAppSelector(getCurrentUser)
	if (currentUser) return <Navigate to={AppRoute.Home} />
	return (
		<div className={styles.loginPage}>
			<AuthForm />
		</div>
	)
}
