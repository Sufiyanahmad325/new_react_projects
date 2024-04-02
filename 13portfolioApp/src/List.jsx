import React from 'react'
import './List.css'
function List({
  image,
  price,
  name
}) {
  return (
    <div className='list'>
        <img src={image} alt="img" />
        <div className='content'>
            <h4>{name}</h4>
             <button className='button'>${ price}</button>
        </div>
    </div>
  )
}

export default List