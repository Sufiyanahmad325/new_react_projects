import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, removeTodo } from '../feature/todo/TodoSlice';

function TodoForm({setSelectData, selectData}) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const data = useSelector(state=> state.todos)

  useEffect(()=>{
    if(selectData){
      setText(selectData.text)
    }else{
      setText("")
    }
  },[selectData])

  const handler = () => {
    if (!text.trim()) {
      return;
    }
     if(selectData){
      dispatch(editTodo({id:selectData.id , text}))
      console.log(data)
      setSelectData("")
      setText("")
    }else{
    dispatch(addTodo(text));
    setText("");
    let a = data
    console.log(a)
    }
  };

  return (
    <div className='flex gap-4'>
      <input 
        type="text" 
        placeholder='Enter your query here'
        className='border-2 border-yellow-500 w-[300px] rounded-md placeholder:font-bold py-3 px-2'
        onChange={(e) => setText(e.target.value)}
        value={text} // Add this to keep the input controlled
      />
      <button
        className='border-2 border-black w-20 py-1 px-2 rounded-md hover:bg-blue-300'
        onClick={handler}
      >
        Submit
      </button>
    </div>
  );
}

export default TodoForm;
