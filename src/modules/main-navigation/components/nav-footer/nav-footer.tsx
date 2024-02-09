import { type FC } from 'react'

import { LogoutIconSvg } from 'src/UI/icons/logoutIconSVG'
import { signOut } from 'firebase/auth'
import { auth } from 'src/helpers/firebaseConfig'
import { MainLogoSvg } from 'src/UI/icons/mainLogoSVG'

import styles from './index.module.scss'
import cnBind from 'classnames/bind'

type NavFooterProps = {
	isCloseNav: boolean
}
export const NavFooter: FC<NavFooterProps> = ({ isCloseNav }) => {
	const handleLogoutClick = async () => {
		await signOut(auth)
	}

	const cx = cnBind.bind(styles)

	return (
		<div className={cx(styles.navFooter, { _closed: isCloseNav })}>
			<button className={styles.logoutBtn} onClick={handleLogoutClick} type='button'>
				<LogoutIconSvg />
				{!isCloseNav && 'Выйти'}
			</button>
			<div className={styles.logoWrapper}>
				<MainLogoSvg />
			</div>
			{!isCloseNav && (
				<>
					<p className={styles.navFooterContacts}>Ошибки и вопросы:</p>
					<a className={styles.navFooterLink} href='mailto:contact@purpleschool.ru'>
						igbabin566@gmail.com
					</a>
				</>
			)}
		</div>
	)
}
