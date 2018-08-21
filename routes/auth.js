
const express = require("express")
const Athlete = require("../models/athletes")
const Brand = require("../models/brands")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")

//post a new user to user collection (signing up)
authRouter.post("/signup", (req, res) => {
    // try to find a user with the provided username. (If it already exists, we want to tell them
    // that the username is already taken.)
    console.log(req.body.userType);
    switch (req.body.userType) {
        //check what type of user he/she is
        case "athlete":
            //search the athlete collection for one that already exists
            Athlete.findOne({ username: req.body.username }, (err, existingAthlete) => {
                if (err) return res.status(500).send({ success: false, err })

                // If the db doesn't return "null" it means there's already a user with that username.
                if (existingAthlete !== null) {
                    return res.status(400).send({ success: false, err: "That username already exists!" })
                }

                // If the function reaches this point and hasn't returned already, we're safe
                //create an instance of an Athlete model in the database.
                const newAthlete = new Athlete(req.body)
                newAthlete.save((err, athlete) => {
                    if (err) return res.status(500).send({ success: false, err })

                    // If the user signs up, we might as well give them a token right now
                    // So they don't then immediately have to log in as well
                    const token = jwt.sign(athlete.toObject(), process.env.SECRET);

                    return res.status(201).send({ success: true, user: athlete.toObject(), token })

                })
            })
            break;

        case "brand":
            //search the brand collection for one that already exists
            Brand.findOne({ username: req.body.username }, (err, existingBrand) => {
                if (err) return res.status(500).send({ success: false, err })

                // If the db doesn't return "null" it means there's already a user with that username.
                if (existingBrand !== null) {
                    return res.status(400).send({ success: false, err: "That username already exists!" })
                }

                // If the function reaches this point and hasn't returned already, we're safe
                //create an instance of an Brand model in the database.
                const newBrand = new Brand(req.body)
                newBrand.save((err, brand) => {
                    if (err) return res.status(500).send({ success: false, err })
                    // break;

                    // If the user signs up, we might as well give them a token right now
                    // So they don't then immediately have to log in as well
                    const token = jwt.sign(brand.toObject(), process.env.SECRET)
                    return res.status(201).send({ success: true, user: brand.toObject(), token })
                });

            });
            break;
    };
});


authRouter.post("/login", (req, res) => {
    switch (req.body.userType) {
        case "athlete":
            Athlete.findOne({ username: req.body.username.toLowerCase() }, (err, athlete) => {
                if (err) return res.status(500).send(err);
                if (!athlete) {
                    res.status(401).send({ success: false, message: "User with the provided username was not found" })
                } else {
                    athlete.checkPassword(req.body.password, (err, match) => {
                        if (err) throw (err);
                        if (!match) return res.status(401).send({ success: false, message: "Incorrect password" })
                        const token = jwt.sign(athlete.toObject(), process.env.SECRET, { expiresIn: "24h" })
                        return res.send({ user: athlete.withoutPassword(), token: token, user: athlete.toObject(), success: true, message: "Here's your token!" })
                    })
                }
            })
            break;

        case "brand":
            Brand.findOne({ username: req.body.username.toLowerCase() }, (err, brand) => {
                if (err) return res.status(500).send(err);
                if (!brand) {
                    res.status(401).send({ success: false, message: "User with the provided username was not found" })
                } else {
                    brand.checkPassword(req.body.password, (err, match) => {
                        if (err) throw (err);
                        if (!match) return res.status(401).send({ success: false, message: "Incorrect password" })
                        const token = jwt.sign(brand.toObject(), process.env.SECRET, { expiresIn: "24h" })
                        return res.send({ user: brand.withoutPassword(), token: token, user: brand.toObject(), success: true, message: "Here's your token!" })
                    })
                }
            })
            break;
    }
})

module.exports = authRouter;



