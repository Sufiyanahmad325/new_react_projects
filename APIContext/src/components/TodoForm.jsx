import React, { useContext, useState } from 'react'
import { userContext } from '../ApiContext/ApiCotext'

function TodoForm() {

  const {setUser}=useContext(userContext)
  const [text, setText] = useState("")

  const submit=()=>{

    setUser(prev=>[ {id: new Date() , text:text } , ...prev])
    setText("")
  }

  return (
    <div className='flex gap-2 pt-6'>

        <input type="text" placeholder='Enter here' 
        className='w-[60vw] py-3 px-2 rounded-md bg-gray-300 outline-none '
        onChange={(e)=>setText(e.target.value)}
        value={text}
        />

        <button className='py-3 px-8 bg-gray-700 rounded-md font-bold'
        onClick={submit}
        >Add</button>
    </div>
  )
}

export default TodoForm