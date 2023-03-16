import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Formulary from "../../components/Formulary";
import LogoArea from "../../components/LogoArea";
import Button from "../../components/Button";

export default function RegisterPage() { 
  const [form, setForm] = useState({email: '', name: '', image: '', password: ''});
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  const handleUpdateForm = (e) => {
    console.log({...form, [e.target.name]: e.target.value});
  }
  
  return (
    <Container>
      <LogoArea />
      <Formulary text="Já tem uma conta? Faça login!" clickFn={handleClick}>
        <input 
        type="email"
        placeholder="email"
        name={"email"}
        onChange={handleUpdateForm}
        />
        
        <input 
        type="password"
        placeholder="senha"
        name={"password"}
        onChange={handleUpdateForm}
        />
        <input 
        type="text"
        placeholder="nome"
        name={"name"}
        onChange={handleUpdateForm}
        />
        <input 
        type="url"
        placeholder="foto"
        name={"image"}
        onChange={handleUpdateForm}
        />
        <Button text="Cadastrar" />
      </Formulary>
    </Container>
  );
  }
  