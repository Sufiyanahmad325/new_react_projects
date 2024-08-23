import { useState } from 'react'
import './App.css'
import WriteBlog from './WriteBlog'
import List from './List'

function App() {
  const [data, setData] = useState([{id:1 , title:"hello sir" , blogText:"i am an engineer "}])

  const [title , setTitle ] = useState("")
  const [text , setText ] = useState("")


  const addList =(newData)=>{
    console.log(newData)
    setData(prev => [newData, ...prev]);
    setTitle("")
    setText("") 
    console.log(data)
  }

  const deleteList=(id)=>{
    setData(prev=>prev.filter(ele=> ele.id != id ))
  }

  return (
    <>
    <div className='flex flex-col items-center w-[100vw] pt-4 '>
      <WriteBlog setData={setData} data={data} addList={addList}
      setTitle={setTitle} setText={setText} title={title} text={text}
      />
      {
        data.map(ele=>{
         return <List key={ele.id} ele={ele} deleteList={deleteList}  
         setTitle={setTitle} setText={setText} /> 
        })
      }
    </div>
    </>
  )
}

export default App
