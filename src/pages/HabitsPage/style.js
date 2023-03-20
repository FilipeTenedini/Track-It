import styled from "styled-components";
import { MdAddBox } from "react-icons/md"
import { c } from "../../constants/colors";

export const Container = styled.section`
    width: 100%;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 70px;
    background-color: ${c.midColor};
    overflow-y: scroll;
`;
export const Status = styled.div`
    width: 100%;
    height: 107px;
    display: flex;
    justify-content: space-between;
    padding: 27px 0 27px 17px;

    h2{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: ${c.darkImp};
    }
`;
export const AddBox = styled(MdAddBox)`
    width: 40px;
    height: 35px;
    color: ${c.lightImp};
    margin-right: 18px;
    cursor: pointer;
    transition: .4s;
    &:hover{
        color: ${c.darkImp};
    }
    &:active{
        color: ${c.lightImp};
    }
`;
export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const NoneHabitsMsg = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${c.dkTextColor};
    text-align: center;
`

export const HabitFormContainer = styled.article`
    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: ${c.cardColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 29px;
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 11px;
        margin-bottom: 10px;
        outline: none;
    }
`;
export const DaysContainer = styled.div`
    display: flex;
    width: 303px;
    justify-content: flex-start;
    align-items: center;
`;
export const Day = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background-color: ${({selected}) => selected ? c.selectedDay : c.cardColor};
    color: ${({selected}) => selected ? c.cardColor : c.selectedDay};
    margin-right: 4px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    cursor: pointer;
`;
export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
`;
export const CancelButton = styled.button`
    width: 84px;
    height: 35px;
    border-radius: 5px;
    background-color: ${c.cardColor};
    color: ${c.lightImp};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: .4s;
    &:hover{
        color: ${c.darkImp};
    }
    &:active{
        color: ${c.lightImp};
    }
`;
export const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    border-radius: 5px;
    color: ${c.cardColor};
    background-color: ${c.lightImp};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 0 16px 0 23px;
    transition: .4s;
    &:hover{
        background-color: ${c.darkImp};
    }
    &:active{
        background-color: ${c.lightImp};
    }
`;