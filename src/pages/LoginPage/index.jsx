import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, PersisLoginArea } from "./style";
import Formulary from "../../components/Formulary";
import LogoArea from "../../components/LogoArea";
import Button from "../../components/Button";
import Loader from "../../components/Loaders/Loader";
import { BASE_URL } from "../../api/url";
import { AuthContext } from "../../context/AuthContext";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({email: "", password: ""});
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  useEffect( () => {
    if (localStorage.length > 0) { 
      const login = JSON.parse(localStorage.getItem("login"));
      setAuth({
        name: login.name,
        email: login.email,
        image: login.image,
        token: login.token
      });
      navigate("/hoje");
    }
  })

  function handleClick() {
    return navigate("/cadastro");
  }

  function persistLogin(res){
    const data = {
      name: res.data.name,
      email: res.data.email,
      image: res.data.image,
      token: res.data.token
    }
    const dataSerialized = JSON.stringify(data);
    localStorage.setItem("login", dataSerialized)
  }

  function handleSignIn(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${BASE_URL}/auth/login`, loginForm)
      .then(res => {
        checked && persistLogin(res);

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
      })
      .finally(() => setLoading(false));
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
        <PersisLoginArea>
          Manter conectado 
          <input 
          type="checkbox" 
          onChange={() => setChecked(!checked)}
          />
        </PersisLoginArea>
        <Button 
            disabled={loading}
            text={loading ? <Loader /> : "Entrar"}
          />
      </Formulary>
    </Container>
  );
}