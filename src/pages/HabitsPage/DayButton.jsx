import { Day } from "./style";

export default function DayButton({char, id, isSelected, clickFn, isDisabled}){

    function selectItem(id) {
        return clickFn(id);
    }

    return (
        <>
        <Day disabled={isDisabled} selected={isSelected} onClick={() => selectItem(id)}>
            {char}
        </Day>
        </>
    );
}