const fs = require("fs")


console.log("starting");
// fs.writeFileSync("harsh.txt","harsh is good boy")

fs.writeFile("hars2.txt","harsh is good bot",()=>{ //ASYNC APPORACH
    console.log("done")
    fs.readFile("hars2.txt",(error , data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("harsh.txt","appending the text",(e,d)=>{
    console.log(d)
})
console.log("ending");


