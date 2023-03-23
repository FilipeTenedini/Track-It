import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { initialLetterDays } from "../../constants/initialLetterDays";
import { BASE_URL } from "../../api/url";
import { HabitFormContainer, DaysContainer, Buttons, CancelButton, SaveButton} from "./style";
import DayButton from "./DayButton";

export default function AddHabitCard({savedData, setSavedData, setCreating, getHabits}){
    const [selectedDays, setSelectedDays] = useState(savedData.days);
    const [habitTitle, setHabitTitle] = useState(savedData.title);
    const [isDisabled, setIsDisabled] = useState(false);
    const [closingForm, setClosingForm] = useState(false)
    const {auth} = useContext(AuthContext);

    function selectDay(id) {
        selectedDays.includes(id)
            ? setSelectedDays((prevState) => prevState.filter(item => item !== id))
            : setSelectedDays((prevState) => Array.from(new Set([...prevState, id])));
    }

    function addHabit() {
        setIsDisabled(true);

        const obj = {
            name: habitTitle,
            days: selectedDays
        };
        const config = { headers: { 'Authorization': `Bearer ${auth.token}` } };
        axios
            .post(`${BASE_URL}/habits`, obj, config)
            .then(() => {
                setSavedData({title: '', days: []});
                setCreating(false);
                getHabits();
            })
            .catch(err => alert(err.response.data.message))
            .finally(() => setIsDisabled(false));
    }

    function handleCloseForm() {
        setClosingForm(true);
        setSavedData({
            title: habitTitle,
            days: selectedDays
        });

        const time = setTimeout(() => {
            setCreating(false);
        }, 600);
        
        return () => clearTimeout(time);
    }

    return(
        <HabitFormContainer closingForm={closingForm}>
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
                        isDisabled={isDisabled}
                    />
                ))}
            </DaysContainer>
            <Buttons>
                <CancelButton onClick={handleCloseForm} disabled={isDisabled}>
                    Cancelar
                </CancelButton>
                <SaveButton onClick={addHabit} disabled={isDisabled}>
                    Salvar
                </SaveButton>
            </Buttons>
        </HabitFormContainer>
    );
}