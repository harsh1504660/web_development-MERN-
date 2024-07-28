import React from 'react'
import "./card.css"
const card = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}>
       <img src="https://sphero.com/cdn/shop/articles/coding_languages_900x.png?v=1619126283" width={250}
       style={{border:"2px solid black",}} alt="" />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      
    </div>
  )
}

export default card
