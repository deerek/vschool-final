const express = require('express')
const brandRouter = express.Router()
const Brand = require('../models/brands')
const Athlete = require('../models/athletes')


brandRouter.route('/')
    .get((req, res) => {
        Brand.findById(req.user._id, (err, foundBrand) => {
            if (err) return res.status(500).send(err)
            return res.send(foundBrand)
        })
    })

    .put((req, res) => {
        Brand.findByIdAndUpdate(req.user._id, req.body,
            { new: true }, (err, updatedBrand) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedBrand)
            })
    })

    .delete((req, res) => {
        Brand.findByIdAndRemove(req.user._id, (err) => {
            if (err) return res.status(500).send(err)
            return res.status(204).send()
        })
    });

brandRouter.route('/:id')
    .get((req, res) => {
        Brand.findById(req.params.id, (err, foundBrand) => {
            if (err) return res.status(500).send(err)
            return res.send(foundBrand)
        })
    })
brandRouter.route("/:victimId/follow/:stalkerId/:stalkerType")
    .put((req, res) => {
        const { victimId, stalkerId, stalkerType } = req.params;
        //add the followerID to the athlete's followers array
        Brand.findByIdAndUpdate(victimId, { $addToSet: { followers: stalkerId } }, { new: true})
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

module.exports = brandRouter



// Copy of Original Code:

// const express = require('express')
// const brandRouter = express.Router()
// const Brand = require('../models/brands')

// brandRouter.route('/')
//     .get((req, res) => {
//         console.log('Hello Brands!')
//         Brand.find((err, routes) => {
//             if (err) return res.status(500).send(err)
//             return res.send(routes)
//         })
//     })

    // .post((req, res) => {
    //     console.log(req.body)
    //     const newBrand = new Brand(req.body)
    //     newBrand.save((err, savedBrand) => {
    //         if (err) return res.status(500).send(err)
    //         return res.status(201).send(savedBrand)
    //     })
    // })

// brandRouter.route('/:id')
//     .get((req, res) => {
//         Brand.findById(req.params.id, (err, foundBrand) => {
//             if (err) return res.status(500).send(err)
//             return res.send(foundBrand)
//         })
//     })

    // .put((req, res) => {
    //     Brand.findByIdAndUpdate(req.params.id, req.body,
    //         { new: true }, (err, updatedBrand) => {
    //             if (err) return res.status(500).send(err)
    //             return res.status(201).send(updatedBrand)
    //         })
    // })

    // .delete((req, res) => {
    //     Brand.findByIdAndRemove(req.params.id, (err) => {
    //         if (err) return res.status(500).send(err)
    //         return res.status(204).send()
    //     })
    // });




// module.exports = brandRouter