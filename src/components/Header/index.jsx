import Logo from "../../images/nameLogo.png";
import { Container, LogoArea, FotoArea } from "./style";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Header() {
  const { auth } = useContext(AuthContext);

  return (
      <>
        <Container>
          <LogoArea src={Logo} alt="TrackIt logo picture" />
          <FotoArea>
            <img src={auth.image} alt="Picture of the user" />
          </FotoArea>
        </Container>
      </>
    );
  }
  