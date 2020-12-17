const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
    name: String,
    img: String
})


var Card = module.exports = mongoose.model('Card', cardSchema)