import { initialLetterDays } from "../../constants/initialLetterDays";
import { HabitArea, TextArea, DaysContainer, TrashIcon, Day} from "./style";

export default function HabitCard({item: {days, name}, clickFn}){
    return (
        <HabitArea data-test="habit-container">
            <TextArea>
                <p data-test="habit-name">
                    {name}
                </p>
                <DaysContainer>
                {initialLetterDays.map((char, ind) => (
                    <Day key={ind} selected={days.includes(ind)} data-test="habit-day">
                        {char}
                    </Day>
                ))}
                </DaysContainer>
            </TextArea>
            <TrashIcon onClick={clickFn} data-test="habit-delete-btn"/>
        </HabitArea>
    );
}