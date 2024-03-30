import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
        <div className='container'>
            <div className='up'>
                <h2>Logo</h2>
                <input type="text" />
            </div>

                <div className="item">
                   
                   <button>All</button>
                   <button>BreakFast</button>
                   <button>Lunch</button>
                   <button>Dinner</button>
                </div>
        </div>
        </>
    )
}

export default Header