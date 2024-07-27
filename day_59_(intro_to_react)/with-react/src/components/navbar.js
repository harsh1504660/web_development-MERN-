import React from 'react'
import Footer from './footer'
function navbar(props) {
  return (
    <div>
      <div className='logo'>{props.logoText}</div>
    <ul>
        <li>home</li>
        <li>About</li>
        <li>contact</li>
    </ul>
    <Footer/>
    </div>
  )
}

export default navbar
