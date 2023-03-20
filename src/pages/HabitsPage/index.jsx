import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../api/url";
import { AuthContext } from "../../context/AuthContext";
import { Container, Status, Content, AddBox, NoneHabitsMsg } from "./style";
import AddHabitCard from "./AddHabitCard";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

export default function HabitsPage() {
  const [createdHabits, setCreatedHabits] = useState(null);
  const [creating, setCreating] = useState(true);
  const {auth} = useContext(AuthContext);

  useEffect(() => {
    const config = {headers: {'Authorization': `Bearer ${auth.token}`}}
    axios
      .get(`${BASE_URL}/habits`, config)
      .then(res => {
        res.data.length > 0
          ? setCreatedHabits(res.data)
          : setCreatedHabits(null)
      })
      .catch(err => alert(err.response.data.message));
  }, []);

  const handleToggleCreating = () => {
    setCreating((prevState) => {
      prevState === true
        ? setCreating(false)
        : setCreating(true)
    })
  }
  
  return (
    <>
      <Header />
      <Container>
      <Status>
            <h2>Meus hábitos</h2>
            <AddBox onClick={handleToggleCreating}/>
      </Status>
        <Content>
        { creating &&
            <AddHabitCard />
        }
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