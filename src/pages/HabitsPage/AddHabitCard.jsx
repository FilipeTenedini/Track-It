import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { initialLetterDays } from "../../constants/initialLetterDays";
import { BASE_URL } from "../../api/url";
import { HabitFormContainer, DaysContainer, Buttons, CancelButton, SaveButton} from "./style";
import DayButton from "./DayButton";

export default function AddHabitForm(){
    const [selectedDays, setSelectedDays] = useState([]);
    const [habitTitle, setHabitTitle] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const {auth} = useContext(AuthContext);

    const selectDay = (id) => {
        selectedDays.includes(id)
        ? setSelectedDays((prevState) => prevState.filter(item => item !== id))
        : setSelectedDays((prevState) => Array.from(new Set([...prevState, id])))
    }

    const addHabit = () => {
        setIsDisabled(true);

        const obj = {
            name: habitTitle,
            days: selectedDays
        }
        const config = {headers: {'Authorization': `Bearer ${auth.token}`}}
        axios
            .post(`${BASE_URL}/habits`, obj, config)
            .then(res => {
                console.log(res)
                setSelectedDays([]);
                setHabitTitle([]);
            })
            .catch(err => alert(err.response.data.message))
            .finally(() => setIsDisabled(false));
    }

    return(
        <HabitFormContainer>
            <input
                type="text" 
                placeholder="nome do hábito"
                value={habitTitle}
                onChange={(e) => setHabitTitle(e.target.value)}
                disabled={isDisabled}
            />
            <DaysContainer>
                {initialLetterDays.map((char, ind) => (
                    <DayButton
                        key={ind}
                        char={char}
                        id={ind}
                        isSelected={selectedDays.includes(ind)}
                        clickFn={(id) => selectDay(id)}
                    />
                ))}
            </DaysContainer>
            <Buttons>
                <CancelButton disabled={isDisabled}>
                    Cancelar
                </CancelButton>
                <SaveButton onClick={addHabit} disabled={isDisabled}>
                    Salvar
                </SaveButton>
            </Buttons>
        </HabitFormContainer>
    );
}