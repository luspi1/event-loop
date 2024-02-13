import { type FC, useEffect, useState } from 'react'
import { type EventItem } from 'src/types/events'

import { EventsList } from 'src/modules/events-list/events-list'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { PlusIconSvg } from 'src/UI/icons/plusIconSVG'
import { EventModal } from 'src/modals/event-modal/event-modal'
import { useActions } from 'src/hooks/actions/actions'
import { onValue } from 'firebase/database'
import styles from './index.module.scss'
import { allEventsReference } from 'src/helpers/firebaseConfig'
import { formatFbData } from 'src/helpers/utils'

export const EventsPage: FC = () => {
	const { setEventModal } = useActions()

	const [allEvents, setAllEvents] = useState<EventItem[]>([])

	useEffect(() => {
		onValue(allEventsReference, (snapshot) => {
			const data: Record<string, EventItem> = snapshot.val()
			setAllEvents([...formatFbData<EventItem>(data)])
		})
	}, [])

	return (
		<div className={styles.eventsPage}>
			<EventModal />
			<section>
				<h2 className={styles.sectionTitle}>Организую:</h2>
				<EventsList events={[]} />
				<MainButton
					className={styles.newEvtBtn}
					as='button'
					svgNode={<PlusIconSvg />}
					onClick={() => setEventModal({ isActive: true })}
				>
					Новое событие
				</MainButton>
			</section>
			<section>
				<h2 className={styles.sectionTitle}>Участвую:</h2>
				<EventsList events={[]} />
			</section>
			<section>
				<h2 className={styles.sectionTitle}>Все события:</h2>
				<EventsList events={allEvents} />
			</section>
		</div>
	)
}
