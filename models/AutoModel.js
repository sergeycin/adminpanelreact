const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required:true},
    rudescription: {type: String, required:true},
    endescription: {type: String, required:true},
    price: {type: String, required:true},
    image: {type: String, required: true},
})

module.exports = model('AutoModel', schema) 