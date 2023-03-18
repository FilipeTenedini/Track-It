import styled from "styled-components";
import { c } from "../../constants/colors";

export const MyButton = styled.button`
    width: 80%;
    max-width: 303px;
    height: 45px;
    background-color: ${c.lightImp};
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: ${({disabled}) => disabled ? "cursor" : "pointer"};
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${c.lightColor};
    font-size: 21px;
    transition: .3s;

        &:hover{
            /* transform: scale(1.1); */
            background-color: ${c.darkImp};
            /* opacity: .9;  */
        }
        &:active{
            background-color: ${c.lightImp}
        }
`;