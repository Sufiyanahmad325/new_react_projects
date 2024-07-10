import { useState } from 'react'
import { Provider } from 'react-redux'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full min-h-[100vh] bg-gray-500 flex flex-col gap-2 items-center" >
      <TodoList/>
    </div>
    </>
  )
}

export default App
