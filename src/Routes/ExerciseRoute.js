import express from 'express';
import Model from '../Models'
const exerciseRoute  = express.Router();

// Get all Exercises 
exerciseRoute.get('/getexercise',(req,res)=>{
	Model.ExerciseSchema.find()
		.then(exercise =>res.json(exercise))
		.catch(err => res.status(400).json({ 'Error ++..': err }));
})

//Add the new exercise into the database 
exerciseRoute.post('/addexercise', (req, res)=>{	
	console.log(req.body);
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);

	const exercise = new Model.ExerciseSchema({
		username,
		description,
		duration,
		date
	});
	console.log("duration is now" + exercise.duration);
	console.log("date is now" + exercise.date);

	exercise.save()
		.then(() => res.send('A new Exercise will be added now'))
		.catch((err) => res.status(400).send('Error ++'+ err))
});

// Get specific exercise by their if
exerciseRoute.get('/exercise/:id', (req,res)=> {
	Model.ExerciseSchema.findById(req.params.id)
		.then((exercise) => res.json(exercise))
		.catch(err => res.json('Error occured' + err));
});

// Delete specific exercise by id
exerciseRoute.delete('/exercise/:id', (req,res) =>{
	Model.ExerciseSchema.findByIdAndDelete(req.params.id)
		.then(() => res.json({Message: 'exercise deleeted succesffully'}) )
		.catch(err => req.json('Error occured now' + err));
});

// update the specific record in exercise based upon their id_s
exerciseRoute.route('/exercise/update/:id').post((req,res) =>{
	Model.ExerciseSchema.findById(req.params.id)
		.then((exercise)=>{
			exercise.username = req.body.username,
			exercise.description = req.body.description,
			exercise.duration = Number(req.body.duration),
			exercise.date = Date.parse(req.body.date) 

			exercise.save()
			.then(() => res.json('exercise updated successfullly'))
			.catch((err) => res.status(400).json('Error have been ocuured now..' + err))
		})
		.catch(err=> {
			res.status(400).json('Error occured ...' + err)
		});
});
export default exerciseRoute;