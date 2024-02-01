import { users } from '../mockData/users.mjs'

export const getUsers = (req, res) => {
	const { q } = req.query

	const filteredUsers = users.filter((el) => el.fullname.toLowerCase().includes(q))

	res.status(200).json(filteredUsers)
}
export const getUserById = (req, res) => {
	const userId = req.params.id
	const foundUser = users.find((user) => user.id === userId)

	res.status(200).json(foundUser)
}
export const getUsersObject = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredObjects = searchedUser.objects.filter((object) =>
		object.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredObjects)
}
