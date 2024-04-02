import { useEffect, useState } from 'react'
import './App.css'
import List from './List'
import Header from './Header'
import Btn from './Btn'

function App() {
  const [data, setData] = useState([])
  const [filterData, setfilterData] = useState([])

  const foods = [
    {
      type: "dinner",
      name:"biryani",
      img: "https://images.pexels.com/photos/7837978/pexels-photo-7837978.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: '10'
    },
    {
      type: "dinner",
      name:"chicken egg biryani",
      img: "https://images.pexels.com/photos/9609853/pexels-photo-9609853.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: '15'
    },
    {
      type: "breakfast",
      name:"Egg fry",
      img: "https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: '8'
    },
    {
      type: "lunch",
      name:"slade food",
      img: "https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: '12'
    },
    {
      type: "dinner",
      name:"vagitable food",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: '20'
    },
    {
      type: "breakfast",
      name:"Egg Mango shup",
      img: "https://images.pexels.com/photos/916925/pexels-photo-916925.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: '7'
    },
    {
      type: "lunch",
      name: "butter chiken nan",
      img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: '11'
    },
    {
      type: "dinner",
      name:"pizza",
      img: "https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: '18'
    },
    {
      type: "breakfast",
      name:"Egg bread",
      img: "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: '9'
    },
    {
      type: "lunch",
      name:"pasta",
      img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: '14'
    }
  ];
  


  useEffect(() => {

    setData(foods)
    setfilterData(foods)
  }, [])

  console.log(filterData);


  return (
    <div className='main'>
      <Header />
      <div className='mybtn'>
        <Btn name={'All'}/>
        <Btn name={'BreakFast'} />
        <Btn name={'Lunch'} />
        <Btn name={'Dinner'} />
      </div>


      <div className="myallList">
      {
        filterData.map((ele, index) => (
          <div key={index}>
            <List image={ele.img} price={ele.price} name={ele.name} />
          </div>
        ))
      }
        </div>
    </div>
  )
}

export default App
