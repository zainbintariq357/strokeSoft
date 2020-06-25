import Model from '../Models';
const carArea = {
	index: async (req,res,next) =>{
		const cars = await Model.CarSchema.find({})
		console.log(cars);
		res.status(200).json(cars);
	},
	newCar: async (req,res,next) => {
		const seller = await Model.UserSchema1.findById(req.value.body.seller);
		console.log('the seller cars is here now'+ seller.cars);
		const car = req.value.body;
		delete car.seller;
		console.log('your seller is ' + seller);

		const newCar = Model.CarSchema(car);
		newCar.seller = seller;
		await newCar.save();

		await seller.cars.push(newCar);

		await seller.save();

		console.log(seller.cars);
		res.status(200).json({message: 'successfully created now'});

		console.log('your car body will be now'+ car.seller);
	},
	getCarById: async (req,res,next) =>{
		const car = await Model.CarSchema.findById(req.value.params.carId);
		res.status(200).json(car);	
	},
	replaceCar: async (req,res,next) =>{
		const {carId} = req.value.params;
		const newcar = req.value.body;

		console.log('the userId to replace is now'+ carId);
		console.log('The new Use to update is now'+ newcar);

		const car = await Model.CarSchema.findByIdAndUpdate(carId, newcar);
		console.log('car updated successfully', car);
		res.status(200).json(car);
	},
	updateCar: async (req,res,next) =>{
		const {carId} = req.value.params;
		const newcar = req.value.body;

		console.log('the userId to replace is now'+ carId);
		console.log('The new Use to update is now'+ newcar);

		const car = await Model.CarSchema.findByIdAndUpdate(carId, newcar);
		console.log('car updated successfully', car);
		res.status(200).json(car);
	},
	deleteCar: async (req,res,next) =>{
		const {carId} = req.value.params;

		const car= await Model.CarSchema.findById(carId);

		if(!car) {
			return res.status(400).json('id cannot be here')
		}
		const sellerId = car.seller;

		const userCar = await Model.UserSchema1.findById(sellerId);

		await car.remove();
		
		await userCar.cars.pull(car)

		await userCar.save();

		res.status(200).json({message: 'it can be deleted successfully now'});

		
	}


}
export default carArea;
