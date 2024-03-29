import { type FC } from 'react'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { type EventInputs, eventSchema } from 'src/modals/event-modal/schema'
import { yupResolver } from '@hookform/resolvers/yup'

import { Modal } from 'src/components/modal/modal'
import { useActions } from 'src/hooks/actions/actions'
import { useAppSelector } from 'src/hooks/store'
import { getEventModalState } from 'src/store/modals/modals.selectors'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { push } from 'firebase/database'
import { toast } from 'react-toastify'
import { allEventsReference } from 'src/helpers/firebaseConfig'

import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { getCurrentUser } from 'src/store/auth/auth.selectors'

import styles from './index.module.scss'
import { ControlledSuggestAddress } from 'src/components/controlled-suggest-address/controlled-suggest-address'

export const EventModal: FC = () => {
	const { setEventModal } = useActions()
	const { isActive } = useAppSelector(getEventModalState)
	const currentUser = useAppSelector(getCurrentUser)

	const methods = useForm<EventInputs>({
		mode: 'onChange',
		resolver: yupResolver(eventSchema),
	})
	const onSubmit: SubmitHandler<EventInputs> = async (data) => {
		const formattedData = {
			...data,
			location: {
				title: data.location,
			},
			person: {
				name: currentUser?.name,
				id: currentUser?.id,
			},
			dateStart: data.dateStart.toISOString(),
		}

		try {
			await push(allEventsReference, formattedData)
			setEventModal({ isActive: false })
			methods.reset()
		} catch (error) {
			toast.warn((error as Error).message)
		}
	}

	const handleCloseModal = () => {
		setEventModal({ isActive: false })
		methods.reset()
	}

	return (
		<Modal active={isActive ?? false} className={styles.eventModal} customClose={handleCloseModal}>
			<h2>Новое событие</h2>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
					<ControlledInput
						className={styles.eventModalInput}
						name='title'
						label='Название события'
					/>
					<ControlledInput
						className={styles.eventModalInput}
						name='description'
						label='Описание события'
						isTextarea
					/>

					<ControlledSuggestAddress name='location' label='Место события' />

					<ControlledDateInput
						className={styles.eventModalInput}
						name='dateStart'
						label='Дата и время начала события'
						dateFormat='dd-MM-yyyy, HH:mm'
						showTimeSelect
					/>

					<MainButton as='button' type='submit'>
						Создать событие
					</MainButton>
				</form>
			</FormProvider>
		</Modal>
	)
}
