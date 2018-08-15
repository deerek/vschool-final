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
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    sport: {
        type: String,
        required: true
    },
    bio: String,
    isSponsered: Boolean,
    sponsers: String,
    competionResults: String,
    futureEvents:[{
        name: String,
        date: Date,
        location: String
    }],
    userType: {
        type: String,
        required: true,
        enum: ["athlete"]
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    followersCount: Number,
    followers: [],
    followingCount: Number,
    following: [],
    postsCount: Number,
    posts: [],
    likesCount: Number,
    likes: [],
    avatar: String,
    lastLogin: Date
}, {timestamps: true})

module.exports = mongoose.model('Athlete', athleteSchema)


// Copy of Original Code:
// const mongoose = require('mongoose')
// const { Schema } = mongoose

// const athleteSchema = new Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     sport: {
//         type: String,
//         required: true
//     },
//     bio: String,
//     isSponsered: Boolean,
//     sponsers: String,
//     competionResults: String,
//     futureEvents: String,
//     photos: [],
//     id: String,
//     createdAt: String,
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     // followersCount: Number,
//     // followers: [],
//     // followingCount: Number,
//     //  following: [],
//     // postsCount: Number,
//     // posts: [],
//     // likesCount: Number,
//     //  likes: [],
//     avatar: String,
//     isLoggedIn: Boolean,
//     lastLogin: String
// })

// module.exports = mongoose.model('Athlete', athleteSchema)