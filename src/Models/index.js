import DataSchema from './DataModel';
import BookSchema from './BookModel';
import AuthorSchema from './AuthorModel';
import CategorySchema from './CategoryModel';
import ProductSchema from './ProductModel';

class Model {
	static get DataSchema(){
		return DataSchema;
	}
	static get BookSchema() {
		return BookSchema;
	}
	static get AuthorSchema() {
		return AuthorSchema;
	}
	static get ProductSchema() {
		return ProductSchema;
	}
	static get CategorySchema() {
		return CategorySchema;
	}
}
export default Model;
