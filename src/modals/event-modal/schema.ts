import * as yup from 'yup'
import { type ObjectSchema } from 'yup'

export type EventInputs = {
	title: string
	dateStart: Date
	description: string
}

export const eventSchema: ObjectSchema<EventInputs> = yup.object({
	title: yup
		.string()
		.required('Введите название')
		.min(6, 'Минимум 6 символов')
		.max(50, 'Максимум 50 символов'),
	dateStart: yup.date().typeError('Неверный формат даты').required('Введите дату'),
	description: yup
		.string()
		.required('Введите описание')
		.min(6, 'Минимум 6 символов')
		.max(300, 'Максимум 300 символов'),
})
