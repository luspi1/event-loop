import { type FC, useState } from 'react'
import { type RegInputs } from 'src/modules/auth-forms/components/regForm/schema'
import { type LoginInputs } from 'src/modules/auth-forms/components/loginForm/schema'

import { useForm } from 'react-hook-form'
import cnBind from 'classnames/bind'

import { LoginForm } from 'src/modules/auth-forms/components/loginForm/loginForm'
import { RegForm } from 'src/modules/auth-forms/components/regForm/regForm'

import styles from './index.module.scss'

export const AuthForms: FC = () => {
	const [isAuth, setIsAuth] = useState<boolean>(true)

	const cx = cnBind.bind(styles)
	const methods = useForm<LoginInputs | RegInputs>()
	const toggleFormType = (isReg: boolean) => {
		setIsAuth(isReg)
		methods.reset()
	}

	return (
		<div className={styles.authForms}>
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

			{isAuth ? <LoginForm /> : <RegForm />}
		</div>
	)
}
