import ProductModel from "../product/product.model.js";
import UserModel from "../user/user.model.js";
export default class CartItemsModel{
    constructor(id, productID, userID, quantity){
        this.userID = userID;
        this.productID = productID;
        this.quantity = quantity;
        this.id = id;
    }
    static add(productID, userID, quantity){
        const product = ProductModel.GetAll().find((product)=> product.id == productID)
        if(!product){
            return 'Product not found!!'
        }
        const user = UserModel.getAll().find((user)=>user.id == userID)
        if(!user){
            return 'User not found'
        }
        new CartItemsModel(cartItemsArray.length +1,
            productID, userID, quantity)
        }
        static getCartById(userID){
        const user = UserModel.getAll().find((user)=>user.id == userID)
        if(!user){
            return 'User not found'
        }else{
            const userCartsItems = cartItemsArray.filter((item)=>item.userID==userID)
            return userCartsItems
        }
        }
        static updateCart(userID, productID, quantity){
            
            const user = UserModel.getAll().find((user)=>user.id == userID)
            if(!user){
                return 'user not found'
            }
            const product = ProductModel.GetAll().find((product)=>product.id == productID)
            if(!product){
                return 'product not found'
            }
            const itemToUpdate = cartItemsArray.find((item)=>item.userID==userID
            && item.productID == productID)
            if(!itemToUpdate){
                return 'cart not found'
            }else{
                itemToUpdate.quantity = quantity
            }
        }
        static deleteCartItem(cartItemID, userID){
            const itemToDelete = cartItemsArray.find((item)=>item.id == cartItemID &&
            item.userID == userID)
            if(!itemToDelete){
                return 'item not found'
            }else{
                const itemToDeleteIndex = cartItemsArray.findIndex((item)=>item.id == cartItemID)
                cartItemsArray.splice(itemToDeleteIndex, 1)
            }
        }
}

let cartItemsArray = [new CartItemsModel(1, 2, 2, 1), new CartItemsModel(2, 3, 2, 2)]