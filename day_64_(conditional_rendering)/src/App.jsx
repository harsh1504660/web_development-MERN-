import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, settodos] = useState([{
    title:"hey",
    desc:"i ama agood todo"
  },
  {
    title:"hey another todo",
    desc:"i ama agood todo too "
  },
  {
    title:"hey grocery todo",
    desc:"i ama agood grocery todo "
  },
])

  const Todo = ({todo})=>{
    return (<>
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>
    </>)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn?<button>showbtn is true</button>:<button>showbtn is false</button>}
        {/* {showbtn && <button>showbtn is true</button>} */}
       
       {todos.map(todo=>{
        return <Todo key={todo.title} todo={todo} />
       })}
       
        <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
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
