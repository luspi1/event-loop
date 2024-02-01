import { type FC } from 'react'

import { Link } from 'react-router-dom'

import { homeMenuItems } from 'src/pages/home-page/components/home-menu/consts'

import styles from './index.module.scss'
export const HomeMenu: FC = () => {
	return (
		<section className={styles.homeMenuSection}>
			<ul>
				{homeMenuItems.map((menuItem) => (
					<li key={menuItem.title}>
						<Link to={menuItem.link}>{menuItem.title}</Link>
						<img src={menuItem.img} alt={menuItem.title} />
					</li>
				))}
			</ul>
		</section>
	)
}
