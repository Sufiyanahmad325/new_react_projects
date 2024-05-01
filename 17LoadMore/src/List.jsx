import React from 'react'
import "./list.css"

function List({element}) {
    return (
        <div className='list'>
            <img src={element.images[0]}
                alt="" />
            <p className="title">{element.title}</p>
            <p className="stock">{element.stock}</p>
            <p className="description">{element.description}</p>

        </div>
    )
}

export default List