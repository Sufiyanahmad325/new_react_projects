import React, { useState } from 'react'

function List({ele , deleteList}) {
const [myTitle , setNewTitle ] = useState(ele.title)
const [myText , setMyText ] = useState(ele.blogText)

  return (
    <div className='w-[80vw] border-2 py-2 px-4 rounded-lg mt-6'>

        <p className='mb-1 text-[20px] font-bold'>{myText} </p>
        <p className='mb-2'>{myTitle}</p>
        <div className='flex gap-4'>
            <button 
            onClick={()=>editList()}
            className='border-2 py-1 px-5 rounded-md border-gray-600'
            >Edit</button>
            <button
            onClick={()=>deleteList(ele.id)}
            className='border-2 py-1 px-5 rounded-md border-gray-600'
            >Delete</button>
        </div>


    </div>
  )
}

export default List