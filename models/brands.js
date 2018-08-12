const mongoose = require('mongoose')
const { Schema } = mongoose

const brandSchema = new Schema({
    brandName: {
        type: String,
        required: true
    },
    brandContact: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
    },
    sport: {
        type: String,
        required: true
    },
    about: String,
    athletes: String,
    // pastEvents: String,
    // futureEvents: String,
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
module.exports = mongoose.model('Brand', brandSchema)