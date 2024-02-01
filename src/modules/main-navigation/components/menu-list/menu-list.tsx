import { NavLink } from 'react-router-dom'
import cnBind from 'classnames/bind'

import { MenuItems } from 'src/modules/main-navigation/components/menu-list/consts'

import styles from './index.module.scss'

export const MenuList = () => {
	const cx = cnBind.bind(styles)
	const setActive = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${styles.activeLink}` : ''

	return (
		<ul className={styles.menuList}>
			{MenuItems.map((menuEl) => (
				<li className={cx(styles.menuItem, { _accent: menuEl.accent })} key={menuEl.link}>
					<NavLink className={setActive} to={menuEl.link}>
						{menuEl.title}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
