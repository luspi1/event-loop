import { type FC } from 'react'
import { type NavigationItem } from 'src/types/navigation'

import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import styles from './index.module.scss'

type SideMenuProps = {
	sideItems: NavigationItem[]
	className?: string
}
export const SideMenu: FC<SideMenuProps> = ({ sideItems, className }) => {
	const setActive = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${styles.activeLink}` : ''

	return (
		<ul className={cn(styles.sideMenu, className)}>
			{sideItems?.map((menuItem) => (
				<li className={styles.menuItem} key={menuItem.link}>
					<NavLink className={setActive} to={menuItem.link} end>
						{menuItem.title}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
