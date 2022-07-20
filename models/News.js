const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required:true, unique:true},
    description: {type: String, required: true},
    image: {type: String, required: true},
})

module.exports = model('News', schema) 