import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import styles from './index.module.scss'
import { HomeMenu } from 'src/pages/home-page/components/home-menu/home-menu'
import { Container } from 'src/UI/Container/Container'

export const HomePage: FC = () => {
	return (
		<Container className={styles.homePage}>
			<Helmet>
				<title>Главная</title>
			</Helmet>
			<HomeMenu />
		</Container>
	)
}
