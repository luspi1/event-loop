import { type FC } from 'react'

import { NavLink } from 'react-router-dom'

import styles from './index.module.scss'
import { AppRoute } from 'src/helpers/consts'
import { EventIconSVG } from 'src/UI/icons/eventIconSVG'
import { ProfileIconSvg } from 'src/UI/icons/profileIconSVG'

type LinksListProps = {
	isCloseNav: boolean
}
export const LinksList: FC<LinksListProps> = ({ isCloseNav }) => {
	const setActive = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${styles.activeLink}` : ''
	return (
		<ul className={styles.linksList}>
			<li>
				<NavLink className={setActive} to={AppRoute.Events}>
					<EventIconSVG />
					{!isCloseNav && 'События'}
				</NavLink>
			</li>
			<li>
				<NavLink className={setActive} to={AppRoute.Profile}>
					<ProfileIconSvg />
					{!isCloseNav && 'Профиль'}
				</NavLink>
			</li>
		</ul>
	)
}
