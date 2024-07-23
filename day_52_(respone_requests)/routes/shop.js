const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log("it's a get request")
    res.send("hello world get")
})


router.get('/shop/about', (req, res) => {
    console.log("it's a get request")
    res.send("about birds")
})

router.get('/shop/:slug', (req, res) => {
    console.log("it's a get request")
    res.send(`fetch the blog post for ${req.params.slug}`)
})


module.exports = router