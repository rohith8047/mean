var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/mean');

var usersSchema = new Schema({
    name: String,
    email: String,
    password: String
});

var UsersCollection = mongoose.model('users', usersSchema);

module.exports = {
    UsersColl: UsersCollection
};