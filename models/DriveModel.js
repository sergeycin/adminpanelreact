const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    fio: {type: String, required:true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    car: {type: String, required: true},
})

module.exports = model('TestDriveCar', schema) 

