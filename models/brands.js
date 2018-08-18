const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require("bcrypt")

const brandSchema = new Schema({
    brandName: {
        type: String,
        required: false
    },
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    bio: String,
    athletes: [],
    userType: {
        type: String,
        required: false,
        enum: ["brand"]
    },
    username: {
        type: String,
        required: false,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: false,
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

brandSchema.pre("save", function (next) {
    var user = this;
    if (!user.isModified("password")) return next();
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    })
})

brandSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    })
}

brandSchema.methods.withoutPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model('Brand', brandSchema)



// Copy of Original Code:

// const mongoose = require('mongoose')
// const { Schema } = mongoose
// const bcrypt = require("bcrypt")

// const brandSchema = new Schema({
//     brandName: {
//         type: String,
//         required: true
//     },
//     brandContact: {
//         firstName: {
//             type: String,
//             required: true
//         },
//         lastName: {
//             type: String,
//             required: true
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     sport: {
//         type: String,
//         required: true
//     },
//     about: String,
//     athletes: String,
//     pastEvents: String,
//     futureEvents: [{
//         name: String,
//         date: Date,
//         location: String
//     }],
//     userType: {
//         type: String,
//         required: true,
//         enum: ["brand"]
//     },
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true
//     },
//     password: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false
//     },
//     followersCount: Number,
//     followers: [],
//     followingCount: Number,
//     following: [],
//     postsCount: Number,
//     posts: [],
//     likesCount: Number,
//     likes: [],
//     avatar: String,
//     lastLogin: Date
// }, {timestamps: true})

// module.exports = mongoose.model('Brand', brandSchema)



