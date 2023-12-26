import ProductModel from "./product.model.js";

export default class ProductController{

    getAllProducts(req, res){
        const products = ProductModel.GetAll()
        res.status(200).send(products)
    }

    addProduct(req, res){
        const {name, price, sizes, desc, category} = req.body;
        const imageUrl = req.file.filename
        const newProduct = {
            name:name,
            price:price,
            sizes: sizes.split(','),
            imageUrl: req.file.filename,
            category:category,
            desc:desc
        }
        const addedProduct = ProductModel.addProduct(name, desc, imageUrl,category, price, sizes)
        res.status(201).send(addedProduct)
    }

    rateProduct(req, res){
        const {userID, productID, rating} = req.query
        const errors = ProductModel.rateProduct(userID, productID, rating)
        if(errors){
            return res.status(400).send(errors)
        }else{
            res.status(200).send('rating has been added');
        }
    }

    getOneProduct(req, res){
        const {id} = req.params;
        const productToGive = ProductModel.getById(id);
        if(productToGive){
           return res.status(200).send(productToGive)
        }else{
           return res.status(404).send('Product Not Found')
        }
    }
    filterProducts(req, res){
        console.log(req.params)
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const category = req.query.category;
        const filterProductsFound = ProductModel.filter(minPrice, maxPrice, category)
        return res.status(200).send(filterProductsFound)
    }
}