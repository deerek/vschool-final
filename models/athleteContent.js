const mongoose = require('mongoose')
const { Schema } = mongoose

const athleteContentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Athlete"
    },
    media: String,
    finishingPlace: String,
    eventCategory: String,
    eventName: String,
    eventDate: Date,
    details: String
},
{timestamps: true})

module.exports = mongoose.model('athleteContent', athleteContentSchema)

