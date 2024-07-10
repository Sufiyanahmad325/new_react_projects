import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/todo/TodoSlice'

function TodoList() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    return (

        <div className=' flex gap-2 flex-col'>

            {
                todos.map(ele => (
                    <div className='flex gap-1' key={todos.id}>
                        <input type="text" disabled value={ele.text}
                            className='py-1 px-2 w-[280px]'
                        />

                        <button className='py-1 border-2 border-black px-2 rounded-md'>Edit</button>
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