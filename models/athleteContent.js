const mongoose = require('mongoose')
const { Schema } = mongoose

const athleteContentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Athlete",
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

module.exports = mongoose.model('athleteContent', athleteContentSchema)

