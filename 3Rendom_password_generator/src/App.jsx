import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(5)
  const [BigAlphabet, setBigAlphabet] = useState(false)
  const [smallAlphabet, setSmallAlphabet] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [number, setNumber] = useState(false)
  const [showData, setShowData] = useState(null)



  const generate = () => {
    let total = "";
    let pass = "";
    if (BigAlphabet) total += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (smallAlphabet) total += "abcdefghijklmnopqrstuvwxyz"
    if (symbol) total += "!@#$%^&*()_+}{?[]"
    if (number) total += "0123456789"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * total.length )
      pass += total[char]
    }
    setShowData(pass)
    console.log(showData);
  }

  return (
    <>
      <div className='w-[100vw] pt-4 h-[100vh] bg-blue-500'>



        <div className='w-[70vw] mx-auto flex gap-2  items-start justify-center '>

          <input type="text" value={showData} className='border-2 px-3 py-2 rounded-md w-[300px]' />
          <input type="Number" min={5} max={15} value={length} onChange={(e) => setLength(Number(e.target.value))}
            className='border-2 pl-2  py-2 rounded-md w-[50px] ' />
          <button onClick={generate}
            className='border-2 px-3 py-2 rounded-md text-white' >Click</button>


        </div>

        <div className='flex flex-col w-[65vw] h-[70vh] mx-auto font-bold  '>

          <div className='flex justify-between px-5 pt-2 text-[19px]'>

            <label htmlFor="Alphabet">Big Alphabet</label>
            <input type="checkbox" id='Alphabet' checked={BigAlphabet} onChange={(e) => setBigAlphabet((prev => !prev))}
              className='w-4' />

          </div>

          <div className='flex justify-between px-5 pt-2 text-[19px]'>

            <label htmlFor="alphabet">Small Alphabet</label>
            <input type="checkbox" id='alphabet' checked={smallAlphabet} onChange={(e) => setSmallAlphabet((prev => !prev))} className='w-4' />

          </div>

          <div className='flex justify-between px-5 pt-2 text-[19px]'>

            <label htmlFor="symbol">symbol</label>
            <input type="checkbox" id='symbol' checked={symbol} onChange={(e) => setSymbol((prev => !prev))}
              className='w-4' />

          </div>

          <div className='flex justify-between px-5 pt-2 text-[19px]'>

            <label htmlFor="Number">Number</label>
            <input type="checkbox" id='Number' checked={number} onChange={(e) => setNumber((prev => !prev))}
              className='w-4' />

          </div>








        </div>

      </div>
    </>
  )
}

export default App
