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
    cursor: pointer;

    color: ${c.lightColor};
    font-size: 21px;
`;