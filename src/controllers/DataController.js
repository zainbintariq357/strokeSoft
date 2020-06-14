import status from 'http-status';

import Model from '../Models';

const getDataFromDb  = (req, res) => {
	Model.DataSchema.find((err, data) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: data });
	});
};

const updateDataToDb =  (req, res) => {
	const { id, update } = req.body;
	Model.DataSchema.findByIdAndUpdate(id, update, (err) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
};
const DeleteDataFromDb = (req, res) => {
	const { id } = req.body;
	Model.DataSchema.findByIdAndRemove(id, (err) => {
		if (err) return res.send(err);
		return res.json({ success: true });
	});
};

const putNewDataIntoDb = (req, res) => {
	let data = new Model.DataSchema();

	const { id, message } = req.body;
	console.log( "update data id is" +  id);
	if ((!id && id !== 0) || !message) {
		return res.json({
			success: false,
			error: 'INVALID INPUTS',
		});
	}
	data.message = message;
	data.id = id;
	data.save((err) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
};	

export default  {
	getDataFromDb,
	updateDataToDb,
	DeleteDataFromDb,
	putNewDataIntoDb
}