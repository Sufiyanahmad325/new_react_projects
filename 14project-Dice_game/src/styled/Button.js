import styled from "styled-components";


export const Button = styled.button`
    padding: 10px 18px;
    background-color: black;
    border-radius: 5px;
    color: white;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s ease-in;


    &:hover{
        background-color: #ffffff;
        border: 1px solid black;
        color: black;
         font-weight: 700;
    }
`;

export const OutlineButton = styled(Button)`
background-color: wheat;
color: black;
font-weight: 700;
    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
         font-weight: 700;
    }
`;