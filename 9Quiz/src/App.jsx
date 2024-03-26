import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [value , setValue] = useState(null)
  const [result , setResult] = useState(0)

  console.log(value === null);
  const questions = [
    {
      question: "Where is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Where is capital of russia",
      options: ["Delhi", "moscow", "Tokiyo", "Dhaka"],
      correctAnswer: "moscow"
    },
    {
      question: "Where is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Where is capital of russia",
      options: ["moscow", "Ankara", "Tokiyo", "Dhaka"],
      correctAnswer: "moscow"
    },
    // Add more questions here
  ];

  const onhandleChange=()=>{
    if(!value) { return}
    let mynum = currentQuestion+1
    
      if(questions[currentQuestion].correctAnswer === value){
      setResult(prev=> prev + 1)
    }
    setCurrentQuestion(mynum)
  }



// this is the landing page
  if(currentQuestion==questions.length){
    return (
      <>
      <div className="app">
        <h1>Quiz Results</h1>
        <p>Your score: {result}/{questions.length}</p>
        {/* <button onClick={resetQuiz}>Restart Quiz</button> */}
      </div>
      </>
    )
  }
 

  return (
    <>
    <div className='quiz'>
      <h1>Quiz app</h1>
        <h2>{questions[currentQuestion].question}</h2>
      <div>
        {
          questions[currentQuestion].options.map((option , index)=>(
            <div key={index}>
                <input
                 type="radio" 
                name='MyOption'
                value={option}
                id={option}
                checked={value === option}
                onChange={(e)=>setValue(e.target.value)}
                />
                <label htmlFor={option}>{option}</label>
            </div>
          ))
        }
        <button onClick={()=>onhandleChange()}>Submit</button>
      </div>
    </div>
    </>
  )
}

export default App;
