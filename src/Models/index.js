import DataSchema from './DataModel';
import BookSchema from './BookModel';
import AuthorSchema from './AuthorModel';
import CategorySchema from './CategoryModel';
import ProductSchema from './ProductModel';
import UserSchema from './UserModel';
import ExerciseSchema from './ExerciseModel';
import UserSchema1 from './User';
import CarSchema from './Car';
import FileSchema from './PicModel';
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
	static get UserSchema() {
		return UserSchema;
	}
	static get ExerciseSchema() {
		return ExerciseSchema;
	}
	static get UserSchema1() {
		return UserSchema1;
	}
	static get CarSchema() {
		return CarSchema;
	}
	static get FileSchema() {
		return FileSchema;
	}
}

export default Model;
