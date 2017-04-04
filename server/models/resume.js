var mongoose = require('mongoose');

var ResumeSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	birthday: {
		type: Date,
		required: true
	},
	email: {
		type: String
	},
	phoneNumber: {
		type: String
	},
	skills: {
		type: Array,
		required: true
	},
	education: {
		type: Object
	},
	workExp: {
		type: Object
	},
	summary: {
		type: String,
		required: true
	}
});

// export the model schema
module.exports = ResumeSchema;