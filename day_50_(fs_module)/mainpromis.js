import fs from "fs/promises"

let a = await fs.readFile("harsh.txt")

let b = await fs.writeFile("harsh.txt","this is amazing file")

let c = await fs.appendFile("harsh.txt","this is amazing file")

console.log(a.toString(),b,c)