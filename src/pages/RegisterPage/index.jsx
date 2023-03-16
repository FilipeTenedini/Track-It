import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Formulary from "../../components/Formulary";
import LogoArea from "../../components/LogoArea";
import Button from "../../components/Button";
import { BASE_URL } from "../../api/url";
import axios from "axios";

export default function RegisterPage() { 
  const [registerForm, setRegisterForm] = useState({email: '', name: '', image: '', password: ''});
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/auth/sign-up`, registerForm)
      .then(() => navigate("/"))
      .catch(err => err.response.data.message);
  }

  const handleUpdateForm = (e) => setRegisterForm({...registerForm, [e.target.name]: e.target.value});
  
  return (
    <Container>
      <LogoArea />
      <Formulary text="Já tem uma conta? Faça login!" clickFn={handleClick} submit={handleSubmit}>
        <input 
        type="email"
        placeholder="email"
        name={"email"}
        value={registerForm.email}
        onChange={handleUpdateForm}
        />
        
        <input 
        type="password"
        placeholder="senha"
        name={"password"}
        value={registerForm.password}
        onChange={handleUpdateForm}
        />
        <input 
        type="text"
        placeholder="nome"
        name={"name"}
        value={registerForm.name}
        onChange={handleUpdateForm}
        />
        <input 
        type="url"
        placeholder="foto"
        name={"image"}
        value={registerForm.image}
        onChange={handleUpdateForm}
        />
        <Button text="Cadastrar" />
      </Formulary>
    </Container>
  );
}