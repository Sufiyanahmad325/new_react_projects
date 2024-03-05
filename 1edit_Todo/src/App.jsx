
import { useState } from 'react'
import './App.css'
import EditTodo from './component/EditTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-[100vh]'>
     <EditTodo/>
    </div>
  )
}

export default App
