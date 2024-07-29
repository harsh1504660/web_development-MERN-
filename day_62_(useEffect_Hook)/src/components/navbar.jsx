import React,{useEffect} from 'react'

const navbar = ({color}) => {
  useEffect(() => {
    alert('color was changed')
  }, [color])
  
  return (
    <div>
      i am a navbar of {color} color
    </div>
  )
}

export default navbar
