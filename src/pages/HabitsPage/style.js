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