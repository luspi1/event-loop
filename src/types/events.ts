export type EventItem = {
	id: string
	title: string
	description: string
	dateStart: string
	dateEnd: string
	person: {
		name: string
		id: string
	}
	location: {
		title: string
	}
}
