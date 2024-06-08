import React, { useContext, useState } from 'react'
import { todoContex } from '../APIContext/CreateContext'

function Form() {
    const {buttonType , addTodo , setMyValue , myValue} = useContext(todoContex) 
    
    const add =()=>{
        addTodo({id:Date() , text:myValue})
        setMyValue("")
    }

    return (
        <div className='flex gap-1'>
            <input type="text" value={myValue}  placeholder='Enter here' className='
         outline-yellow-800 border-2 border-solid border-black
         py-2 px-4 w-[300px] rounded-md placeholder:font-bold' onChange={(e)=>setMyValue(e.target.value)}
            />
            <button className='border-2 border-solid border-black py-2 px-6 
             rounded-md font-bold' onClick={()=>add()}>
                {buttonType}
            </button>
        </div>
    )
}

export default Form