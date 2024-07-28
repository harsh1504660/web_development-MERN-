import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componenets/navbar'


function App() {
  const [count, setCount] = useState(0)
  const [first, setfirst] = useState(0)
  const [color, setcolor] = useState(0)

  //CASE:1 ==>  when app loads this alert will be shown 
  useEffect(() => {         
    alert("i WILL RUN ON EVERY RENDER")
  
  })

  //CASE:1 ==>run only on first render
  useEffect(() => {         
    alert("WILL RUN ON FIRST RENDER")
  
  }, [])



  //CASE :3 ==> when the value of count will be changed the alrt will be shown
  useEffect(() => {
    alert("count was changed")
    setcolor(color+1)
  
  }, [count])
  
  useEffect(() => {
    alert("first was changed")
  
  }, [first])

  
  return (
    <>
    
      <div>
      <Navbar color={"cyan" + color}/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
