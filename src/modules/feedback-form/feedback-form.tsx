import React, { type FC } from 'react'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { type FeedbackInputs } from './schema'

import styles from './index.module.scss'

export const FeedbackForm: FC = () => {
	const methods = useForm<FeedbackInputs>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<FeedbackInputs> = (data) => {
		console.log(data)
	}
	return (
		<div className={styles.feedbackWrapper}>
			<h3>Обратная связь</h3>
			<p className={styles.feedbackDesc}>
				Задайте нам любой интересующий вас вопрос в поле «Комментарий»
			</p>
			<FormProvider {...methods}>
				<form className={styles.feedbackForm} onSubmit={methods.handleSubmit(onSubmit)}>
					<ControlledInput
						className={styles.feedbackInput}
						name='name'
						placeholder='Имя*'
						required
					/>
					<ControlledInput
						className={styles.feedbackInput}
						name='lastname'
						placeholder='Фамилия*'
						required
					/>
					<ControlledInput
						className={styles.feedbackInput}
						name='phone'
						placeholder='Телефон*'
						mask='+7 (999) 999-99-99'
						required
					/>
					<ControlledInput
						className={styles.feedbackInput}
						name='email'
						placeholder='Электронная почта*'
						type='email'
						required
					/>
					<ControlledInput name='comment' placeholder='Комментарий*' isTextarea required />
					<ControlledCheckbox
						className={styles.feedbackCheckbox}
						name='agreement'
						label='Нажимая кнопку «Отправить»,
					я даю свое согласие на обработку моих персональных данных,
					в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ
					«О персональных данных», на условиях и для целей,
					определенных в Согласии на обработку персональных данных *'
						type='checkbox'
						required
					/>
					<MainButton as='button' type='submit'>
						Отправить
					</MainButton>
				</form>
			</FormProvider>
		</div>
	)
}
