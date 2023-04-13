export const success = (res, data) => {
    res.send({ message: 'success', data })
}

export const error = (res) => {
    res.send({ error: 'error' })
}