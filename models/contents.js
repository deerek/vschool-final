const mongoose = require('mongoose')
const { Schema } = mongoose

const contentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    media: {
        src: String
    }
})

module.exports = mongoose.model('Content', contentSchema)