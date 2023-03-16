import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Formulary from "../../components/Formulary";
import LogoArea from "../../components/LogoArea";
import Button from "../../components/Button";
import { BASE_URL } from "../../api/url";
import axios from "axios";
import { useState } from "react";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({email: "", password: ""});
  const navigate = useNavigate();

  const handleClick = () => navigate("/cadastro");

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/auth/login`, loginForm)
      .then(() => navigate("/hoje"))
      .catch(err => alert(err.response.data.message))
  }

  const handleUpdateForm = (e) => setLoginForm({...loginForm, [e.target.name]: e.target.value});

  return (
    <Container>
      <LogoArea />
      <Formulary
      text="Não tem uma conta? Cadastre-se!"
      clickFn={handleClick}
      submit={handleSignIn}
      >
        <input 
        type="email"
        placeholder="email"
        value={loginForm.email}
        name="email"
        onChange={handleUpdateForm}
        />
        <input 
        type="password"
        placeholder="senha"
        name="password"
        value={loginForm.password}
        onChange={handleUpdateForm}
        />
        <Button text="Entrar" />
      </Formulary>
    </Container>
  );
}