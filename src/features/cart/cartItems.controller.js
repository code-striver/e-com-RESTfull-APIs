import CartItemsModel from "./cartItems.model.js";
export default class CartItemsController{

    add(req, res){
        const {productID, quantity} = req.query;
        const userID = req.userID;
        const errors = CartItemsModel.add(productID, userID, quantity);
        if(errors){
            return res.status(401).send(errors)
        }else{
            return res.status(201).send('added to the cart')
        }
    }
    getCartById(req, res){
        const userID = req.userID;
        const result = CartItemsModel.getCartById(userID)
        return res.send(result)
    }
    updateCart(req, res){
        const userID = req.userID;
        const {productID, quantity} = req.query;
        const error = CartItemsModel.updateCart(userID, productID, quantity)
        if(error){
            return res.status(401).send(error)
        }else{
           return res.status(201).send('cart udated')
        }
    }
    deleteCart(req, res){
        const userID = req.userID;
        const cartItemID = req.params.cartItemID
        const error = CartItemsModel.deleteCartItem(cartItemID, userID)
        if(error){
           return  res.status(401).send(error)
        }else{
            return res.status(200).send('cart item deleted')
        }
    }
}