import React, { type FC } from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { MainNavigation } from 'src/modules/main-navigation/main-navigation'
import { useAppSelector } from 'src/hooks/store'
import { getCurrentUser, getUserLoading } from 'src/store/auth/auth.selectors'
import { AppRoute } from 'src/helpers/consts'
import { Loader } from 'src/components/loader/loader'

import styles from './index.module.scss'
export const Layout: FC = () => {
	const isAuth = useAppSelector(getCurrentUser)
	const isLoading = useAppSelector(getUserLoading)

	if (isLoading) return <Loader />

	return isAuth ? (
		<>
			<div className={styles.pageContainer}>
				<MainNavigation />
				<main>
					<Outlet />
				</main>
			</div>
		</>
	) : (
		<Navigate to={AppRoute.Auth} />
	)
}
