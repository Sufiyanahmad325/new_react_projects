import React from 'react'

function List({ele , deleteList}) {

  return (
    <div className='w-[80vw] border-2 py-2 px-4 rounded-lg mt-6'>

        <p className='mb-1 text-[20px] font-bold'>{ele.title} </p>
        <p className='mb-2'>{ele.blogText}</p>
        <div className='flex gap-4'>
            <button 
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