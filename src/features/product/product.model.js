
import UserModel from "../user/user.model.js";
export default class ProductModel{
    constructor(id, name, desc,price, imageUrl, category, sizes){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.category = category;
        this.price = price;
        this.sizes = sizes;
    }
    static GetAll(){
        return products;
    }
    static addProduct(name, desc, imageUrl,category, price, sizes){
        const newProduct = new ProductModel(products.length+1, name, desc, imageUrl, category, price, sizes)
        products.push(newProduct);
        return newProduct;
    }
    static getById(id){
      const productFoundById = products.find((product)=> product.id == id)
      return productFoundById
    }
    static filter(minPrice, maxPrice, category){
      const filteredProducts = products.filter((product)=>{
        if(!minPrice){
          if(!category){
           return product.price<= maxPrice
          }else{
            return product.price<= maxPrice && product.category == category
          }
        }else if(!maxPrice){
          if(!category){
           return product.price >= minPrice
          }else{
           return product.price >= minPrice && product.category == category
          }
        }else if(!category && minPrice &&maxPrice){
         return product.price >= minPrice && product.price<= maxPrice
        }
      })
      return filteredProducts
    }
    static rateProduct(userID, productID, rating){
    const product =  products.find((product)=> product.id == productID)
    if(!product){
      return 'Product not found'
    }
    const user = UserModel.getAll().find((user)=>user.id == userID)
    if(!user){
      return 'User not found'
    }
    if(!product.ratings){
      product.ratings = [];
      product.ratings.push({userID:userID, rating:rating})
    }
      const existingRatingIndex = product.ratings.findIndex((rating)=>rating.userID == userID)
      if(existingRatingIndex>=0){
        product.ratings[existingRatingIndex] = {userID:userID, rating:rating}
      }else{
       
        product.ratings.push({userID:userID, rating:rating})
      }
    
    }
}

var products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 1',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      'Cateogory1'
    ),
    new ProductModel(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
      'Cateogory2',
      ['M', 'XL']
    ),
    new ProductModel(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
      'Cateogory3',
      ['M', 'XL','S']
    )];