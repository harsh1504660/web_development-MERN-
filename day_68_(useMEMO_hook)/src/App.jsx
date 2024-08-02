import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'


const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return {
    index:1,
    isMagical:i===20_000_000
  }
})


function App() {
  const [count, setCount] = useState(0)
  const [numbers, setnumbers] = useState(nums)


//const magical = numbers.find(item => item.isMagical==true) /// expensive computation
  
// use to memorized the perticuler values , to save the time of comuptation
  const magical = useMemo(() => numbers.find(item => item.isMagical==true), [])  
  return (
    <>
      <div>
        <span>Magical number is  {magical.index}</span>
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

