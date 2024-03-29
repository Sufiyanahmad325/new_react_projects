import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const watch = () => {
    setSeconds(prev => {
      if (prev < 59) {
        return prev + 1;
      } else {
        setMinutes(prevMin => {
          if (prevMin < 59) {
            return prevMin + 1;
          } else {
            setHours(prevHours => prevHours + 1);
            return 0;
          }
        });
        return 0;
      }
    });
  };

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(watch, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <>
      <div className="mybox">
        <div className="boxes">
          <div className="box">{hours}</div>
          <div className="box">{minutes}</div>
          <div className="box">{seconds}</div>
        </div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
      </div>
    </>
  );
}

export default App;
