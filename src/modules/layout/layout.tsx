import { type FC } from 'react'

import { Outlet } from 'react-router-dom'
import { MainNavigation } from 'src/modules/main-navigation/main-navigation'
import { Footer } from 'src/modules/footer/footer'

export const Layout: FC = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
