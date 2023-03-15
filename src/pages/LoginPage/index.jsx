import { Link } from "react-router-dom";
import { Container, LogoArea, FormArea, Register } from "./style";
import LogoImg from "../../images/logo.png";
import Button from "../../components/Button";

export default function LoginPage() {
    return (
      <Container>
        <LogoArea>
          <img src={LogoImg} alt="" />
        </LogoArea>
        <FormArea>
          <input type="email" name="" placeholder="email"/>
          <input type="password" name="" placeholder="senha"/>
          <Button text="Entrar" />
        </FormArea>
        <Register>
          <Link>Não tem uma conta? Cadastre-se!</Link>
        </Register>
      </Container>
    );
}