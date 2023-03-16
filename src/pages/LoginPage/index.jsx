import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Formulary from "../../components/Formulary";
import LogoArea from "../../components/LogoArea";
import Button from "../../components/Button";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/cadastro");

  return (
    <Container>
      <LogoArea />
      <Formulary text="Não tem uma conta? Cadastre-se!" clickFn={handleClick}>
        <input type="email" name="" placeholder="email"/>
        <input type="password" name="" placeholder="senha"/>
        <Button text="Entrar" />
      </Formulary>
    </Container>
  );
}