import styled from "styled-components";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export const Container = styled.section`
    width: 100%;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    padding-bottom: 90px;
    background-color: ${({theme}) => theme.backgroundColor};
    overflow-y: scroll;
`;
export const Status = styled.div`
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

export const MyCalendar = styled(Calendar)`

    width: calc(100% - 40px);
    max-width: 420px;
    border-radius: 5px;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            padding: 5px;
        }
    }
`;
export const LoaderArea = styled.div`
    margin-top: 130px;
`;