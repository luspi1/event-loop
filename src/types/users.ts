export type User = {
	id: number
	age: string
	email: string
	name: string
	lastname: string
	password: string
	token: string
}

export type authResponseData = {
	error?: {
		status: number
		data: string
	}
	data?: {
		accessToken: string
		user: User
	}
}
