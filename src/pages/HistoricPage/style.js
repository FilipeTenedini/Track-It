import styled from "styled-components";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { c } from "../../constants/colors";

export const Container = styled.section`
    width: 100%;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    padding-bottom: 90px;
    background-color: ${c.midColor};
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
        color: ${c.darkImp};
    }
`;

export const MyCalendar = styled(Calendar)`

    width: calc(100% - 40px);
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
`