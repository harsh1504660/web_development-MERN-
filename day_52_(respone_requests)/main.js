const express = require('express')
const app = express()
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const port = 3000
const path = require('path')

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')))
app.use('/blog',blog)
app.use('/shop',shop)
// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'testing.html'))
})

app.post('/', (req, res) => {
    console.log("it's a post request")
    res.send("hello world post")
})

app.get('/index', (req, res) => {
    console.log("it's a post request")
    res.sendFile("templates/index.html",{root:__dirname})
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})