const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required:true, unique:true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},

})

module.exports = model('TestDrive', schema) 