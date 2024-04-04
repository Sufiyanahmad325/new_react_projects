import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'

function App() {
  const [count, setCount] = useState(0)

  const [faq ,setFaq] =useState([
    {
      id:1,
      question:"who is capital of India",
      ans : "New Delhi is the capital of india",
      success:false
    },

    {
      id:2,
      question:"who is capital of Iran",
      ans : "Tehran is the capital of Iran",
      success:false
    },

    {
      id:3,
      question:"what is javaScript",
      ans : "javaScript is programming language each is use to web desing native aplication and backend",
      success:false
    }
  ])

  const changeShow =(id)=>{
    setFaq(prev=>prev.map((ele)=>ele.id === id ?{...ele , success:true}:ele))
    console.log('hello sir' );
  }
  const changeHide =(id)=>{
    setFaq(prev=>prev.map((ele)=>ele.id === id ?{...ele , success:false}:ele))
    console.log('hello sir' );
  }


    

  return (
    <>
      <div className="bg-black text-white text-3xl mb-4">FAQ'S</div>
        <div className="hello">
          {
          faq.map((data)=>(
            <List key={data.id} data={data} changeShow={changeShow} changeHide={changeHide} />
          ))
          }
        </div>
    </>
  )
}

export default App
