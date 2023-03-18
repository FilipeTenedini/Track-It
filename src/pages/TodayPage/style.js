import styled from "styled-components";
import { c } from "../../constants/colors";
import { BsFillCheckSquareFill } from "react-icons/bs"

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
    flex-direction: column;
    justify-content: center;
    padding: 27px 0 27px 17px;
    h2{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: ${c.darkImp};
    }
    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: ${c.dkColor}
    }
`;
export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const CardContainer = styled.article`
    width: 80%;
    max-width: 340px;
    height: 94px;
    border-radius: 5px;
    background-color: ${c.cardColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
`;
export const CardInfos = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: ${c.dkTextColor};
        margin-bottom: 7px;
    }
    p{
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: ${c.dkTextColor};
    }
`;


export const MyCheckBox = styled(BsFillCheckSquareFill)`
    width: 69px;
    height: 69px;
    color: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 15px;
    cursor: pointer;
`;