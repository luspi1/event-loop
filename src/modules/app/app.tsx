import React, { type FC } from 'react'

import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/modules/layout/layout'

import { NotFound } from 'src/pages/not-found/not-found'
import { LoginPage } from 'src/pages/login-page/login-page'
import { useAuth } from 'src/hooks/auth/auth'
import { EventsPage } from 'src/pages/events-page/events-page'
import { ProfilePage } from 'src/pages/profile-page/profile-page'

export const App: FC = () => {
	useAuth()
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<Layout />}>
				<Route path={AppRoute.Events} element={<EventsPage />} />
				<Route path={AppRoute.Profile} element={<ProfilePage />} />
			</Route>
			<Route path={AppRoute.Auth} element={<LoginPage />} />

			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
