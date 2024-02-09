import { type FC, useState } from 'react'
import { type ContentNav } from 'src/types/navigation'

import { Navigate } from 'react-router-dom'
import cnBind from 'classnames/bind'

import { useAppSelector } from 'src/hooks/store'
import { getCurrentUser } from 'src/store/auth/auth.selectors'
import { AccountSvg } from 'src/UI/icons/accountSVG'
import { useLocationMatch } from 'src/hooks/location-match'
import { LinksList } from 'src/modules/main-navigation/components/links-list/links-list'
import { NavFooter } from 'src/modules/main-navigation/components/nav-footer/nav-footer'

import { CloseSvg } from 'src/UI/icons/closeSVG'
import { OpenIconSvg } from 'src/UI/icons/openIconSVG'
import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'

export const MainNavigation: FC = () => {
	const currentUser = useAppSelector(getCurrentUser)
	const [matchesLocation] = useLocationMatch<ContentNav>([`${AppRoute.Home}`])

	const [isClosed, setIsClosed] = useState<boolean>(false)

	const cx = cnBind.bind(styles)

	if (matchesLocation) return <Navigate to={AppRoute.Events} />

	return (
		<nav className={cx(styles.mainNav, { _close: isClosed })}>
			{isClosed ? (
				<button className={styles.controlNavBtn} onClick={() => setIsClosed(false)} type='button'>
					<OpenIconSvg />
				</button>
			) : (
				<button className={styles.controlNavBtn} onClick={() => setIsClosed(true)} type='button'>
					<CloseSvg />
				</button>
			)}

			<span className={styles.authUser}>
				<AccountSvg />
				{!isClosed && (currentUser?.name ?? 'Аноним')}
			</span>

			<LinksList isCloseNav={isClosed} />
			<NavFooter isCloseNav={isClosed} />
		</nav>
	)
}
