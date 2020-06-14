import express from 'express';
import category from '../controllers/CategoryController';
const CategoryRouter = express.Router();

CategoryRouter.post('/createCategory',category.addCategories);

CategoryRouter.get('/getCategory', category.getCategories);

export default CategoryRouter;