import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Container, Status } from "./style";
import Header from "../../components/Header";
import Card from "./Card";

export default function TodayPage() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  
  // useEffect(()=>{
  //   !auth && navigate("/")
  // },[])

  return (
    <>
      <Header />
      <Container>
        <Status>
            <h2>Segunda, 17/05</h2>
            <p>Nenhum hábito concluído ainda</p>
        </Status>
        <Card />
      </Container>
    </>

    );
}