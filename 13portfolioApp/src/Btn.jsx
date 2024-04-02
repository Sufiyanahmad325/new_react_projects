import React from 'react'
import "./Btn.css"
function Btn({name}) {
  return (
    <div>
        <button  className='btn'>{name}</button>
    </div>
  )
}

export default Btn