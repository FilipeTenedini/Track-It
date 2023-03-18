import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../api/url";
import { Container, Content, Status } from "./style";
import Card from "./Card";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import axios from "axios";

export default function TodayPage() {
  const [ habits, setHabits ] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const config = {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    }
    auth &&
    axios
      .get(`${BASE_URL}/habits`, config)
      .then(res => setHabits(res.data))
      .catch(err => console.log(err))
  })

  return (
    <>
      <Header />
      <Container>
        <Status>
            <h2>Segunda, 17/05</h2>
            <p>Nenhum hábito concluído ainda</p>
        </Status>
        <Content>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Content>
      </Container>
      <NavBar />
    </>

    );
}