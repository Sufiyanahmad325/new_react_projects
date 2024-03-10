import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './InputBox'

function App() {
  const [count, setCount] = useState(0)
  const [label , setLebal] = useState("to")

  return (
    <>
      <div className='w-[100vw] h-[100vh]'>

   <InputBox
   label="from"
   onCurrencyChange={(e)=>{}}
   onInputChange={(e)=>{}}
   />

   {/* <InputBox
   label="from"
   onCurrencyChange={(e)}
   onInputChange={(e)}
   /> */}

       </div>
    </>
  )
}

export default App
