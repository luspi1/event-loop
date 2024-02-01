import React, { type FC } from 'react'

import { SearchIconSvg } from 'src/UI/icons/searchIconSVG'

import styles from './index.module.scss'
import cn from 'classnames'

type TableSearchProps = {
	handleSearch: (e: string) => void
	wrapperClassName?: string
}

export const TableSearch: FC<React.InputHTMLAttributes<HTMLInputElement> & TableSearchProps> = ({
	handleSearch,
	wrapperClassName,
	...props
}) => {
	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleSearch(e.currentTarget.value.toLowerCase())
	}

	return (
		<div className={cn(styles.searchWrapper, wrapperClassName)}>
			<SearchIconSvg />
			<input {...props} type='text' onInput={onChangeSearchInput} />
		</div>
	)
}
