import { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function App() {
  const [changebtn  , setChangebtn] = useState(true)
  const [data, setData] = useState([{id:1 , name:'Hello sir'} ,{id:2 , name:'Hello'}])
  const [typeData , setTypeData] = useState('')
  const [myId , setMyId] = useState(null)
  
  const addTodo = ()=>{
    if(!typeData){
      return
    }else if (myId !== null){
        setData(prev=>prev.map((item)=>item.id === myId ?{...item , name:typeData}:item))
        setChangebtn(true)
        setMyId(null)
    }
    else{
      setData(prev=>[...prev , {id:Date() , name:typeData}])
    }
    setTypeData('')
  }

  const deleteTodo=(id)=>{
      setData(prev=>prev.filter((item)=>item.id !== id))
  }

  const edit = (id)=>{
   let mainData= data.map((item)=>{
      if(item.id === id ){
        setTypeData(item.name)
      }
      
    })
    setChangebtn(false)
    setMyId(id)

  }
  return (
    <>
      <div className='w-[100vw] h-[100vh] bg-blue-950'>

        <div className='flex gap-2 w-[50vw] mx-auto pt-4'>
          <input type="text" placeholder='enter here' value={typeData} onChange={(e)=>setTypeData(e.target.value)}
            className='border-2 border-yellow-200 px-4  py-2 rounded-md' />
          <button className='border-2 px-4 py-2 rounded-md' onClick={addTodo}>{changebtn?'Add':'Edit'}</button>
        </div>
{
  data.map((item)=>{
    return (
      <div className=' flex mx-auto w-[50vw] gap-2 ' key={item.id}>
      <h3 className='bg-white w-[220px] px-4 py-1 mt-2'>{item.name}</h3>
      <div className='flex mt-2 gap-2'>
        <FaRegEdit className='text-3xl border p-1 w-[40px] rounded-md' onClick={()=>edit(item.id)}></FaRegEdit>
        <MdDelete className='text-3xl border p-1 w-[40px] rounded-md' onClick={()=>deleteTodo(item.id)}></MdDelete>
      </div>
    </div>
    )
  })
}
       
      </div>

    </>
  )
}

export default App
