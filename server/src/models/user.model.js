const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true},
  password: { type: String, required: true},
  secretQuestion: { type: String, required: true},
  secretAnswer: { type: String, required: true, trim: true},
  createdAt: { type: Date, default: Date.now}
})

const User = mongoose.model('Users', userSchema)

module.exports = User
