const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    rutitle: {type: String, required:true, unique:false},
    entitle: {type: String, required:true, unique:false},
    rudescription: {type: String, required: true, unique:false},
    endescription: {type: String, required: true, unique:false},
    image: {type: String, required: true, unique:false},
})

module.exports = model('News', schema) 