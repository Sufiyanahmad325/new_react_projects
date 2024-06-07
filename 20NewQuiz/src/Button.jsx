import React from 'react'

function Button({ option , data , setSelectedValue }) {
    return (
        <div>
            <button className=' border-2 border-solid border-blue-700
            py-2 px-5 bg-green-600 text-white rounded-md font-bold
            ' onClick={()=> setSelectedValue(data)}>{option}</button>
        </div>
    )
}

export default Button