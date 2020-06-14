import express from 'express'
import Author from '../controllers/AuthorController';
// import Data from '../controllers/DataController'
// const Data = require('../data');
const dataRouter = express.Router()

// dataRouter.get('/authors',Author.index);
// dataRouter.get('/authors/:id', Author.show);


// dataRouter.get('/getData', Data.getDataFromDb);
  
// // this is our update method
// // this method overwrites existing data in our database
// dataRouter.post('/updateData', Data.updateDataToDb);

// // this is our delete method
// // this method removes existing data in our database
// dataRouter.delete('/deleteData', Data.DeleteDataFromDb);
  
// // this is our create methid
// // this method adds new data in our database
// dataRouter.post('/putData', Data.putNewDataIntoDb);
	
export default dataRouter;