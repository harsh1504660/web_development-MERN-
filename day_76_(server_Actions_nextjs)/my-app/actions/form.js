"use server"
import fs from "fs/promises"
export const submitaction = async (e)=>{

    console.log(e.get("name"),e.get("add"))
    fs.writeFile("harsh.txt","hello harsh")

  }