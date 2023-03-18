import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { Container, Status, Content, AddBox, NoneHabitsMsg } from "./style";
import AddHabitForm from "./AddHabitForm"
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";


export default function HabitsPage() {
  const [createdHabits, setCreatedHabits] = useState(null);

  return (
    <>
      <Header />
      <Container>
      <Status>
            <h2>Meus hábitos</h2>
            <AddBox />
      </Status>
        <Content>
        <AddHabitForm />
        {!createdHabits &&
          <NoneHabitsMsg>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
          </NoneHabitsMsg>
        }
        </Content>
      </Container>
      <NavBar />
    </>

    );
}