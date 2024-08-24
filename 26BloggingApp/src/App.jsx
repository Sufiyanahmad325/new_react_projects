import { useState } from 'react'
import './App.css'
import WriteBlog from './WriteBlog'
import List from './List'

function App() {
  const [data, setData] = useState([{ id: 1, title: "hello sir", blogText: "i am an engineer " }])
  const [editId, setEditId] = useState(null)

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [isEdit, setIsEdit] = useState(false)





  const addList = (newData) => {
    if (editId != null) {
      setData(prev => prev.map(ele => ele.id == editId ? { ...ele, title: title, blogText: text } : ele));
      setEditId(null)         
      setIsEdit(false)
      console.log("hello sir")
    } else {
      setData(prev => [newData, ...prev]);
    }
    setTitle("")
    setText("")
  }




  const edit = (id, myTitle, myText) => {
    console.log(id, myTitle, myText)
    setTitle(myTitle)
    setText(myText)
    setIsEdit(true)
    setEditId(id)
  }





  const deleteList = (id) => {
    setData(prev => prev.filter(ele => ele.id != id))
  }



  return (
    <>
      <div className='flex flex-col items-center w-[100vw] pt-4 '>
        <WriteBlog setData={setData} data={data} addList={addList}
          setTitle={setTitle} setText={setText} title={title} text={text}
          isEdit={isEdit}
        />
        {
          data.length > 0 ? (

            data.map(ele => {
              return <List
                key={ele.id}
                ele={ele} deleteList={deleteList}
                setTitle={setTitle}
                setText={setText}
                edit={edit}
                setIsEdit={setIsEdit}
              />
            })

          ) : <p className='mt-4'>No blogs to display</p>

        }
      </div>
    </>
  )
}

export default App
