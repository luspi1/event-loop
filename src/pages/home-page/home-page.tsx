import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { SliderSearch } from 'src/pages/home-page/components/slider-search/slider-search'

import styles from './index.module.scss'
import { FeedbackSection } from 'src/pages/home-page/components/feedback-section/feedback-section'

export const HomePage: FC = () => {
	return (
		<div className={styles.homePage}>
			<Helmet>
				<title>Главная</title>
			</Helmet>
			<SliderSearch />
			<FeedbackSection />
		</div>
	)
}
