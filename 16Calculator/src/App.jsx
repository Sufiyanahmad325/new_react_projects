import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')

    const handleClick=(e)=>{
      const value = e.target.innerHTML;
      console.log(value);
        if(value === "="){
          setInput(eval(input).toString())
        }else if(value == "AC"){
            setInput("")
        }else if(value == "DEL"){
          setInput(inputslice(0 , -1))
        }else if(value == "x"){
          setInput(input+ '*')
        }else{
          setInput(input+value)
        }
    }

  return (
    <div className="calculator">
            <input type="text" placeholder="0" value={input} disabled />

            <div>
                <button className="operator" onClick={handleClick}>AC</button>
                <button className="operator" onClick={handleClick}>DEL</button>
                <button className="operator" onClick={handleClick}>%</button>
                <button className="operator" onClick={handleClick}>/</button>
            </div>
            <div>
                <button onClick={handleClick}>7</button>
                <button onClick={handleClick}>8</button>
                <button onClick={handleClick}>9</button>
                <button className="operator" onClick={handleClick}>x</button>
            </div>
            <div>
                <button onClick={handleClick}>4</button>
                <button onClick={handleClick}>5</button>
                <button onClick={handleClick}>6</button>
                <button className="operator" onClick={handleClick}>-</button>
            </div>
            <div>
                <button onClick={handleClick}>1</button>
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
                <button className="operator" onClick={handleClick}>+</button>
            </div>
            <div>
                <button onClick={handleClick}>00</button>
                <button onClick={handleClick}>0</button>
                <button onClick={handleClick}>.</button>
                <button className="equalBtn" onClick={handleClick}>=</button>
            </div>
        </div>
    );
}

export default App
