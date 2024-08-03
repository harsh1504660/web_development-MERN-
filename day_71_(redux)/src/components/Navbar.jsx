import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
const Navbar = ({counter}) => {
    const count = useSelector((state)=>state.counter.value)
    return (
    <div>
      i am a {count}
    </div>
  )
}

export default Navbar
