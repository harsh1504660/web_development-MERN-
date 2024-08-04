"use client"
export default function Home() {
  const handelclick = async ()=>{
    let  data = {
      nanme:"harsh",
      roll:15
    }
    let  a  = await fetch("/api/add",{method:"POST",headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
  })
  let  res = await a.json()

  }
  return (
    <div>
      <h1 className="text-xl font-bold">
        Next.js api routes demo
      </h1>
      <button onClick={handelclick}>click me</button>
      </div>
  );
}
