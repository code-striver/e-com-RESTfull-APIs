//for managing all the routes going to product controller
import express from 'express';
import uploadMiddleware from '../../middlewares/fileupload.middleware.js';
import ProductController from './product.controller.js';
const productController = new ProductController()
const productRouter = express.Router();
productRouter.post('/rate', productController.rateProduct)
productRouter.get('/filter', productController.filterProducts)
productRouter.get('/', productController.getAllProducts)
productRouter.post('/', uploadMiddleware.single('imageUrl'), productController.addProduct)
productRouter.get('/:id', productController.getOneProduct)


export default productRouter;