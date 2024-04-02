import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
        <div className='container'>
            <div className='up'>
                <h2>Logo</h2>
                <input type="text" placeholder='Enter here' />
            </div>


        </div>
        </>
    )
}

export default Header