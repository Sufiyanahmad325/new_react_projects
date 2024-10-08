import React, { useState } from 'react'

function WriteBlog({ setData, data, setText, setTitle, text, title , addList , isEdit}) {




  const postData = () => {
    let newBlog = { id: Date(), title: title, blogText: text }
    addList(newBlog)
   
  }

  return (

    <div className='flex flex-col w-[80vw] gap-2'>


      <input type="text" placeholder='Enter your title'
        className='border-gray-400 border-2 py-1 px-3 text-[18px] rounded-md'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea name="" id="" placeholder='write your blog here'
        className='border-gray-400 border-2 min-h-44 py-1 px-3 text-[18px] rounded-md'
        value={text}
        onChange={(e) => setText(e.target.value)}

      ></textarea>


      <button
        className='border-gray-400 border-2 m-auto py-1 px-6 rounded-md '
        onClick={() => postData()}
      >
        {isEdit ? "Edit" : "Post"}
      </button>
    </div>
  )
}

export default WriteBlog