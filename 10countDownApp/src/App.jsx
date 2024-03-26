import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [day, setDay] = useState()
  const [hours, setHours] = useState()
  const [minute, setMinute] = useState()
  const [second, setSecond] = useState()

useEffect(()=>{

  const futuredate = "11 April 2024 06:00 AM"
  const countDown = () => {
    const mydate = new Date(futuredate)
    const now = new Date()
    const convert = (mydate - now) / 1000

    const myday = Math.floor(convert / 60 / 60 / 24)
    const myhours = Math.floor(convert / 60 / 60) % 24
    const myminute = Math.floor(convert / 60) % 60
    const mysecond = Math.floor(convert) % 60

    setDay(myday)
    setHours(myhours)
    setMinute(myminute)
    setSecond(mysecond)
  }




},[])
  


  return (
    <>
      <div className="container">
        <div className="box">{day}</div>
        <div className="box">{hours}</div>
        <div className="box">{minute}</div>
        <div className="box">{second}</div>
      </div>
    </>
  )
}

export default App
