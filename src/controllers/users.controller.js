import { getUsersService, getUserByIdService, createUserService } from '../services/users.service.js'

export const getUsersController = (req, res) => {
    const result = getUsersService()
    res.send({ users: result })
}

export const getUserByIdController = (req, res) => {
    const id = req.params.id
    const result = getUserByIdService(id)
    res.send({ user: result })
}

export const createUserController = (req, res) => {
    const user = req.body
    const userCreated = createUserService(user)
    res.send({ user: userCreated })
}