import Model from '../Models';
import status from 'http-status';

const addCategories =  (req,res, next) => {
  const Category = new Model.CategorySchema();
	const {name} = req.body;     
  console.log(name);
  if(!name) {
    console.log('name is not defined properly');
		return res.json({ msg: 'invalid information', err: error})
  }
  Category.name = name;
  console.log('Category data is here now' + Category.name);
	Category.save()
		.then(dbCategory =>{
      console.log('dbConnection is here', dbCategory);
      const categoryName = dbCategory.populate('name').execPopulate();
      console.log('After save', categoryName);
      res.status(status.CREATED).send({
				success: true,
				Message: 'Category Added succefully',
				categoryName,
			});
		})
		.catch(err => {
			// res.send(status.INTERNAL_SERVER_ERROR);
			next(new Error('unable to create the category of products'))
    });
}

const getCategories = (req,res)=>{
	Model.CategorySchema.find((err, data)=>{
		if(err) return res.json({ success: false, Message: 'category not shows please check', err: error})
		return res.json({ success: true, data: data});
  });
}  	
export default {
  addCategories,
  getCategories
} 