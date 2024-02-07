import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { type RegInputs, regSchema } from 'src/modules/auth-forms/components/regForm/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { auth } from 'src/helpers/firebaseConfig'
import { useActions } from 'src/hooks/actions/actions'
import { toast } from 'react-toastify'

export const RegForm: FC = () => {
	const methods = useForm<RegInputs>({
		mode: 'onBlur',
		resolver: yupResolver(regSchema),
	})

	const { loginUser } = useActions()
	const onSubmit: SubmitHandler<RegInputs> = async ({ email, password, displayName }) => {
		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password)
			await updateProfile(user, { displayName })
			loginUser(user)
		} catch (error) {
			toast.warn('Пользователь уже существует')
		}
	}
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
				<ControlledInput name='displayName' placeholder='Введите ваше имя или никнейм' />
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
