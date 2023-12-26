import express from 'express';
import CartItemsModel from './cartItems.model.js';
import CartItemsController from './cartItems.controller.js';
const cartItemsController = new CartItemsController()
const cartItemsRouter = express.Router();
cartItemsRouter.post('/', cartItemsController.add)
cartItemsRouter.get('/getcart', cartItemsController.getCartById)
cartItemsRouter.get('/udatecart', cartItemsController.updateCart )
cartItemsRouter.delete('/:cartItemID', cartItemsController.deleteCart)
export default cartItemsRouter;