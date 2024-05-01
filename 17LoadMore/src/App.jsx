import './App.css'
import { getData } from './APICall'
import { useEffect, useState } from 'react';
import List from './List';

function App() {
  const [productData, setProductData] = useState([]);
  const [next , setNext] = useState(10)
  const [show , setShow] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const nextFunction = () => {
   const newNext = next + 10
   setNext(newNext)
    if(newNext>=productData.length){
      console.log(next);
      setShow(true)
    }
  };
  


  return (
    <div className='main'>
      <div className='container'>
        {
          productData.slice(0 , next).map((element, index) => (
            <List element={element} key={index}/>

            //  {productData.map((element, index) => (
            //   index < next && <List key={index} element={element} />
            // ))}
            
          ))
        }
      </div>
        
      <button disabled={show} className='next' onClick={nextFunction}>Next</button>
    </div>
    
  )
}

export default App
