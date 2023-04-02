import styled from "styled-components";
import { BsFillCheckSquareFill } from "react-icons/bs"

export const Container = styled.main`
    width: 100%;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 70px;
    background-color: ${({theme}) => theme.backgroundColor};
    overflow-y: scroll;
`;
export const Status = styled.section`
    width: 100%;
    height: 107px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 27px 0 27px 17px;
    h2{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: ${({theme}) => theme.principalTextColor};
    }
`;
export const Text = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${({didSomething, theme}) => didSomething ? theme.concludedColor : theme.lowUse };
`;
export const Content = styled.section`
    width: 100%;
    max-width: 400px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const CardContainer = styled.article`
    width: 80%;
    max-width: 340px;
    min-height: 94px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.cardBgColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
`;
export const CardInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    h3{
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: ${({theme}) => theme.principalTextColor};
        margin-bottom: 7px;
    }
    p{
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: ${({theme}) => theme.lowUse};
    }
`;
export const Span = styled.span`
    color: ${({biggerThan, theme}) => biggerThan ? theme.concludedColor : theme.lowUse};
`
export const MyCheckBox = styled(BsFillCheckSquareFill)`
    width: 50px;
    height: 50px;
    color: ${({done, theme}) => done === "true" ? theme.concludedColor : theme.noChecked };
    border-radius: 15px;
    cursor: pointer;
`;