import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [millisecond, setMillisecond] = useState(0)
  const [run , setRun] = useState(true)


  let intervalRef = useRef()
  // console.log(intervalRef);

  const watch = () => {
    setMillisecond(prevMilli => {
      if (prevMilli < 99) {
        return prevMilli + 1;
      } else {
        setSeconds(prevSec => {
          if (prevSec < 59) {
            return prevSec + 1;
          } else {
            setMinutes(prevMin => {
              if (prevMin < 59) {
                return prevMin + 1;
              } else {
                setHours(prevHour => prevHour + 1);
                return 0;
              }
            });
            return 0;
          }
        });
        return 0;
      }
    });
  };


  const myRun = ()=>{
    if(run === true){
      start()
    }else{
      stop()
    }
    setRun(prev => !prev)
  }


  const start = () => {
    intervalRef.current = setInterval(() => {
      watch()
    }, 10);
  }


  const stop = ()=>{
    clearInterval(intervalRef.current);
    intervalRef.current = null
  }







return (
  <>
    <div className='main-hero'>
      <div className='hero'>
        <div className="watch">
          <div className='box'> {hours} </div>
          <div className='box'> {minutes} </div>
          <div className='box'> {seconds} </div>
          <div className='box'> {millisecond} </div>
        </div>
        <button className="btn" onClick={myRun}>{run ? "Start" : "Stop"}</button>
      </div>
    </div>
  </>
)
}

export default App
