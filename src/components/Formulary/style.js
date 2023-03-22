import styled from "styled-components";
import { c } from "../../constants/colors";

export const FormArea = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;

    input{
        width: 80%;
        max-width: 303px;
        height: 45px;
        padding: 11px;
        margin-bottom: 10px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #D5D5D5;
    }
`;
export const Register = styled.a`
        text-decoration: none;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration: underline;
        color: ${c.lightImp};
        cursor: pointer;
        margin-bottom: 35px;
`;