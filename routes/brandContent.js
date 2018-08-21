
const express = require('express')
const brandContentRouter = express.Router()
const BrandContent = require('../models/brandContent')
const jwt = require("jsonwebtoken")

brandContentRouter.get('/', (req, res) => {
    // Addition: include filtering criteria to the find so that it only finds 
    // todo items with a 'user' property with the current user's id.
    console.log('Hello Brand Content!')

    BrandContent.find({ user: req.user._id }, (err, brandContents) => {
        if (err) return res.status(500).send(err);
        return res.send(brandContents)
    })
})

brandContentRouter.get("/public", (req, res) => {
    BrandContent.find(req.query,(err, brandContents) => {
        if (err) return res.status(500).send(err);
        return res.send(brandContents)
    })
})

brandContentRouter.post("/", (req, res) => {
    const content = new BrandContent(req.body)
    content.user = req.user._id;
    content.save(function (err, newBrandContent) {
        if (err) return res.status(500).send(err)
        return res.status(201).send(newBrandContent)
    })
})

brandContentRouter.get('/:brandContentId', (req, res) => {
    BrandContent.findOne(
        { _id: req.params.brandContentId, user: req.user._id },
        (err, brandContent) => {
            if (err) return res.status(500).send(err)
            if (!brandContent) return res.status(404).send("No content item found.");
            return res.send(brandContent)
        })
})

brandContentRouter.put('/:brandContentId', (req, res) => {
    BrandContent.findOneAndUpdate(
        { _id: req.params.brandContentId, user: req.user._id },
        req.body,
        { new: true },
        (err, brandContent) => {
            if (err) return res.status(500).send(err)
            return res.send(brandContent)
        }
    )
})

brandContentRouter.delete('/:brandContentId', (req, res) => {
    BrandContent.findOneAndRemove(
        { _id: req.params.brandContentId, user: req.user._id },
        (err, brandContent) => {
            if (err) return res.status(500).send(err)
            return res.status(204).send(brandContent)
        })
});

module.exports = brandContentRouter