import {keyframes} from "styled-components";

export const slideBottom = keyframes`
    0% {
        -webkit-transform: translateY(-100vw);
                transform: translateY(-100vw);
                height: 0;
                opacity: 0;
    }
    65% {
        opacity: 0.7;
    }
    100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
                height: 180px;
                opacity: 1;
    }
`;
export const slideTop = keyframes`
    0% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
                height: 180px;
                opacity: 1;
    }
    65% {
        opacity: 0.7;
    }
    100% {
        -webkit-transform: translateY(-100vw);
                transform: translateY(-100vw);
                height: 0px;
                opacity: 0;
    }
`;