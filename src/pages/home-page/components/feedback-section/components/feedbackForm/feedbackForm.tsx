import React, { type FC } from 'react'
import { type FeedbackInputs } from 'src/pages/home-page/components/feedback-section/components/feedbackForm/schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import { MainButton } from 'src/UI/MainButton/MainButton'
import { OutlinedInput } from 'src/components/outlined-input/outlined-input'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'

import styles from './index.module.scss'

export const FeedbackForm: FC = () => {
	const methods = useForm<FeedbackInputs>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<FeedbackInputs> = (data) => {
		console.log(data)
	}
	return (
		<FormProvider {...methods}>
			<form className={styles.feedbackForm} onSubmit={methods.handleSubmit(onSubmit)}>
				<OutlinedInput name='name' label='Имя*' required />
				<OutlinedInput name='lastname' label='Фамилия*' required />
				<OutlinedInput name='phone' label='Телефон*' mask='+7 (999) 999-99-99' required />
				<OutlinedInput name='email' label='Электронная почта*' type='email' required />
				<OutlinedInput name='comment' label='Комментарий*' isTextarea required />
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
				<MainButton className={styles.feedbackBtn} as='button' type='submit'>
					Отправить
				</MainButton>
			</form>
		</FormProvider>
	)
}
