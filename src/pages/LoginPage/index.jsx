import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Formulary from "../../components/Formulary";
import LogoArea from "../../components/LogoArea";
import Button from "../../components/Button";
import Loader from "../../components/Loader/Loader";
import { BASE_URL } from "../../api/url";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({email: "", password: ""});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => navigate("/cadastro");

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${BASE_URL}/auth/login`, loginForm)
      .then(() => navigate("/hoje"))
      .catch(err => {
        alert(err.response.data.message);
        setLoading(false);
      })
  }

  const handleUpdateForm = (e) => setLoginForm({...loginForm, [e.target.name]: e.target.value});

  return (
    <Container>
      <LogoArea />
      <Formulary
      text="Não tem uma conta? Cadastre-se!"
      clickFn={handleClick}
      submit={handleSignIn}
      test="signup-link"
      >
        <input 
        type="email"
        placeholder="email"
        value={loginForm.email}
        name="email"
        onChange={handleUpdateForm}
        data-test="email-input"
        />
        <input 
        type="password"
        placeholder="senha"
        name="password"
        value={loginForm.password}
        onChange={handleUpdateForm}
        data-test="password-input"
        />
        <Button 
        disabled={loading}
        text={loading ? <Loader /> : "Entrar"}
        test="login-btn"
        />
      </Formulary>
    </Container>
  );
}