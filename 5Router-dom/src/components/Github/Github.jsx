import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    console.log(data);
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Sufiyanahmad325')
    //     .then((res)=> res.json())
    //     .then((res)=> setData(res))
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}
    <img  src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader= async ()=>{
    const  response = await fetch('https://api.github.com/users/Sufiyanahmad325')
    
    return response.json()
}