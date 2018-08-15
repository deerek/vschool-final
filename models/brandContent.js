const mongoose = require('mongoose')
const { Schema } = mongoose

const brandContentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Brand",
        required: true
    },
    name: String,
    description: String,
    // content: {
    //     type: String,
    //     required: true
    // },
    media: {
        src: String
    }
})

module.exports = mongoose.model('brandContent', brandContentSchema)
