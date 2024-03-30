import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error , setError] = useState()
  const [showRules , setShowRules] = useState(false)
  console.log("currentDice1 =>", currentDice);  // Fix: Changed "diceS" to "currentDice"

  const [score, setScore] = useState(0);

  const generateRandomNumber =(min , max)=>{
    return Math.floor(Math.random() * (max - min ) + min)
  }

  const roleDice =()=>{

    if(!selectedNumber){
      setError("You have not selected any number ")
      return
    } 

    const randomNumber = generateRandomNumber(1,7)
    setCurrentDice(randomNumber)

    if(selectedNumber === randomNumber){
      console.log(currentDice , "hahahahhahha");
      setScore(prev=> prev+randomNumber)
    }else{
      setScore(prev=>prev-1)
    }

    setSelectedNumber(undefined)

  }

  const reSetScore=()=>{
    setScore(0)
    setCurrentDice(1)

  }

  const toggle=()=>{
    setShowRules((prev)=> !prev)
  }
  
   
  

  return (
    <MainContainer>
      <div className='top_Section'>
        <TotalScore score={score} setScore={setScore} />
        <NumberSelector
        error={error} setError={setError}
        selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="btn">
        <OutlineButton onClick={reSetScore}>Reset</OutlineButton>
        <Button onClick={toggle}>
        {showRules ? "hide " : "show "}
          Game Role </Button>
      </div>

      {showRules && <Rules/>}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  margin-top: 70px;
  .top_Section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    flex-wrap: wrap;
    
  }

  .btn{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: center;
  }
`;
