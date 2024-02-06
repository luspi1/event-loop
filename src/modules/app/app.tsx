import React, { type FC } from 'react'

import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/modules/layout/layout'

import { HomePage } from 'src/pages/home-page/home-page'
import { NotFound } from 'src/pages/not-found/not-found'
import { LoginPage } from 'src/pages/login-page/login-page'

import { ProtectedLayout } from 'src/modules/protected-layout/protected-layout'

export const App: FC = () => {
	return (
		<Routes>
			<Route element={<ProtectedLayout />}>
				<Route path={AppRoute.Home} element={<Layout />}>
					<Route index element={<HomePage />} />
				</Route>
				<Route path={AppRoute.Auth} element={<LoginPage />} />
			</Route>

			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
