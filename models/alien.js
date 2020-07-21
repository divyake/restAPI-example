const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Number,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Alien',alienSchema)