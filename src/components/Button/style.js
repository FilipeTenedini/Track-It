import styled from "styled-components";

export const MyButton = styled.button`
    width: 80%;
    max-width: 303px;
    height: 45px;
    background-color: ${({theme}) => theme.secondTextColor};
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: ${({disabled}) => disabled ? "cursor" : "pointer"};
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({theme}) => theme.btnTextColor};
    font-size: 21px;
    transition: .3s;

        &:hover{
            background-color: ${({theme}) => theme.principalTextColor};
        }
        &:active{
            background-color: ${({theme}) => theme.secondTextColor};
        }
`;