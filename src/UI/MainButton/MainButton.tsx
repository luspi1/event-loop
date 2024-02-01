import React, { type FC, type ReactNode } from 'react'
import cnBind from 'classnames/bind'
import styles from './index.module.scss'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonComponentProps = {
	as: 'link' | 'button'
	children?: ReactNode
	svgNode?: ReactNode
}

export const MainButton: FC<ButtonComponentProps & (ButtonProps | AnchorProps)> = ({
	children,
	svgNode,
	as,
	...props
}) => {
	const cx = cnBind.bind(styles)

	if (as === 'link')
		return (
			<a
				{...(props as AnchorProps)}
				className={cx(styles.mainButton, props.className, { _iconInput: svgNode })}
			>
				{svgNode}
				{children}
			</a>
		)
	if (as === 'button')
		return (
			<button
				{...(props as ButtonProps)}
				className={cx(styles.mainButton, props.className, { _iconInput: svgNode })}
			>
				{svgNode}
				{children}
			</button>
		)
	return null
}
