import { useState } from 'react'
import './App.css'

function App() {
  const [popUp, setPopUp] = useState(true)

  const popOpenClose =()=>{
    setPopUp(prev=> !prev)
  }

  return (
    <>
      <div className="container">
        <div className="navbar">
          <class className="list">
            <a href="">home</a>
            <a href="">about</a>
            <a href="">contact</a>
            <a href="">bachelor</a>
          </class>
          <button className='loginbtn'
          onClick={popOpenClose}
          >Login</button>
        </div>
        {
          popUp && <div className="popop">
          <h1>hello sir</h1>
          <button className='close'
          onClick={popOpenClose}
          >close</button>
        </div>
        }
      </div>
    </>
  )
}

export default App
