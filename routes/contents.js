const express = require('express')
const contentRouter = express.Router()
const Content = require('../models/contents')

contentRouter.route('/')
    .get((req, res) => {
        console.log('Hello Content!')
        Content.find((err, routes) => {
            if (err) return res.status(500).send(err)
            return res.send(routes)
        })
    })

    .post((req, res) => {
        console.log(req.body)
        const newContent = new Content(req.body)
        newContent.save((err, savedContent) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(savedContent)
        })
    })

contentRouter.route('/:id')
    .get((req, res) => {
        Content.findById(req.params.id, (err, foundContent) => {
            if (err) return res.status(500).send(err)
            return res.send(foundContent)
        })
    })

    .put((req, res) => {
        Content.findByIdAndUpdate(req.params.id, req.body,
            { new: true }, (err, updatedContent) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedContent)
            })
    })

    .delete((req, res) => {
        Content.findByIdAndRemove(req.params.id, (err) => {
            if (err) return res.status(500).send(err)
            return res.status(204).send()
        })
    });




module.exports = contentRouter