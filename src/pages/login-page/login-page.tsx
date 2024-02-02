import { type FC } from 'react'

import { Navigate } from 'react-router-dom'

import { AuthForms } from 'src/modules/auth-forms/auth-forms'
import { useAppSelector } from 'src/hooks/store'
import { getCurrentUser } from 'src/store/auth/auth.selectors'

import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'

export const LoginPage: FC = () => {
	const currentUser = useAppSelector(getCurrentUser)
	if (currentUser) return <Navigate to={AppRoute.Home} />
	return (
		<Container className={styles.loginPage}>
			<AuthForms />
		</Container>
	)
}
