// require mongoose
var mongoose = require('mongoose');

// create the schema
var NoteSchema = new mongoose.Schema({
	content: {
		type: String,
		minlength: [3, "Note must be at least 3 characters long"],
		required: [true, "Note is required"]
	}
	},
	{ timestamps: true }
);

var Note = mongoose.model('Note', NoteSchema);