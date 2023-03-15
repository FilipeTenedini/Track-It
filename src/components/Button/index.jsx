import { MyButton } from "./style";

export default function Button({text}) {
    return (
      <MyButton type="submit">
        {text}
      </MyButton>
    );
  }
  