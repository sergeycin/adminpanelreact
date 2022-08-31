const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    rutitle: {type: String, required: true},
    entitle: {type: String, required: true},
})

module.exports = model('TypesAuto', schema) 