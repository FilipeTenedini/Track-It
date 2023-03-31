import styled from "styled-components";
import { c } from "../../constants/colors";

export const Container = styled.header`
    width: 100%;
    height: 70px;
    background-color: ${c.darkImp};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
export const LogoArea = styled.img`
    margin: 10px 0 10px 15px;
    cursor: pointer;
`;
export const ThemingArea = styled.div`
    position: absolute;
    right: 80px;
    font-size: 25px;
    cursor: pointer;
`;
export const FotoArea = styled.div`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;