import { type FC } from 'react'

import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'
import { initializeApp } from 'firebase/app'

import { Layout } from 'src/modules/layout/layout'

import { HomePage } from 'src/pages/home-page/home-page'
import { NotFound } from 'src/pages/not-found/not-found'
import { firebaseConfig } from 'src/helpers/firebaseConfig'
import { LoginPage } from 'src/pages/login-page/login-page'

export const App: FC = () => {
	initializeApp(firebaseConfig)
	return (
		<Routes>
			<Route path={AppRoute.Auth} element={<LoginPage />} />
			<Route path={AppRoute.Home} element={<Layout />}>
				<Route path={AppRoute.Home} element={<HomePage />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
