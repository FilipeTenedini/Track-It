import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Formulary from "../../components/Formulary";
import LogoArea from "../../components/LogoArea";
import Button from "../../components/Button";
import Loader from "../../components/Loaders/Loader";
import { BASE_URL } from "../../api/url";
import { AuthContext } from "../../context/AuthContext";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({email: "", password: ""});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  function handleClick() {
    return navigate("/cadastro");
  }

  function handleSignIn(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${BASE_URL}/auth/login`, loginForm)
      .then(res => {
        setAuth({
          name: res.data.name,
          email: res.data.email,
          image: res.data.image,
          token: res.data.token
        });
        navigate("/hoje");
      })
      .catch(err => {
        alert(err.response.data.message);
        setLoading(false);
      });
  }

  function handleUpdateForm(e) {
    return setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }

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
        disabled={loading}
        />
        <input 
        type="password"
        placeholder="senha"
        name="password"
        value={loginForm.password}
        onChange={handleUpdateForm}
        disabled={loading}
        />
        <Button 
        disabled={loading}
        text={loading ? <Loader /> : "Entrar"}
        />
      </Formulary>
    </Container>
  );
}