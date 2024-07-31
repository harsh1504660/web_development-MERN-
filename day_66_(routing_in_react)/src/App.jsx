import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// ALWAYS START THE NAME WITH CAPITAL LETTER
import Home from './components/home'
import Login from './components/login'  
import About from './components/about'
import User from './components/user'

function App() {
    const router = createBrowserRouter([
      {
        path :"/",
        element :<> <Navbar/><Home/></>
      },
      {
        path:"/login",
        element:<> <Navbar/><Login/></>
      },
      {
        path:"/about",
        element:<> <Navbar/><About/></>
      },
      {
        path: "/user/:username",
        element: <><Navbar /><User /></>
      },
    ])
  return (
    <>
 
   
      <RouterProvider router={router}/>
    </>
  )
}

export default App
