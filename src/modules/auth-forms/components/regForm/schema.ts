import * as yup from 'yup'

export type RegInputs = {
	name: string
	email: string
	password: string
	confirmPassword: string
}

export const regInputNames = ['email', 'password', 'name']

export const regSchema = yup.object({
	name: yup
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
