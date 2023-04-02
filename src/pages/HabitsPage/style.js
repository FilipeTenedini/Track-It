import styled from "styled-components";
import { MdAddBox } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";
import { slideBottom, slideTop } from "../../constants/animations";

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
    justify-content: space-between;
    padding: 27px 0 27px 17px;

    h2{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: ${({theme}) => theme.principalTextColor};
    }
`;
export const AddBox = styled(MdAddBox)`
    width: 40px;
    height: 35px;
    color: ${({theme}) => theme.secondTextColor};
    margin-right: 18px;
    cursor: pointer;
    transition: .4s;
    &:hover{
        color: ${({theme}) => theme.principalTextColor};
    }
    &:active{
        color: ${({theme}) => theme.secondTextColor};
    }
`;
export const Content = styled.section`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
`;
export const NoneHabitsMsg = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${({theme}) => theme.lowUse};
    text-align: center;
`

export const HabitFormContainer = styled.article`
    width: 90%;
    max-width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.cardBgColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({closingForm}) => closingForm ? "0px" : "29px"};
    transform: translateY(-100vw);
	-webkit-animation: ${({closingForm}) => closingForm ? slideTop : slideBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: ${({closingForm}) => closingForm ? slideTop : slideBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


    input{
        width: 90%;
        max-width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 11px;
        margin-bottom: 10px;
        outline: none;
        color: ${({theme}) => theme.lowUse};
    }
`;
export const DaysContainer = styled.div`
    max-width: 90%;
    width: 303px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const Day = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({theme}) => theme.selectedColorDay } 1px solid;
    border-radius: 5px;
    background-color: ${({selected, theme}) => selected ? theme.selectedColorDay : theme.cardBgColor};
    color: ${({selected, theme}) => selected ? theme.cardBgColor : theme.selectedColorDay};
    margin-right: 4px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    cursor: pointer;
    transition: .2s;
    &:hover{
        transform: scale(1.1);
    }
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
    background-color: ${({theme}) => theme.cardBgColor};
    color: ${({theme}) => theme.secondTextColor};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: .4s;
    
    &:hover{
        color: ${({theme}) => theme.principalTextColor};
    }
    &:active{
        color: ${({theme}) => theme.secondTextColor};
    }
`;
export const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    border-radius: 5px;
    color: ${({theme}) => theme.cardBgColor};
    background-color: ${({theme}) => theme.secondTextColor};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 0 16px 0 23px;
    transition: .4s;
    &:hover{
        background-color: ${({theme}) => theme.principalTextColor};
    }
    &:active{
        background-color: ${({theme}) => theme.secondTextColor};
    }
`;

export const HabitArea = styled.article`
    width: 90%;
    max-width: 340px;
    min-height: 90px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.cardBgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 29px;
    position: relative;
`;
export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    p{
        max-width: 90%;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: ${({theme}) => theme.lowUse};
        margin-bottom: 18px;
    }
`;
export const TrashIcon = styled(BsTrash3)`
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 15px;
    height: 15px;
    color: ${({theme}) => theme.trashIcon};
`;