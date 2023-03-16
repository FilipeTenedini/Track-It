import { FormArea, Register } from "./style";

export default function Formulary({text, clickFn, children}) {
    return (
      <>
        <FormArea>
          {children}
        </FormArea>
        <Register onClick={clickFn}>{text}</Register>
      </>
    );
  }
  