import { type FC } from 'react'
import { type FirebaseErr } from 'src/types/firebase'

import { type LoginInputs, loginSchema } from 'src/modules/auth-forms/components/loginForm/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { useActions } from 'src/hooks/actions/actions'
import { auth } from 'src/helpers/firebaseConfig'

export const LoginForm: FC = () => {
	const methods = useForm<LoginInputs>({ mode: 'onBlur', resolver: yupResolver(loginSchema) })

	const { loginUser } = useActions()
	const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password)
			const user = userCredential.user
			loginUser(user)
		} catch (err) {
			const fireError: FirebaseErr = err as FirebaseErr
			toast.warn(fireError.code)
		}
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
				<ControlledInput name='email' placeholder='Email' type='email' />
				<ControlledInput name='password' placeholder='Пароль' type='password' />
				<MainButton as='button' type='submit'>
					Войти
				</MainButton>
			</form>
		</FormProvider>
	)
}
