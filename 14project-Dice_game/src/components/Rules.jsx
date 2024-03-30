import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RuleContainer>
        <h2>How to play dice game</h2>
        <div className='text'>
        <p>Select any number</p>
        <p>after click on dice if selected is equal to dice number you will get same point as dice {"0"}</p>
        <p>if you get wrong guess then 2  point will be dedcute</p>
        </div>
       
    </RuleContainer>
  )
}


export default Rules

const RuleContainer = styled.div`
background-color: #fbf1f1;
padding: 20px;
max-width: 800px;
margin: 0 auto;
margin-top: 10px;

h2{
    font-size: 24px;
    font-weight: bold;
}

.text{
    margin-top: 10px;
}

.text p{
    font-size: 14px;
}
`;