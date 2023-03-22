import { FormArea, Register } from "./style";

export default function Formulary({text, clickFn, submit, children}) {
    return (
      <>
        <FormArea onSubmit={submit}>
          {children}
        </FormArea>
        <Register onClick={clickFn}>
            {text}
        </Register>
      </>
    );
  }
  