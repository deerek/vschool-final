const mongoose = require('mongoose')
const { Schema } = mongoose

const brandContentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Brand",
    },
    contentType: {
        type: String,
        default: "brand"
    },
    media: String,
    eventName: String,
    eventDate: String,
    details: String
},{timestamps: true})

module.exports = mongoose.model('brandContent', brandContentSchema)
