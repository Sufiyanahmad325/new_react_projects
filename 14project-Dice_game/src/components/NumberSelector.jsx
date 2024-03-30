import React, { useState } from 'react'
import styled from 'styled-components'


function NumberSelector({selectedNumber,setSelectedNumber,setError ,error}) {
  const arrayNumber = [1, 2, 3, 4, 5, 6]

  const numberSelectorHandler=(value)=>{
    setSelectedNumber(value)
    setError("")
  }
  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className='flex'>
        {arrayNumber.map((value, i) => {
          return (
            <Box
              isSelected={value === selectedNumber}
              key={i} onClick={() => numberSelectorHandler(value)}>
              {value}
            </Box>)
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: end;
.flex{
  display: flex;
  gap: 24px;
}
p{
  font-size: 24px;
  font-weight: 700;
  
}
.error{
  color: #780000b4;
}
`;

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
transition: 0.3s ease-in;
border-radius: 5px;


background-color: ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => props.isSelected ? "white" : "black"};

`