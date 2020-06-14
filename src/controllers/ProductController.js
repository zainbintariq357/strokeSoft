import Model  from '../Models'
import status from 'http-status';

const addNewProduct = (req,res, next)=>{
	const productModel = new Model.ProductSchema();
	const {name, description, image_url, image_thumbnail_url, price, quantity, category } = req.body;
	if (!name || !description) {
		return res.json({
			success: false,
			error: 'Input not correct'
		});
	}
	productModel.name = name;
	productModel.description = description;
	productModel.image_url = image_url;
	productModel.image_thumbnail_url =  image_thumbnail_url;
	productModel.price = price;
	productModel.quantity = quantity;
	productModel.category = category;
	console.log('productModel is now here' + productModel);
	productModel.save()
		.then(dbProduct =>{
			console.log('DBProduct is now' + dbProduct);
			const product =dbProduct.populate('name').execPopulate();
			console.log("After quering the data is" + product);
			res.status(status.CREATED).json({
				success: true,
				Message: 'Product added succesffully',
				product,
			});
		})
		.catch(err =>{
			console.log('err occured here now');
			// res.statusCode(status.INTERNAL_SERVER_ERROR);
			// next(new Error('unable to create the product'))
		});
	// data.save((err)=>{
	// 	if(err) return res.json({success: false, error: err})
	// 	return res.json({ success: true })
//   });
}
const getAllProducts = (req,res) =>{
	Model.ProductSchema.find((err, data)=>{
		if(err) return res.json({success: false, error: err});
		return res.json({ success: true, data: data});
	});		
}
export default {
	addNewProduct,
	getAllProducts
}  