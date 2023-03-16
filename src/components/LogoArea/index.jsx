import { LogoSpace } from "./style.js"
import LogoImg from "../../images/logo.png";

export default function LogoArea() {
    return (
      <>
        <LogoSpace>
          <img src={LogoImg} alt="" />
        </LogoSpace>
      </>
    );
  }
  