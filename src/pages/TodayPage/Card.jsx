import axios from "axios";
import { useContext, useState } from "react";
import { BASE_URL } from "../../api/url";
import { AuthContext } from "../../context/AuthContext";
import { MyCheckBox, CardContainer, CardInfos, HabitInfoText } from "./style";
import CheckLoader from "../../components/Loaders/CheckLoader";

export default function Card({item: {id, name, done, currentSequence, highestSequence}, setConcludeds}){
    const [isConcluded, setIsConcluded] = useState(done);
    const [loadingCheck, setLoadingCheck] = useState(false)
    const { auth } = useContext(AuthContext);
    
    function handleToggleDoneHabit() {
        setLoadingCheck(true)
        const config = { headers: { 'Authorization': `Bearer ${auth.token}` } };
        if (!isConcluded) {
            axios
                .post(`${BASE_URL}/habits/${id}/check`, {}, config)
                .then(() => {
                    setIsConcluded(true);
                    setConcludeds(prevState => prevState + 1);
                    setLoadingCheck(false)
                })
                .catch(err => alert(err.response.data.message));
        } else {
            axios
                .post(`${BASE_URL}/habits/${id}/uncheck`, {}, config)
                .then(() => {
                    setIsConcluded(false);
                    setConcludeds(prevState => prevState - 1);
                    setLoadingCheck(false)
                })
                .catch(err => alert(err.response.data.message));
        }
    }

    return (
        <CardContainer>
            <CardInfos>
                <h3>
                    {name}
                </h3>
                <p>
                    Sequência atual: <HabitInfoText biggerThan={currentSequence >= highestSequence}>{currentSequence} dias</HabitInfoText>
                </p>
                <p>
                    Seu recorde: {highestSequence} dias
                </p>
            </CardInfos>
            {loadingCheck
                ? <CheckLoader />
                : <MyCheckBox done={isConcluded.toString()} onClick={() => handleToggleDoneHabit(done)} />
            }
        </CardContainer>
    );
}