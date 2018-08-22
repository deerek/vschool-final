const express = require('express')
const athleteRouter = express.Router()
const Athlete = require('../models/athletes');
const Brand = require("../models/brands");

athleteRouter.route('/')
    .get((req, res) => {
        Athlete.findById(req.user._id, (err, foundAthlete) => {
            if (err) return res.status(500).send(err)
            return res.send(foundAthlete)
        })
    })

    .put((req, res) => {
        Athlete.findByIdAndUpdate(req.user._id, req.body,
            { new: true }, (err, updatedAthlete) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedAthlete)
            })
    })

    .delete((req, res) => {
        Athlete.findByIdAndRemove(req.user._id, (err) => {
            if (err) return res.status(500).send(err)
            return res.status(204).send()
        })
    });

athleteRouter.route("/:id")
    .get((req, res) => {
        Athlete.findById(req.params.id, (err, foundAthlete) => {
            if (err) return res.status(500).send(err)
            return res.send(foundAthlete)
        })
    })

athleteRouter.route("/:victimId/follow/:stalkerId/:stalkerType")
    .put((req, res) => {
        const { victimId, stalkerId, stalkerType } = req.params;
        //add the followerID to the athlete's followers array
        Athlete.findByIdAndUpdate(victimId, { $addToSet: { followers: stalkerId } }, { new: true })
            .exec((err, updatedVictim) => {
                //check the followerType
                let Follower = stalkerType === "athlete" ? Athlete : Brand;
                Follower.findByIdAndUpdate(stalkerId, { $addToSet: { following: victimId } }, { new: true })
                    .exec((err, updatedStalker) => {
                        if (err) return res.status(500).send(err);
                        return res.status(200).send({ stalker: updatedStalker, victim: updatedVictim })
                    })
            })
    })




module.exports = athleteRouter


// Copy of Original Code:

// const express = require('express')
// const athleteRouter = express.Router()
// const Athlete = require('../models/athletes')

// athleteRouter.route('/')
//     .get((req, res) => {
//         console.log('Hello Athletes!')
//         Athlete.find((err, routes) => {
//             if (err) return res.status(500).send(err)
//             return res.send(routes)
//         })
//     })

// .post((req, res) => {
//     console.log(req.body)
//     const newAthlete = new Athlete(req.body)
//     newAthlete.save((err, savedAthlete) => {
//         if (err) return res.status(500).send(err)
//         return res.status(201).send(savedAthlete)
//     })
// })

// athleteRouter.route('/:id')
//     .get((req, res) => {
//         Athlete.findById(req.params.id, (err, foundAthlete) => {
//             if (err) return res.status(500).send(err)
//             return res.send(foundAthlete)
//         })
//     })

// .put((req, res) => {
//     Athlete.findByIdAndUpdate(req.params.id, req.body,
//         { new: true }, (err, updatedAthlete) => {
//             if (err) return res.status(500).send(err)
//             return res.status(201).send(updatedAthlete)
//         })
// })

// .delete((req, res) => {
//     Athlete.findByIdAndRemove(req.params.id, (err) => {
//         if (err) return res.status(500).send(err)
//         return res.status(204).send()
//     })
// });




// module.exports = athleteRouter