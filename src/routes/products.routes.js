import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
    res.send('ok en GET /products')
})

router.get('/:id', (req, res) => {
    res.send('ok en GET by ID /products')
})


router.post('/', (req, res) => {
    res.send('ok en POST /products')
})

export default router
