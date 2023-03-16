import { MyButton } from "./style";

export default function Button({text, disabled}) {
    return (
      <MyButton type="submit" disabled={disabled}>
        {text}
      </MyButton>
    );
  }
  