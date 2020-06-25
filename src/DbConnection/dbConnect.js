import mongoose from 'mongoose';
const dbRoute =
'mongodb+srv://zain:1234@nodeintegratereact.xgit4.mongodb.net/<reactnode>?retryWrites=true&w=majority';
// Here wwe setup our mongoo db connection 
const Connect = () => {
	// dbRoute	
	mongoose.connect("mongodb://localhost:27017/apiBuilders",{
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	
	mongoose.set('useFindAndModify', false);
	mongoose.set('useCreateIndex', true);
	
	mongoose.connection.on('connected', () =>{
		console.log('connected to the database');
	});
	mongoose.connection.on('error', (err)=> {
		console.log(`An Error have been occured now ${err}`);	
	});
	mongoose.connection.on('disconnected', ()=> {
		console.log('A mongo db have been disconnected now');
	});
}
export default Connect;