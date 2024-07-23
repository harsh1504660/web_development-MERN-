const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")


app.use(express.static('public'))    // middle ware deafult

app.use((req,res,next)=>{             // middleware used defined
    console.log(req.headers)
    req.harsh = 56
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})