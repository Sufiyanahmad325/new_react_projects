import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function List({
    data,
    changeShow,
    changeHide
}) {
    return (
        <div className='bg-gray-800 text-white mb-4 flex justify-between   pb-4'>
            <div className='flex flex-col ml-2  w-[400px]'>
                <h3 className='text-[18px] text-yellow-500 '>{data.question}</h3>
                <p>{data.success ? data.ans : null} </p>
            </div>

            <div className=' mr-3 flex items-center justify-center '>
                {
                    data.success ? 
                    <FaArrowUp className=' text-3xl bg-yellow-700  rounded-md' onClick={()=>changeHide(data.id)} />
                    :
                    <FaArrowDown className=' text-3xl bg-yellow-700  rounded-md' onClick={()=>changeShow(data.id)} />
                }


            </div>


        </div>
    )
}

export default List