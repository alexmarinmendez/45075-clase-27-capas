let users = []
let counter = 0

export const getUsersService = () => {
    return users
}

export const getUserByIdService = (id) => {
    const result = users.find(item => item.id == id)
    return result
}

export const createUserService = (user) => {
    user.id = ++counter
    users.push(user)
    return user
}