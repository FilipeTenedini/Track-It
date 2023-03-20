import Logo from "../../images/nameLogo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container, LogoArea, FotoArea } from "./style";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Header() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(()=>{
    !auth && navigate("/");
  },[])

  return (
      <>
        <Container data-test="header">
          <LogoArea src={Logo} alt="TrackIt logo picture" />
          <FotoArea>
            <img src={auth.image} alt="Picture of the user" />
          </FotoArea>
        </Container>
      </>
    );
  }
  