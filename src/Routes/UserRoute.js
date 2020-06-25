import express from 'express';
import Model from '../Models'
const userRoute  = express.Router();

userRoute.get('/getusers',(req,res)=>{
	Model.UserSchema.find()
		.then(users =>res.json(users))
		.catch(err => res.status(400).json({ 'Error ++..': err }))
})

userRoute.post('/addusers', (req, res)=>{
	const { username } = req.body;
	const user = new Model.UserSchema({
		username	
	})
	user.save()
		.then(() => res.send('user added'))
		.catch((err) => res.status(400).send('Error ++'+ err))
});

export default userRoute;