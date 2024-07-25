import {Todo} from "../models/Todo.js"
import mongoose from "mongoose"
import express from "express"
const app = express()
const port = 3000


let a = await mongoose.connect("mongodb://localhost:27017/todo")


app.get('/',(req,res)=>{
    const todo = new Todo({
        desc:"this is the first todo",
        isDone:false,
        days:15
    })
    todo.save()
    res.send("hello world")
})

app.get('/a',async (req,res)=>{
    let todo = await Todo.findOne({})
    res.json({title:todo.title,desc:todo.desc})
})

app.listen(port,()=>{
    console.log(`listing on port ${port}`)
})