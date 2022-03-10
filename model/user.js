const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    identification_document: String,
    surnames: String,
    names: String,
    email: String,
    role: String,
    username: String,
    password: String
}, {versionkey:false})

module.exports = mongoose.model('Usuarios', userSchema);