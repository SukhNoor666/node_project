const mongoose = require('mongoose');


const userSchema = new mongooose.Schema({
  first_name: { type: String, required: true},
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;