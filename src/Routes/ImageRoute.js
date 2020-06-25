import express from 'express';
import Model from '../Models';
import multer from 'multer';

const ImageRouter = express.Router();

const storage = multer.diskStorage({
	destination : function(req,file,cb) {
		cb(null, 'public/uploads/')
	},
	filename: function(req,file,cb) {
		cb(null, Date.now() +file.originalname);
	}
});

const fileFilter = (req,file,cb) =>{
	debugger
	if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
		cb(null, true)
	}else {
		cb(null, false)
	}
}
  
const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter: fileFilter
})

ImageRouter.route('/uploadmulter')
	.post(upload.single('product'), (req,res, next)=>{
		console.log(req.files);
		debugger
		console.log('it canbe post at this end');
		// console.log(req);
		const newImage = Model.FileSchema({
			mainImage: req.body.imageName,
			thumbImage: req.body.imageName,
			imageData: req.file.path
		});
		debugger		
		newImage.save()
			.then((result)=>{
				console.log(result);
				res.status(200).json({
					success: true,
					document: result
				})
			})
			.catch((err) =>{
				res.status(404).json({
					success: false,
					error: 'error have been occured noe' + err 
				})
			})
	})
export default ImageRouter;
