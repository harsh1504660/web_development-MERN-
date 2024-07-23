const express = require("express")
const app = express()
const port = 3000

// template engine
app.set("veiw engine",'ejs');

app.get("/",(req,res)=>{
    let sitename = "adidas"
    let searchtext = "search now"
    let arr = ["gand marao","happy hoil",'hail hitler']
    res.render("index.ejs",{sitename:sitename,searchtext:searchtext,arr})
})

app.get("/blog/:slug",(req,res)=>{
    let blogtitile = "adidas why and when"
    let blogcontent = "search now good now"
    res.render("blogpost.ejs",{blogtitile:blogtitile,blogcontent:blogcontent})
})
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})