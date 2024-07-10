import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/todo/TodoSlice'
import TodoForm from './TodoForm'

function TodoList() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
  const [selectData, setSelectData] = useState("")

    return (

        <div className=' flex gap-2 flex-col'>
            <TodoForm setSelectData={setSelectData} selectData={selectData} />
            {
                todos.map(ele => (
                    <div className='flex gap-1' key={ele.id}>
                        <input type="text" disabled value={ele.text}
                            className='py-1 px-2 w-[280px]'
                        />

                        <button className='py-1 border-2 border-black px-2 rounded-md'
                        onClick={(e)=>setSelectData(ele)}
                        >Edit</button>
                        <button className='py-1 border-2 border-black px-2 rounded-md' 
                        onClick={(e)=>(dispatch(removeTodo(ele.id)))}
                        >delete</button>
                    </div>
                ))
            }

        </div>



    )
}

export default TodoList