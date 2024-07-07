import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 className=' text-3xl font-bold'>Learn About redux toolkit</h1> */}
     <Addtodos/>
     <Todos/>
    </>
  )
}

export default App
