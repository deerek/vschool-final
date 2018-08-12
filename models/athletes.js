const mongoose = require('mongoose')
const { Schema } = mongoose

const athleteSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    sport: {
        type: String,
        required: true
    },
    bio: String,
    isSponsered: Boolean,
    sponsers: String,
    competionResults: String,
    futureEvents: String,
    photos: [],
    id: String,
    createdAt: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    // followersCount: Number,
    // followers: [],
    // followingCount: Number,
    //  following: [],
    // postsCount: Number,
    // posts: [],
    // likesCount: Number,
    //  likes: [],
    avatar: String,
    isLoggedIn: Boolean,
    lastLogin: String
})

module.exports = mongoose.model('Athlete', athleteSchema)