const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    rutitlebanner: {type: String, required:true},
    entitlebanner: {type: String, required:true},
    rudescriptionbanner: {type: String, required: true},
    endescriptionbanner: {type: String, required: true},
    rutextgreeting: {type: String, required: true},
    entextgreeting: {type: String, required: true},
    rulasttext: {type: String, required: true},
    enlasttext: {type: String, required: true},
})

module.exports = model('MainPage', schema) 