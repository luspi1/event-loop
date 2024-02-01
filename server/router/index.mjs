import {
	getUserById,
	getUsers,
	getUsersObject,
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.get('/users/:id/object', getUsersObject)


