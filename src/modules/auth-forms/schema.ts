import * as yup from 'yup'

export type AuthInputs = {
	secondName: string
	name: string
	email: string
	mobileNumber: string
	password: string
	confirmPassword: string
	typeAcc?: string
	typeEmployee?: string
	position?: string
	patronymicName?: string
	alias?: string
	isServiceAcc?: boolean
	isActiveEmployee?: boolean
}

export const authInputNames = []

export const authSchema = yup.object({
	secondName: yup
		.string()
		.required('Введите фамилию')
		.matches(/^[A-Za-zА-Яа-яz]+$/, 'Допускаются только буквы'),
	name: yup
		.string()
		.required('Введите имя')
		.matches(/^[A-Za-zА-Яа-яz]+$/, 'Допускаются только буквы'),
	email: yup.string().email('неправильный формат email').required('Введите e-mail'),
	mobileNumber: yup.string().required('Введите номер'),
	password: yup
		.string()
		.required('Введите пароль')
		.min(6, 'Пароль должен содержать не менее 6 символов'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Пароли должны совпадать')
		.required('Подтвердите пароль'),
	patronymicName: yup.string().matches(/^[A-Za-zА-Яа-яz]*$/, 'Допускаются только буквы'),
})
