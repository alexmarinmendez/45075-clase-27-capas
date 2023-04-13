import { getUsersService, getUserByIdService, createUserService } from '../services/users.service.js'
import { success, error } from '../responses/users.response.js'

export const getUsersController = (req, res) => {
    const result = getUsersService()
    return success(res, result)
}

export const getUserByIdController = (req, res) => {
    const id = req.params.id
    const result = getUserByIdService(id)
    if (!result) return error(res)
    return success(res, result)
}

export const createUserController = (req, res) => {
    const user = req.body
    const result = createUserService(user)
    return success(res, result)
}