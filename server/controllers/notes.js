var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
	index: (req, res) => {
		Note.find({}).sort('-createdAt').exec( (err, notes) => {
			if(err){
				var errors =[];
				for (var i in err) {
					errors.push(err[i].message)
				}
				res.status(400).send({errors: errors})
			}
			else {
				console.log("IN THE INDEX")
				res.json(notes);
			}
		});
	},

	create: (req, res) => {
		var note = new Note({
			content: req.body.content
		});

		note.save ( (err) => {
			if(err) {
				var errors = [];
				for (var i in err) {
					errors.push(err[i].message);
				}
				res.status(400).send({errors: errors})
			} else {
				console.log("Successfully added note");
				res.json(true);
			}
		});
	}
}