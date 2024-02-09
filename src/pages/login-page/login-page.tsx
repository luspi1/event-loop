import { type FC } from 'react'

import { AuthForms } from 'src/modules/auth-forms/auth-forms'
import { useAppSelector } from 'src/hooks/store'
import { getCurrentUser } from 'src/store/auth/auth.selectors'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'
import { AppRoute } from 'src/helpers/consts'
import { Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MainLogoSvg } from 'src/UI/icons/mainLogoSVG'

export const LoginPage: FC = () => {
	const currentUser = useAppSelector(getCurrentUser)

	if (currentUser) return <Navigate to={`/${AppRoute.Events}`} />
	return (
		<Container className={styles.loginPage}>
			<Helmet>
				<title>Авторизация</title>
			</Helmet>
			<MainLogoSvg className={styles.authLogo} width='300' height='270' />
			<AuthForms />
		</Container>
	)
}
