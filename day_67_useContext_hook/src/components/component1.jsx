import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'
const component1 = () => {
    const counter = useContext(counterContext)
  return (
    <div>
        this is second method
     {counter}
    </div>
  )
}

export default component1
