import * as yup from 'yup'

export type RegInputs = {
	displayName: string
	email: string
	password: string
	confirmPassword: string
}

export const regInputNames = ['email', 'password', 'displayName']

export const regSchema = yup.object({
	displayName: yup
		.string()
		.required('Введите имя')
		.matches(/^[A-Za-zА-Яа-яz]+$/, 'Допускаются только буквы'),
	email: yup.string().email('неправильный формат email').required('Введите e-mail'),
	password: yup
		.string()
		.required('Введите пароль')
		.min(6, 'Пароль должен содержать не менее 6 символов'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Пароли должны совпадать')
		.required('Подтвердите пароль'),
})
