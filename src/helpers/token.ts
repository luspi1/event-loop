export const saveToken = (token: string): void => {
	localStorage.setItem('token', token)
}

export const dropToken = (): void => {
	localStorage.removeItem('token')
}
