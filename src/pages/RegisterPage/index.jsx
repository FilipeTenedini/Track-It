import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Formulary from "../../components/Formulary";
import LogoArea from "../../components/LogoArea";
import Button from "../../components/Button";
import Loader from "../../components/Loader/Loader";
import { BASE_URL } from "../../api/url";

export default function RegisterPage() { 
  const [registerForm, setRegisterForm] = useState({email: '', name: '', image: '', password: ''});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${BASE_URL}/auth/sign-up`, registerForm)
      .then(() => navigate("/"))
      .catch(err => {
        alert(err.response.data.message);
        setLoading(false);
      })
  }

  const handleUpdateForm = (e) => setRegisterForm({...registerForm, [e.target.name]: e.target.value});
  
  return (
    <Container>
      <LogoArea />
      <Formulary 
      text="Já tem uma conta? Faça login!" c
      lickFn={handleClick} 
      submit={handleSubmit} 
      test="login-link"
      >
        <input 
        type="email"
        placeholder="email"
        name={"email"}
        value={registerForm.email}
        onChange={handleUpdateForm}
        data-test="email-input"
        />
        
        <input 
        type="password"
        placeholder="senha"
        name={"password"}
        value={registerForm.password}
        onChange={handleUpdateForm}
        data-test="password-input"
        />
        <input 
        type="text"
        placeholder="nome"
        name={"name"}
        value={registerForm.name}
        onChange={handleUpdateForm}
        data-test="user-name-input"
        />
        <input 
        type="url"
        placeholder="foto"
        name={"image"}
        value={registerForm.image}
        onChange={handleUpdateForm}
        data-test="user-image-input"
        />
        <Button
        disabled={loading}
        text={loading ? <Loader /> : "Cadastrar"}
        test="signup-btn"
        />
      </Formulary>
    </Container>
  );
}