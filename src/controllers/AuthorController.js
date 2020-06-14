import Model from '../Models';

const AuthController = {
	async index(req, res) {
		const authors = await Model.AuthorSchema.find().populate('books');
		res.send(authors);
	},
	async show(req,res) {
		const author = await Model.AuthorSchema.findById(req.params.id).populate('books');
		res.send(author); 
	}
};
export default  {
	AuthController
}