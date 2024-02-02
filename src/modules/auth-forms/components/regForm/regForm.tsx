import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { type RegInputs, regSchema } from 'src/modules/auth-forms/components/regForm/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { auth } from 'src/helpers/firebaseConfig'

export const RegForm: FC = () => {
	const methods = useForm<RegInputs>({ mode: 'onBlur', resolver: yupResolver(regSchema) })
	const onSubmit: SubmitHandler<RegInputs> = async ({ email, password }) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password)
			const user = userCredential.user
			console.log(user)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
				<ControlledInput name='name' placeholder='Введите ваше имя или никнейм' />
				<ControlledInput name='email' placeholder='Введите email' type='email' />
				<ControlledInput name='password' placeholder='Придумайте пароль' type='password' />
				<ControlledInput name='confirmPassword' placeholder='Повторите пароль' type='password' />
				<MainButton as='button' type='submit'>
					Зарегистрироваться
				</MainButton>
			</form>
		</FormProvider>
	)
}
