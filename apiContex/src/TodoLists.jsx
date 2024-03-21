import React, { useState } from 'react'
import { FaEdit , FaTrash } from "react-icons/fa";



function TodoLists({todo , setTodos , edit }) {

    const deletetodo=()=>{
      setTodos(prev=>prev.filter((ele)=>ele.id !== todo.id ))
    }

    
    
  return (
    <div className='flex gap-4'>
        <input type="text"
        value={todo.text}
        className='border-2'
        />
        
        <FaEdit onClick={(e)=>edit(todo)} />
        <FaTrash  onClick={deletetodo}/>
    </div>
  )
}

export default TodoLists