// in next js all the files are by deafult server side , to make 
// this file client side use "use client"

"use client"  // run client side
import { useState,useEffect } from "react";  // can not import state in server side

export default function Home() {
  const [count, setcount] = useState(0)
  return (
    
   <div>
    i am a component {count}
    <button onClick={()=>setcount(count+1)}>click me</button>
   </div>
  );
}
