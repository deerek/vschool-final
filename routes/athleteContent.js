
const express = require('express')
const athleteContentRouter = express.Router()
const AthleteContent = require('../models/athleteContent')
const jwt = require("jsonwebtoken")

athleteContentRouter.get('/', (req, res) => {
    // Addition: include filtering criteria to the find so that it only finds 
    // todo items with a 'user' property with the current user's id.
    console.log('Hello Athlete Content!')

    AthleteContent.find({ user: req.user._id }, (err, athleteContents) => {
        if (err) return res.status(500).send(err);
        return res.send(athleteContents)
    })
})

athleteContentRouter.get("/public", (req,res)=>{
    AthleteContent.find(req.query, (err, athleteContents) => {
        if (err) return res.status(500).send(err);
        return res.send(athleteContents)
    })
})

athleteContentRouter.post('/', (req, res) => {
    const content = new AthleteContent(req.body)
    content.user = req.user._id;
    content.save(function (err, newAthleteContent) {
        if (err) return res.status(500).send(err)
        return res.status(201).send(newAthleteContent)
    })
})

athleteContentRouter.get('/:athleteContentId', (req, res) => {
    AthleteContent.findOne(
        { _id: req.params.athleteContentId, user: req.user._id }, 
        (err, athleteContent) => {
        if (err) return res.status(500).send(err)
        if (!athleteContent) return res.status(404).send("No content item found.");
        return res.send(athleteContent)
    })
})

athleteContentRouter.put('/:athleteContentId', (req, res) => {
    AthleteContent.findOneAndUpdate(
        { _id: req.params.athleteContentId, user: req.user._id  },
        req.body,
        { new: true },
        (err, athleteContent) => {
            if (err) return res.status(500).send(err)
            return res.send(athleteContent)
        }
    )
})

athleteContentRouter.delete('/:athleteContentId', (req, res) => {
    AthleteContent.findOneAndRemove(
        { _id: req.params.athleteContentId, user: req.user._id },
        (err, athleteContent) => {
        if (err) return res.status(500).send(err)
        return res.status(204).send(athleteContent)
    })
});

module.exports = athleteContentRouter




// Copy of Original Code:

// const express = require('express')
// const contentRouter = express.Router()
// const Content = require('../models/contents')

// contentRouter.route('/')
//     .get((req, res) => {
//         console.log('Hello Content!')
//         Content.find((err, routes) => {
//             if (err) return res.status(500).send(err)
//             return res.send(routes)
//         })
//     })

//     .post((req, res) => {
//         console.log(req.body)
//         const newContent = new Content(req.body)
//         newContent.save((err, savedContent) => {
//             if (err) return res.status(500).send(err)
//             return res.status(201).send(savedContent)
//         })
//     })

// contentRouter.route('/:id')
//     .get((req, res) => {
//         Content.findById(req.params.id, (err, foundContent) => {
//             if (err) return res.status(500).send(err)
//             return res.send(foundContent)
//         })
//     })

//     .put((req, res) => {
//         Content.findByIdAndUpdate(req.params.id, req.body,
//             { new: true }, (err, updatedContent) => {
//                 if (err) return res.status(500).send(err)
//                 return res.status(201).send(updatedContent)
//             })
//     })

//     .delete((req, res) => {
//         Content.findByIdAndRemove(req.params.id, (err) => {
//             if (err) return res.status(500).send(err)
//             return res.status(204).send()
//         })
//     });




// module.exports = contentRouter