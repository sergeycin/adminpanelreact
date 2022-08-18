const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    rutitle: {type: String, required:true},
    entitle: {type: String, required:true},
    rudescription: {type: String, required: true},
    endescription: {type: String, required: true},
    image: {type: String, required: true},
})

module.exports = model('News', schema) 