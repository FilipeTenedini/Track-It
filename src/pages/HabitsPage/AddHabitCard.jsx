import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { initialLetterDays } from "../../constants/initialLetterDays";
import { BASE_URL } from "../../api/url";
import { HabitFormContainer, DaysContainer, Buttons, CancelButton, SaveButton} from "./style";
import DayButton from "./DayButton";

export default function AddHabitCard({handleToggleCreating, savedData, setSavedData, setCreating, getHabits}){
    const [selectedDays, setSelectedDays] = useState(savedData.days || []);
    const [habitTitle, setHabitTitle] = useState(savedData.title || "");
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
            .then(() => {
                setSelectedDays([]);
                setHabitTitle('');
                setSavedData({});
                setCreating(false);
                getHabits();
            })
            .catch(err => alert(err.response.data.message))
            .finally(() => setIsDisabled(false));
    }

    const handleCloseForm = () => {
        setSavedData({
            title: habitTitle,
            days: selectedDays
        })
        handleToggleCreating();
    }

    return(
        <HabitFormContainer data-test="habit-create-container">
            <input
                type="text" 
                placeholder="nome do hábito"
                value={habitTitle}
                onChange={(e) => setHabitTitle(e.target.value)}
                disabled={isDisabled}
                data-test="habit-name-input"
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
                <CancelButton onClick={handleCloseForm} disabled={isDisabled} data-test="habit-create-cancel-btn">
                    Cancelar
                </CancelButton>
                <SaveButton onClick={addHabit} disabled={isDisabled} data-test="habit-create-save-btn">
                    Salvar
                </SaveButton>
            </Buttons>
        </HabitFormContainer>
    );
}