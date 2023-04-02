import styled from "styled-components";

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
    input[type="checkbox"]{
        height: 20px;
        width: 20px;
        margin: 0 0 0 10px;
        border-radius: 50%;
    }
`;
export const Register = styled.a`
        text-decoration: none;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration: underline;
        color:${({theme}) => theme.secondTextColor};
        cursor: pointer;
        margin-bottom: 35px;
`;
