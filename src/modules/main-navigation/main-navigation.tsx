import { type FC } from 'react'

import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/store'
import { getCurrentUser } from 'src/store/auth/auth.selectors'
import { signOut } from 'firebase/auth'

import { Container } from 'src/UI/Container/Container'
import { AccountSvg } from 'src/UI/icons/accountSVG'
import { AppRoute } from 'src/helpers/consts'
import mainLogo from 'src/assets/img/logo.png'
import { auth } from 'src/helpers/firebaseConfig'

import styles from './index.module.scss'

export const MainNavigation: FC = () => {
	const currentUser = useAppSelector(getCurrentUser)
	const handleLogoutClick = () => {
		void signOut(auth).then((r) => console.log(r))
	}

	return (
		<nav className={styles.mainNav}>
			<Container className={styles.navContainer}>
				<Link to={AppRoute.Home} className={styles.logoWrapper}>
					<img src={mainLogo} alt='logo' />
				</Link>

				<div className={styles.authBlock}>
					<span className={styles.authUser}>
						<AccountSvg />
						{currentUser?.email ?? 'Аноним'}
					</span>
					<button onClick={handleLogoutClick} type='button'>
						Выйти
					</button>
				</div>
			</Container>
		</nav>
	)
}
