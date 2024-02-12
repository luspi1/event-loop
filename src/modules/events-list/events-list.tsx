import { type FC } from 'react'

import styles from './index.module.scss'
import { formatDate2 } from 'src/helpers/utils'

type Event = {
	id: string
	title: string
	description: string
	dateStart: Date
	dateEnd: Date
}

type EventsListProps = {
	events: Event[] | undefined
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
						{formatDate2(event.dateStart)} - {formatDate2(event.dateEnd)}
					</p>
				</li>
			))}
		</ul>
	)
}
