import axios from "axios";
import { useContext, useState } from "react";
import { BASE_URL } from "../../api/url";
import { AuthContext } from "../../context/AuthContext";
import { MyCheckBox, CardContainer, CardInfos } from "./style";
export default function Card({id, name, done, currentSequence, highestSequence, concludeds, setConcludeds}){
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
        <CardContainer>
            <CardInfos>
                <h3>
                    {name}
                </h3>
                <p>
                    Sequência atual: {currentSequence} dias
                </p>
                <p>
                    Seu recorde: {highestSequence} dias
                </p>
            </CardInfos>
            <MyCheckBox 
                done={isConcluded}
                onClick={() => handleToggleDoneHabit(done)}    
            />
        </CardContainer>
    );
}