import { useState } from 'react'
import './App.css'
import WriteBlog from './WriteBlog'
import List from './List'

function App() {
  const [data, setData] = useState([{id:1 , title:"hello sir" , blogText:"i am an engineer "}])

  const deleteList=(id)=>{
    setData(prev=>prev.filter(ele=> ele.id != id ))
  }

  return (
    <>
    <div className='flex flex-col items-center w-[100vw] pt-4 '>
      <WriteBlog setData={setData} data={data}/>
      {
        data.map(ele=>{
         return <List key={ele.id} ele={ele} deleteList={deleteList} />
        })
      }
    </div>
    </>
  )
}

export default App
