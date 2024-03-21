import React, { useState } from 'react'


function InputForm({add  ,mytext , setMyText , btn }) {
console.log("this is btn value " , btn);
  return (
    <div>
        <input type="text"
        value={mytext}
        onChange={(e)=>setMyText(e.target.value)}
        className='border-2 border-yellow-400 py-1 px-2'
        />

        <button
        onClick={add}
        className='border-2 p-1'
        >
         {btn ? "Add" : "Edit"}
        </button>
        
    </div>
  )
}

export default InputForm