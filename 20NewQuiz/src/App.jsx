import { useState } from 'react'
import Button from './Button'

function App() {
  const [quiz, setQuiz] = useState([
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Lisbon", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
      ]
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Southern Ocean", correct: false },
        { text: "Pacific Ocean", correct: true }
      ]
    }
  ])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedValue, setSelectedValue] = useState()
  const [score, setScore] = useState(0)

  const next = () => {
    check()
  }

  const check = () => {
    console.log(selectedValue)
        if (selectedValue.correct) {
           setScore(prev => prev + 1)
        }

    setCurrentQuestion(prev => prev + 1)

  }

  
  if (currentQuestion >= quiz.length) {
    return (
      <div className='flex items-center justify-center h-[100vh]'>
        <div className='w-[600px] bg-gray-200 h-[200px] flex flex-col items-center justify-center gap-6 p-3'>
          <div className='text-2xl font-bold'>Quiz Finished!</div>
          <div className='text-xl'>Your score: {score} / {quiz.length}</div>
        </div>
      </div>
    );
  }
  return (
    <>
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='w-[600px] bg-gray-200 h-[200px] flex flex-col items-center justify-center gap-6 p-3'>
        <div className='text-2xl font-bold'>{quiz[currentQuestion].question}</div>
        <div className='flex gap-2'>
          {
            quiz[currentQuestion].answers.map((Element, index) => {
              return <Button option={Element.text} key={index} data={Element} setSelectedValue={setSelectedValue} />
            })
          }
        </div>
        <button className='text-1xl py-1 px-5 border-2 border-solid border-blue-800 
        rounded-md hover:bg-blue-500
        ' onClick={next}>Next</button>
      </div>
    </div>
    </>
  )
}

export default App
