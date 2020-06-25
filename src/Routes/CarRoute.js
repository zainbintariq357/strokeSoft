import Router from 'express-promise-router'; 
import carArea from '../controllers/carController';
import paramsValidator from '../helpers';
const router = new Router();

// const user  = express.Router();

router.route('/cars')
  .get(carArea.index)
  .post(paramsValidator.validateBody(paramsValidator.schemas.carSellerSchema), carArea.newCar)
router.route('/cars/:carId')
  .get(paramsValidator.validateParams(paramsValidator.schemas.IdSchema, 'carId'), carArea.getCarById)    
  .put([paramsValidator.validateParams(paramsValidator.schemas.IdSchema, 'carId'),
      paramsValidator.validateBody(paramsValidator.schemas.putCarSchema)], carArea.replaceCar)
  .patch([paramsValidator.validateParams(paramsValidator.schemas.IdSchema, 'carId'),
        paramsValidator.validateBody(paramsValidator.schemas.putCarOptionalSchema)], carArea.updateCar)        
	.delete(paramsValidator.validateParams(paramsValidator.schemas.IdSchema, 'carId'), carArea.deleteCar)
				export default router;