import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Formulary from "../../components/Formulary";
import LogoArea from "../../components/LogoArea";
import Button from "../../components/Button";
import Loader from "../../components/Loaders/Loader";
import { BASE_URL } from "../../api/url";

export default function RegisterPage() { 
  const [registerForm, setRegisterForm] = useState({email: '', name: '', image: '', password: ''});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    return navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${BASE_URL}/auth/sign-up`, registerForm)
      .then(() => navigate("/"))
      .catch(err => {
        alert(err.response.data.message);
        setLoading(false);
      });
  }

  function handleUpdateForm(e) {
    return setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <LogoArea />
      <Formulary 
      text="Já tem uma conta? Faça login!" c
      clickFn={handleClick} 
      submit={handleSubmit} 
      >
        <input 
        type="email"
        placeholder="email"
        name={"email"}
        value={registerForm.email}
        onChange={handleUpdateForm}
        disabled={loading}
        />
        
        <input 
        type="password"
        placeholder="senha"
        name={"password"}
        value={registerForm.password}
        onChange={handleUpdateForm}
        disabled={loading}
        />
        <input 
        type="text"
        placeholder="nome"
        name={"name"}
        value={registerForm.name}
        onChange={handleUpdateForm}
        disabled={loading}
        />
        <input 
        type="url"
        placeholder="foto"
        name={"image"}
        value={registerForm.image}
        onChange={handleUpdateForm}
        disabled={loading}
        />
        <Button
        disabled={loading}
        text={loading ? <Loader /> : "Cadastrar"}
        />
      </Formulary>
    </Container>
  );
}