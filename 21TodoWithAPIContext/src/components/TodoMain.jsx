import React, { useState } from 'react'
import { TodoProvider } from '../APIContext/CreateContext'
import Form from './Form'
import TodoList from './TodoList'


function TodoMain() {
    const [allData, setAllData] = useState([{id:1 , text:"hello sir"} , {id:2 , text:"bye sir"}])
    const [buttonType, setButtonType] = useState("Add") 
    const [myValue, setMyValue] = useState("")
    const [editId, setEditId] = useState(null)

    const addTodo =(data)=>{
        if(editId != null){
            setAllData(prev=> prev.map(ele=> ele.id == editId ? {...ele , text:myValue} : ele))

            setEditId(null)
            setMyValue("")
            setButtonType("Add")
        }else{
            setAllData(prev=> [...prev ,data ])
        }
    }

    const editTodo =(id)=>{
            const data = allData.find(ele=>{
                return ele.id == id
            })

            setMyValue(data.text)
            setButtonType("Edit")
            setEditId(id)
    }

    const deleteTodo=(id)=>{
            setAllData(prev=> prev.filter(ele=> ele.id != id))
    }

  return (
   <TodoProvider value={{allData , buttonType , addTodo , editTodo , deleteTodo , setEditId , myValue , setMyValue}}>

    <div className='w-[100vw] h-[100vh] flex justify-center'>
        <div className=' w-[400px] bg-red-500 p-4 flex flex-col gap-2'>
        <Form/>
        {
            allData.map((Element , index)=>(
                <TodoList todo={Element} key={index}/>
            ))
        }
        </div>

    </div>

   </TodoProvider>
  )
}

export default TodoMain