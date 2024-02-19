import React, { type FC } from 'react'
import cn from 'classnames'
import { Controller, useFormContext } from 'react-hook-form'
import { AddressSuggestions } from 'react-dadata'
import { ErrorMessage } from '@hookform/error-message'

import styles from './index.module.scss'

type ControlledSuggestAddressProps = {
	name: string
	label?: string
	className?: string
}

const SUGGEST_TOKEN = import.meta.env.VITE_DADATA_API_KEY
export const ControlledSuggestAddress: FC<ControlledSuggestAddressProps> = ({
	name,
	label,
	className,
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()
	return (
		<div className={cn(styles.suggestInput, className)}>
			<label>
				{label && <p>{label}</p>}
				<Controller
					control={control}
					name={name}
					render={({ field }) => <AddressSuggestions {...field} token={SUGGEST_TOKEN} />}
				/>
			</label>

			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</div>
	)
}
