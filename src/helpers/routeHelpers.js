import joi from '@hapi/joi';

const paramsValidation = {
	validateParams: (schema, name) => {
		return (req,res,next) =>{
			console.log('the behind id is '+ req.params.userId);
			const result = schema.validate({param: req['params'][name]},{abortEarly: false});  
			if(result.error) {
				res.status(500).json({message: 'data can not be fetched'});
				console.log('Erorr have been occured now');
			} else {
				console.log('the result value is now' + result.value.param);
				if(!req.value) {
					req.value={}
				}
				if(!req.value['params'])  {
					req.value['params'] = {}
				}
				req.value['params'][name] = result.value.param;
				next()
			}
		} 
	},
	validateBody: (schema) => {
		return (req,res,next)=>{
			const result = schema.validate(req.body)
			if(result.error) {
				res.status(500).json({message: 'your body is incorrect'})
			} else {
				if(!req.value) {
					req.value = {}
				}
				if(!req.value['body']) {
					req.value['body']= {}
				}
				req.value['body'] = result.value;
				next();
			}
		}
	},
	schemas: {
		userSchema : joi.object().keys({
			firstName: joi.string().required(),
			lastName: joi.string().required(),
			email: joi.string().required()
		}),
		userSchemaOptional : joi.object().keys({
			firstName: joi.string(),
			lastName: joi.string(),
			email: joi.string()
		}),
		carSchema: joi.object().keys({
			make: joi.string().required(),
			model: joi.string().required(),
			Name: joi.string().required() 
		}),
		putCarSchema: joi.object().keys({
			make: joi.string().required(),
			model: joi.string().required(),
			Name: joi.string().required() 
		}),
		putCarOptionalSchema: joi.object().keys({
			make: joi.string(),
			model: joi.string(),
			Name: joi.string() 
		}),
		carSellerSchema: joi.object().keys({
			seller: joi.string().regex(/^[0-9a-fA-f]{24}$/).required(),
			make: joi.string().required(),
			model: joi.string().required(),
			Name: joi.string().required()
		}),	

		IdSchema : joi.object().keys({
			param : joi.string().regex(/^[0-9a-fA-f]{24}$/).required() 
		})
	}   
}
export default paramsValidation;