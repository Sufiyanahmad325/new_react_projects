
import { useState } from 'react'
import './App.css'
import EditTodo from './component/EditTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <EditTodo/>
    </>
  )
}

export default App
