import Logo from "../../images/nameLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container, LogoArea, FotoArea } from "./style";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Header() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect( () => {
    if (localStorage.length > 0) { 
      const login = JSON.parse(localStorage.getItem("login"));
      setAuth({
        name: login.name,
        email: login.email,
        image: login.image,
        token: login.token
      });
    }
  }, [setAuth])

  useEffect(()=>{
    !auth && navigate("/");
  },[])

  return (
      <>
        <Container>
          <Link to={"/hoje"}>
            <LogoArea src={Logo} alt="TrackIt logo picture" />
          </Link>
          <FotoArea>
            <img src={auth.image} alt="user" />
          </FotoArea>
        </Container>
      </>
    );
  }
  