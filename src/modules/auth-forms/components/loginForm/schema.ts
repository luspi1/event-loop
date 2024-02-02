import * as yup from 'yup'

export type LoginInputs = {
	email: string
	password: string
}

export const loginInputNames = ['email', 'password']

export const loginSchema = yup.object({
	email: yup.string().email('неправильный формат email').required('Введите e-mail'),
	password: yup
		.string()
		.required('Введите пароль')
		.min(6, 'Пароль должен содержать не менее 6 символов'),
})
