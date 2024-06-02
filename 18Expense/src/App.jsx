import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const [name, setName] = useState()
  const [expense, setExpense] = useState()
  const [mytotal , setMyTotal] =useState(0)



  const submit = () => {
    if(!name || !expense){
      return
    }

    let myNewData = [...data , {name ,expense}]
      setData(myNewData)

      setMyTotal(myNewData.reduce((total , amount) => total+ Number(amount.expense),0))


      setName("")
      setExpense("")
  }


  return (
    <>
      {console.log(name , expense)}
      <div className=" bg-gray-500 min-w-[100vw] h-[100vh] flex flex-col items-center ">

        <h1 className='h-[10vh] w-[100vw] bg-green-600 flex justify-center items-center text-3xl font-bold ' >Personal Budget Tracker</h1>


        <div className="w-[80vw] h-[80vh]  flex flex-col items-center gap-4 ">
          <p className='text-2xl font-bold pt-7'>Add Expense</p>

          <div className='flex flex-col w-[80vw] gap-1'>
            <label htmlFor="1">Name:</label>
            <input type="text" value={name} placeholder='Enter your name here' onChange={(e) => setName(prev=>e.target.value)}
              className='py-2 px-2 rounded-md' />
          </div>

          <div className='flex flex-col w-[80vw] gap-1'>
            <label htmlFor="2">Expense Amount:</label>
            <input type="number" value={expense} placeholder='Enter your amount here' onChange={(e)=>setExpense(prev=> Number(e.target.value))}
              className='py-2 px-2 rounded-md ' />
          </div>

          <button className='font-bold bg-green-500 px-6 py-2 rounded-md mt-9' onClick={submit}>Submit</button>

          <div>
            
            {data.map((Element, index) => {
              return <div className='w-[75vw] flex justify-between font-bold text-white text-[20px]' key={index}>
                <span>{Element.name}:</span>
                <span>${Element.expense.toFixed(1)}</span>
              </div>
            })}

          </div>
        </div>

            <div className=' relative bottom-5 font-bold text-2xl'>
              Total Expense:${mytotal.toFixed(1)||0}
            </div>
        <footer className='h-[10vh] bg-green-500 w-full flex justify-center items-center font-bold'>
          <p>&copy;2024 your name All right reserved</p>
        </footer>

      </div>
    </>
  )
}

export default App
