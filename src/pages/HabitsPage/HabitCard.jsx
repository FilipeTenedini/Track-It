import { initialLetterDays } from "../../constants/initialLetterDays";
import { HabitArea, TextArea, DaysContainer, TrashIcon, Day} from "./style";

export default function HabitCard({item: {days, name}, clickFn}){
    return (
        <HabitArea>
            <TextArea>
                <p>
                    {name}
                </p>
                <DaysContainer>
                {initialLetterDays.map((char, ind) => (
                    <Day key={ind} selected={days.includes(ind)}>
                        {char}
                    </Day>
                ))}
                </DaysContainer>
            </TextArea>
            <TrashIcon onClick={clickFn}/>
        </HabitArea>
    );
}