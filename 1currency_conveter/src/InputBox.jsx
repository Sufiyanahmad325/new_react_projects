import React from 'react'

function InputBox({
    label,
    onCurrencyChange,
}) {
    return (
        <div className='w-[65vw] h-[70vh] mx-auto my-auto  ' >


            <div className='w-[60vw] h-auto mx-auto border-2 py-2 flex gap-6 pl-4 rounded-lg '>

                <div className='flex flex-col gap-3 '>
                    <label htmlFor="main" className='font-bold'>{label}</label>
                    <input type="text" placeholder='enter your amount'
                    onChange={(e)=>onInputChange && onInputChange(e.target.value)}
                        className='border-2 w-60 px-3 py-3 rounded-xl'
                    />
                </div>

                <div className=' flex flex-col justify-between font-bold'>

                    <h2>Select Currency</h2>
                    <select name="currency-option" id="" className='m-3'
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    >
                        <option value="idea">idea</option>
                        <option value="airtel">airtel</option>
                    </select>

                </div>

            </div>

        </div>
    )
}

export default InputBox