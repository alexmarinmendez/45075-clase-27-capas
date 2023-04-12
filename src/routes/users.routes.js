import { Router } from 'express'
import { getUsersController, getUserByIdController, createUserController } from '../controllers/users.controller.js'
const router = Router()

router.get('/', getUsersController)
router.get('/:id', getUserByIdController)
router.post('/', createUserController)

export default router
