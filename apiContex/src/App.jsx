import { useState } from 'react'
import './App.css'
import InputForm from './InputForm'
import TodoLists from './TodoLists'

function App() {
  const [todos, setTodos] = useState([{ id: 1, text: "hello" }])
  const [mytext, setMyText] = useState("")
  const [btn, setBtn] = useState(true)
  const [id, setId] = useState(null)

  console.log(id);

  const add = () => {
    if(!mytext) return
    if (id === null) {
      setTodos(prev => [{ id: Date.now(), text: mytext }, ...prev])
      setMyText("")
    } else {
      setTodos(prev => prev.map((ele) => ele.id === id ? { ...ele, text: mytext } : ele))
      setMyText("")
      setBtn(true)
      setId(null)
    }
  }

  const edit = (todo) => {
    setBtn(false)
    setMyText(todo.text)
    setId(todo.id)
  }


  // const save =()=>{
  //   console.log("i am running");

  // }




  console.log(todos);

  return (
    <>
      <InputForm setTodos={setTodos} add={add} mytext={mytext} setMyText={setMyText} btn={btn} />
      {
        todos.map((todo) => (
          <div key={todo.id}>
            <TodoLists todo={todo} setTodos={setTodos} edit={edit} />
          </div>
        )
        )
      }
    </>
  )
}

export default App
