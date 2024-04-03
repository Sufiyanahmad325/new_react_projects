import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header({
    mySearch
}) {
    return (
        <>
        <div className='container'>
            <div className='up'>
                <h2>Logo</h2>
                <input type="text" placeholder='Enter here' onChange={(e)=>mySearch(e.target.value)} />
            </div>


        </div>
        </>
    )
}

export default Header