import axios from "axios";
import { useContext, useState } from "react";
import { BASE_URL } from "../../api/url";
import { AuthContext } from "../../context/AuthContext";
import { MyCheckBox, CardContainer, CardInfos, HabitInfoText } from "./style";

export default function Card({id, name, done, currentSequence, highestSequence, setConcludeds}){
    const [isConcluded, setIsConcluded] = useState(done || false);

    const { auth } = useContext(AuthContext);
    
    const handleToggleDoneHabit = () => {
        const config = {headers: {'Authorization': `Bearer ${auth.token}`}}
        if (!isConcluded){
            axios
                .post(`${BASE_URL}/habits/${id}/check`, {}, config)
                .then(() => {
                    setIsConcluded(prevState => prevState === true ? false : true)
                    setConcludeds(prevState => prevState + 1);
                })
                .catch(err => alert(err.response.data.message));
        } else {
            axios
            .post(`${BASE_URL}/habits/${id}/uncheck`, {}, config)
            .then(() => {
                setIsConcluded(prevState => prevState === false ? true : false)
                setConcludeds(prevState => prevState - 1);
            })
            .catch(err => alert(err.response.data.message));
        }
    }

    return (
        <CardContainer data-test="today-habit-container">
            <CardInfos>
                <h3 data-test="today-habit-name">
                    {name}
                </h3>
                <p data-test="today-habit-sequence">
                    Sequência atual: <HabitInfoText biggerThan={currentSequence >= highestSequence}>{currentSequence} dias</HabitInfoText>
                </p>
                <p data-test="today-habit-record">
                    Seu recorde: {highestSequence} dias
                </p>
            </CardInfos>
            <MyCheckBox 
                done={isConcluded}
                onClick={() => handleToggleDoneHabit(done)}
                data-test="today-habit-check-btn"  
            />
        </CardContainer>
    );
}