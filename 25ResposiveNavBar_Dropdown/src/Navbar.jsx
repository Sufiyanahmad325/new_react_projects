import React, { useState } from 'react'
import "./navbar.css"

function Navbar() {
    const [change, setChange] = useState(false)
    const onHandalChange=()=>{
            setChange(prev=>!prev)
            console.log('hello')
    }
    return (
        <>
            <div className='navbar'>

                <div className='left'>
                    <div className="hamburger" onClick={onHandalChange}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='logo' >Logo</div>

                </div>

                <div className="right">
                    <div className='links' >
                        <li>Home</li>
                        <li>Aabout</li>
                        <li>Contact</li>
                        <li>Tech</li>
                    </div>
                </div>
            </div>
                <div className={change ? 'slider active' : 'slider'} >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className='downli'>Tech</li>
                </div>
                <p>hello sir i am programmer</p>
                
        </>
    )
}

export default Navbar