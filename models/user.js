var mongoose = require('mongoose')
var passportLocalMongoose = require('passport-local-mongoose')

var UserSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String
})

// adding email field to login options
UserSchema.plugin(passportLocalMongoose, {
	usernameField: 'username', 
	emailField: 'email'
})

module.exports = mongoose.model('User', UserSchema)

// Somewhere in this file you can change or add to allow for the user to login with their email address
