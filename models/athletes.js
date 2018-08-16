const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require("bcrypt")

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
    isAdmin: {
        type: Boolean,
        default: false
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

athleteSchema.pre("save", function (next) {
    var user = this;
    if (!user.isModified("password")) return next();
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    })
})

athleteSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    })
}

athleteSchema.methods.withoutPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
}

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