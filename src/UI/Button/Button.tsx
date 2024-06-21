import React, { type FC } from 'react'

type ButtonProps = {
	children: React.ReactNode
	appearance: 'primary' | 'outlined'
}
export const Button: FC<ButtonProps> = ({ children }) => {
	return <button>{children}</button>
}
