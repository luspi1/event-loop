import { type FC } from 'react'
import { type EventItem } from 'src/types/events'

import { formatDate1 } from 'src/helpers/utils'

import styles from './index.module.scss'

type EventsListProps = {
	events: EventItem[] | undefined
}
export const EventsList: FC<EventsListProps> = ({ events }) => {
	if (!events?.length) return <h3>Нет событий</h3>

	return (
		<ul className={styles.eventsList}>
			{events.map((event) => (
				<li key={event.id}>
					<h3>{event.title}</h3>
					<p>{event.description}</p>
					<h4>Даты проведения:</h4>
					<p>
						{formatDate1(event.dateStart)} - {formatDate1(event.dateEnd)}
					</p>
				</li>
			))}
		</ul>
	)
}
