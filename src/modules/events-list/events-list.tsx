import { type FC } from 'react'
import { type EventItem } from 'src/types/events'

import { formatDate1 } from 'src/helpers/utils'

import styles from './index.module.scss'
import { PersonIconSvg } from 'src/UI/icons/personIconSVG'
import { LocationIconSvg } from 'src/UI/icons/locationIconSVG'
import { TimeIconSvg } from 'src/UI/icons/timeIconSVG'

type EventsListProps = {
	events: EventItem[] | undefined
}
export const EventsList: FC<EventsListProps> = ({ events }) => {
	if (!events?.length) return <h3>Нет событий</h3>

	return (
		<ul className={styles.eventsList}>
			{events.map((event) => (
				<li key={event.id}>
					<div className={styles.eventHead}>
						<h3>{event.title}</h3>
						<p className={styles.eventDesc}>{event.description}</p>
					</div>

					<div className={styles.eventBody}>
						<p>
							<PersonIconSvg />
							{event.person.name}
						</p>
						<p>
							<LocationIconSvg />
							{event.location.title}
						</p>
						<p>
							<TimeIconSvg />
							{formatDate1(event.dateStart)} -<br /> {formatDate1(event.dateEnd)}
						</p>
					</div>
				</li>
			))}
		</ul>
	)
}
