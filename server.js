import express from 'express';

import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.route.js';
import cartItemsRouter from './src/features/cart/cartItems.routes.js';
import bodyPaser from 'body-parser'
import jwtAuth from './src/middlewares/jwt.middleware.js';

const server = express();
server.use(bodyPaser.json())

server.use('/api/products', jwtAuth, productRouter)
server.use('/api/users', userRouter)
server.use('/api/cartitems', jwtAuth, cartItemsRouter)
server.get('/', (req, res)=>{
    res.send('Welcome to E-com APIs')
})
server.listen(3100, ()=>{
    console.log('API serer is running on port number 3100')
})
