import styled from "styled-components";
import  { c } from "../../constants/colors";

export const Container = styled.footer`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${c.cardColor};
    position: fixed;
    bottom: 0;
    padding: 0px 36px;

    button{
        border: none;
        height: 22px;
        cursor: pointer;
        background-color: transparent;
        transition: .2s;
        
        &:hover{
            transform: scale(1.1);
        }

        a{
            text-decoration: none;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: ${c.lightImp};

            &:hover{
                color: ${c.darkImp};
            }        
        }
    }
`;
export const ProgbarSpace = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 40px;
    border-radius: 50%;
    cursor: pointer;
`;