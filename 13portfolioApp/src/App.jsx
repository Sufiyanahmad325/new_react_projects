import { useState } from 'react'
import './App.css'
import List from './List'
import Header from './Header'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
    </>
  )
}

export default App
