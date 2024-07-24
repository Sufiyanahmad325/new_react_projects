import { useContext, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import List from './components/List'
import UserConatextProvider, { userContext } from './ApiContext/ApiCotext'
function App() {

  const { user } = useContext(userContext)

  return (
    <>
      <div className='w-screen bg-gray-500 h-screen flex items-center flex-col gap-2 '>
          <TodoForm />

          {
            user.map(element => (
              <List todo={element} key={element.id} />

            ))
          }

      </div>
    </>
  )
}

export default App
