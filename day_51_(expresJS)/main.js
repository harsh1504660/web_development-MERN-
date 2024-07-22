const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/about',(req,res)=>{
    res.send("hello about")
})

app.get('/contact',(req,res)=>{
    res.send("hello conatct")
})

app.get('/blog',(req,res)=>{
    res.send("hello blog")
})

app.get('/blog/:slug',(req,res)=>{
    res.send(`hello ${req.params.slug}`)

    //localhost:3000/blog/harsh?mood=harsh
    console.log(req.query)   //{ mood: 'harsh' }
})


app.listen(port,()=>{
    console.log(`listing on port ${port}`)
})