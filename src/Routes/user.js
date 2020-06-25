import express from 'express';
import Router from 'express-promise-router'; 
import userArea from '../controllers/usercontroller';
import paramsValidator from '../helpers';
const router = new Router();

// const user  = express.Router();

router.route('/user')
	.get(userArea.index)
	.post(paramsValidator.validateBody(paramsValidator.schemas.userSchema), userArea.addUser);

router.route('/user/:userId')
	.get(paramsValidator.validateParams(paramsValidator.schemas.IdSchema, 'userId'), userArea.getUser)	
	.put([paramsValidator.validateParams(paramsValidator.schemas.IdSchema, 'userId'),
		paramsValidator.validateBody(paramsValidator.schemas.userSchema)],	
		userArea.replaceUser)
	.patch([
		paramsValidator.validateParams(paramsValidator.schemas.IdSchema, 'userId'),
		paramsValidator.validateBody(paramsValidator.schemas.userSchemaOptional)],
		userArea.updateUser)
router.route('/user/:userId/cars')
	.get( paramsValidator.validateParams(paramsValidator.schemas.IdSchema, 'userId'), userArea.getUserCars)
	.post([paramsValidator.validateParams(paramsValidator.schemas.IdSchema, 'userId'),
	 paramsValidator.validateBody(paramsValidator.schemas.carSchema)], userArea.addUserCars)		

export default router;