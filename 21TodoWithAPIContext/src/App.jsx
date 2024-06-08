import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoMain from './components/TodoMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoMain/>
    </>
  )
}

export default App
