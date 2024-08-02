import React from 'react'
import { memo } from 'react'
const Navbar = ({adjective , getadjective}) => {
  return (
    <div>
      i am a {adjective} Navbar
      <button onClick={()=>{getadjective}}>change me</button>
    </div>
  )
}

export default memo(Navbar)      // when props will change then only the page wil render
 