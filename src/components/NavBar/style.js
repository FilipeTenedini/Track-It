import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.navBarBgColor};
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
            color: ${({theme}) => theme.secondTextColor};

            &:hover{
                color: ${({theme}) => theme.principalTextColor};
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