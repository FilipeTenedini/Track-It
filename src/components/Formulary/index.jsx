import { FormArea, Register } from "./style";

export default function Formulary({text, clickFn, submit, test, children}) {
    return (
      <>
        <FormArea onSubmit={submit}>
          {children}
        </FormArea>
        <Register 
          onClick={clickFn}
          data-test={test}
          >{text}</Register>
      </>
    );
  }
  