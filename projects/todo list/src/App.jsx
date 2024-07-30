import { useState } from 'react'
import Navbar from './componenets/navbar'

function App() {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])    // array of all todos
  const handeledit = ()=>{

  }
  const handeldelete = ()=>{
    
  }
  const handeladd = ()=>{
    settodos([...todos,{todo,isCompleted:false}])
    settodo("")
  }
  const handelchange = (e)=>{
    settodo(e.target.value)
  }
  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
    <div className="addtodo my-5">
      <h2 className='text-lg font-bold'>Add Todo</h2>
      <input type="text" onChange={handelchange} value={todo} className='w-1/2'/>
      <button onClick={handeladd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm hover:font-bold text-white rounded-md m-6'>Add</button>
    </div>

      <h2 className="text-xl font-bold">Your Todos</h2>
      <div className="todos">
        {todos.map(item=>{
        return <div key={todo} className="todo flex w-1/4 justify-between my-3">
          <input type="checkbox" value={todo.isCompleted} name='' id=''/>
          <div className={item.isCompleted?"line-through":""}>
            {item.todo}
          </div>
            <div className="buttons">
              <button onClick={handeledit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm  text-white rounded-md mx-1'>Edit</button>
              <button onClick={handeldelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm  text-white rounded-md mx-1'>Delete</button>
        
          </div>

        </div>
          })}
      </div>
    </div>
    </>
  )
}

export default App
