import React, { useContext, useState } from 'react'
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { todoContex } from '../APIContext/CreateContext';


function TodoList({todo}) {

    const {allData , buttonType , addTodo , editTodo , deleteTodo , setEditId , setMyValue , myValue} = useContext(todoContex)
    
    
    const edit1 = () => {
        editTodo(todo.id);
        setEditId(todo.id);
      };

    const deleted =()=>{
            deleteTodo(todo.id)
    }

  return (
    <div className='flex gap-3 items-center'>
        <input type="text" value={todo.text || myValue}  
        className=' w-[270px] py-2 px-2'
        />
        <MdEdit onClick={edit1}
        className='border-2 border-black text-2xl w-12 h-8 rounded-md p-1 '
        />
        <FaTrash  onClick={deleted}
        className='border-2 border-black text-2xl w-12 h-8 rounded-md p-1'
        />
    </div>
  )
}

export default TodoList