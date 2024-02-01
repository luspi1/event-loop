import { type FC } from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'

import mainLogo from 'src/assets/img/logo.png'
import { AccountSvg } from 'src/UI/icons/accountSVG'
import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'

export const MainNavigation: FC = () => {
	return (
		<nav className={styles.mainNav}>
			<Container className={styles.navContainer}>
				<Link to={AppRoute.Home} className={styles.logoWrapper}>
					<img src={mainLogo} alt='logo' />
				</Link>
				<button className={styles.authBtn} type='button'>
					<AccountSvg />
					Имя
				</button>
			</Container>
		</nav>
	)
}
