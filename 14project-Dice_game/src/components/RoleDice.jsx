import React, { useState } from 'react'
import styled from 'styled-components'

function RoleDice({currentDice ,roleDice}) {
 
  
  

  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`/image/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice


const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.dice{
  cursor: pointer;
  transition: 0.5s ease-in;
}



p{
  font-size: 24px;
  font-weight: 600;
}

`;