import User from '../Models';
import joi from '@hapi/joi';

const IdSchema  =  joi.object().keys({
	userId : joi.string()
		.pattern(new RegExp('^[0-9a-fA-f]{24}$'))
		.required()
		.messages({
			'string.base': `"userId" should be type of 'text'`,
			'string.empty': `"userId can not be empty field"`,
			'any.required': `"üserId is a required field"`
		})
});
const usersArea =  {
	index: async (req,res,next)=>{
		try {
			const users = await User.UserSchema1.find({})
			res.status(200).json(users)
		} 
		catch(err) {
			next(err)
		}
	},
	// Validation Done
	addUser: async (req,res,next)=>{
		try {
			const newUser = new User.UserSchema1(req.value.body);
			const user = await newUser.save()
			res.status(200).json(user)
		} catch(err) {
			next(err)
		}
	},
	//validation Done
	getUser: async (req,res,next)=>{
		const {userId} = req.value.params;
		const user = await User.UserSchema1.findById(userId);
		res.status(200).json(user)
	},
	// validation done now
	replaceUser: async (req, res, next) =>{
		const {userId} = req.value.params;
		const newUser =  req.value.body;
		const user = await User.UserSchema1.findByIdAndUpdate(userId,newUser);
		res.status(200).json(user);
	},
	// validation done now
	updateUser: async (req,res,next) =>{
		const {userId} = req.value.params;
		const newUser = req.value.body;
		const user = await User.UserSchema1.findByIdAndUpdate(userId,newUser);
		res.status(200).json(user);
	},
	getUserCars: async (req,res,next) =>{
		const { userId } = req.value.params;
		const user = await User.UserSchema1.findById(userId).populate('cars');
		res.status(200).json(user);
	},
	addUserCars: async (req,res,next) =>{
		const {userId} = req.value.params;
		const car = req.value.body;

		const newCar = new User.CarSchema(car)

		console.log('The added new Car is' + newCar);
		
		let userCar = await User.UserSchema1.findById(userId);

		console.log('The user will be here' + userCar);

		newCar.seller = userCar;
		
		console.log('seller car will be' + newCar)
		
		await newCar.save();
		
		await userCar.cars.push(newCar._id);

		console.log('the user cars are' + userCar);

		await userCar.save();

		res.status(200).json(userCar)
	}
}

export default usersArea;