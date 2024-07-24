import React, { useContext } from 'react'
import { userContext } from '../ApiContext/ApiCotext'

function List({todo}) {
    const { user, setUser } = useContext(userContext)

    const handleDelete = () => {
        console.log(todo.id)
        setUser(prev => prev.filter(ele => ele.id != todo.id))
    }
    return (
        <>

            <div className='flex gap-2'>
                <input type="text"
                    disabled={true}
                    className='outline-none bg-gray-300 w-[55vw] py-3 px-2 rounded-md'
                    value={todo.text}
                />
                <button
                    className='py-3 px-8 rounded-md bg-gray-800 text-white font-bold'
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </>
    )
}

export default List