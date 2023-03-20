import { Day } from "./style";

export default function DayButton({char, id, isSelected, clickFn}){

    const selectItem = (id) => clickFn(id);

    return (
        <>
        <Day selected={isSelected} onClick={() => selectItem(id)}>
            {char}
        </Day>
        </>
    );
}