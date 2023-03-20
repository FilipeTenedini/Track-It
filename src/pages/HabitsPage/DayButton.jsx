import { Day } from "./style";

export default function DayButton({char, id, isSelected, clickFn, isDisabled}){

    const selectItem = (id) => clickFn(id);

    return (
        <>
        <Day disabled={isDisabled} selected={isSelected} onClick={() => selectItem(id)} data-test="habit-day">
            {char}
        </Day>
        </>
    );
}