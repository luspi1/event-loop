import { type FC, useState } from 'react'
import { type authResponseData } from 'src/types/users'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import cnBind from 'classnames/bind'
import { toast } from 'react-toastify'

import { useLoginUserMutation, useRegUserMutation } from 'src/store/auth/auth.api'
import { AlertMessage } from 'src/components/alert-message/alert-message'
import { useActions } from 'src/hooks/actions/actions'

import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'

export const AuthForm: FC = () => {
	const [isAuth, setIsAuth] = useState<boolean>(true)
	const [regUser] = useRegUserMutation()
	const [serverLoginUser] = useLoginUserMutation()
	const [alert, setAlert] = useState<string>('')

	const { loginUser } = useActions()

	const navigate = useNavigate()
	const cx = cnBind.bind(styles)
	const { register, handleSubmit, reset } = useForm()

	const toggleFormType = (isReg: boolean) => {
		setIsAuth(isReg)
		setAlert('')
		reset()
	}

	const onSubmit = handleSubmit(async (dataForm) => {
		setAlert('')

		try {
			let response
			if (isAuth) {
				response = (await serverLoginUser(dataForm)) as authResponseData
			} else {
				response = (await regUser(dataForm)) as authResponseData
			}

			if (response.error) {
				setAlert(response.error.data)
			} else if (response.data) {
				loginUser({ ...response.data?.user, token: response.data?.accessToken })
				navigate(AppRoute.Home)
			}
		} catch (error) {
			toast.error(String(error))
		}
	})

	return (
		<div className={styles.authForm}>
			<div className={styles.formSwitch}>
				<button
					className={cx({ _active: isAuth })}
					type='button'
					onClick={() => toggleFormType(true)}
				>
					Авторизация
				</button>
				<button
					className={cx({ _active: !isAuth })}
					type='button'
					onClick={() => toggleFormType(false)}
				>
					Регистрация
				</button>
			</div>
			<form noValidate onSubmit={onSubmit}>
				{isAuth ? (
					<>
						<input {...register('email')} type='email' placeholder='Email' />

						<input {...register('password')} type='password' placeholder='Пароль' />
						<AlertMessage>{alert}</AlertMessage>
						<button className={styles.submitBtn} type='submit'>
							Войти
						</button>
					</>
				) : (
					<>
						<input {...register('email')} type='email' placeholder='Email' />
						<input {...register('password')} type='password' placeholder='Пароль' />
						<input {...register('name')} type='text' placeholder='Имя' />
						<input {...register('lastname')} type='text' placeholder='Фамилия' />
						<input {...register('age')} type='number' placeholder='Возраст' />
						<AlertMessage>{alert}</AlertMessage>
						<button className={styles.submitBtn} type='submit'>
							Зарегистрироваться
						</button>
					</>
				)}
			</form>
		</div>
	)
}
