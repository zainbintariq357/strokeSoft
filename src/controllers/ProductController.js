import Model  from '../Models'

const addNewProduct = (req,res)=>{
	let data = new Model.ProductSchema();
	const {name, description, image_url, image_thumbnail_url, price, quantity, category } = req.body;
	console.log(name + " " + description + " " + image_url + " " + image_thumbnail_url + " " + price + " " + quantity + " " + category)
	if (!name || !description) {
		return res.json({
			success: false,
			error: 'Input not correct'
		});
	}
	data.name = name;
	data.description = description;
	data.image_url = image_url;
	data.image_thumbnail_url =  image_thumbnail_url;
	data.price = price;
	data.quantity = quantity;
	data.category = category;
	data.save((err)=>{
		if(err) return res.json({success: false, error: err})
		return res.json({ success: true })
  });
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