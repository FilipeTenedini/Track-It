import { MyButton } from "./style";

export default function Button({text, disabled, test}) {
    return (
      <MyButton type="submit" disabled={disabled} data-test={test}>
        {text}
      </MyButton>
    );
  }
  