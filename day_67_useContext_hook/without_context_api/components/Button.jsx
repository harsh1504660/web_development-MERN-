import React from 'react'
import Component1 from './component1'
const Button = ({count}) => {
  return (
    <div>
      <button><span><Component1 count={count}/></span> i am a button</button>
    </div>
  )
}

export default Button
