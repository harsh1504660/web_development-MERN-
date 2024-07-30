import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("harsh")
  const [form, setform] = useState({email:"",phone:""})
  const handelclick = ()=>{
    alert("i am clicked ")
  }
  const handelmouse = ()=>{
    alert("i am a mouse over")
  }
  const handelchange=(e)=>{
    //setname(e.target.value)
    setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="button">
        <button onClick={handelclick}>click me</button>
      </div>
      <div className='red' onMouseOver={handelmouse}>
        i am a red div
      </div>
      <input type="text" name='email' value={form.email} onChange={handelchange}/>
      <input type="text" name='phone' value={form.phone} onChange={handelchange} />
    </>
  )
}

export default App
