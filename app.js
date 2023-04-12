import express from 'express'
import routerProducts from './src/routes/products.routes.js'
import routerUsers from './src/routes/users.routes.js'
const app = express()

app.use(express.json())
app.use('/users', routerUsers)
app.use('/products', routerProducts)

app.listen(8080, () => console.log('Server Up'))