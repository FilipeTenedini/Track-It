import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const LogoArea = styled.header`
    width: 100%;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 180px;
        height: 180px;
    }
`;
export const FormArea = styled.form`
    height: 147px;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;

    input{
        width: 80%;
        max-width: 303px;
        height: 45px;
        padding: 11px;
        margin-bottom: 6px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #D5D5D5;
    }
`;
export const Register = styled.p`
    color: blue;
`;