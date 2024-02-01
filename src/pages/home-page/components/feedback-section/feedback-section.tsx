import { type FC } from 'react'

import { Container } from 'src/UI/Container/Container'

import styles from './index.module.scss'
import { FeedbackAddress } from 'src/pages/home-page/components/feedback-section/components/feedbackAddress/feedbackAddress'
import { FeedbackForm } from 'src/pages/home-page/components/feedback-section/components/feedbackForm/feedbackForm'
export const FeedbackSection: FC = () => {
	return (
		<section className={styles.feedbackSection}>
			<Container>
				<h4 className={styles.feedbackTitle}>Обратная связь</h4>
				<p className={styles.feedbackDesc}>
					Задайте нам любой интересующий вас вопрос в поле «Комментарий»
				</p>
				<div className={styles.feedbackContent}>
					<FeedbackAddress />
					<FeedbackForm />
				</div>
			</Container>
		</section>
	)
}
