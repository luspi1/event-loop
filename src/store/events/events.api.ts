// import { type EventItem } from 'src/types/events'
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//
// import { ReducerPath } from 'src/helpers/consts'
// import { allEventsReference } from 'src/helpers/firebaseConfig'
//
// export const eventsApi = createApi({
// 	reducerPath: ReducerPath.Events,
// 	tagTypes: ['Events'],
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: '/api',
// 	}),
// 	endpoints: (build) => ({
// 		getAllEvents: build.query<EventItem[], null>({
// 			query: () => allEventsReference.o,
// 		}),
// 	}),
// })
//
// export const {} = eventsApi
