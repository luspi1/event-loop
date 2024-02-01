import { type FC } from 'react'

import { RegionSlider } from './components/region-slider/region-slider'

import styles from './index.module.scss'

export const SliderSearch: FC = () => {
	return (
		<section className={styles.sliderSearchSection}>
			<RegionSlider />
		</section>
	)
}
