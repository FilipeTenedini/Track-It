import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../api/url";
import { AuthContext } from "../../context/AuthContext";
import { Container, Status, Content, AddBox, NoneHabitsMsg } from "./style";
import AddHabitCard from "./AddHabitCard";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import HabitCard from "./HabitCard";
import Loader from "../../components/Loaders/Loader";

export default function HabitsPage() {
  const [createdHabits, setCreatedHabits] = useState(null);
  const [creating, setCreating] = useState(false);
  const [savedData, setSavedData] = useState({days:'', title:''});
  const [loading, setLoading] = useState(true);
  
  const {auth} = useContext(AuthContext);
  
  const config = {headers: {'Authorization': `Bearer ${auth.token}`}}

  useEffect(() => getHabits(), []);

  
  function getHabits() {
    axios
      .get(`${BASE_URL}/habits`, config)
      .then(res => {
        res.data.length > 0
          ? setCreatedHabits(res.data)
          : setCreatedHabits(null);
      })
      .catch(err => alert(err.response.data.message))
      .finally(() => setLoading(false));
  }

  function handleToggleCreating() {
    return setCreating(true);
  }
  
  function handleDeleteHabit(id) {
    const question = window.confirm('Tem certeza que deseja deletar este hábito?');
    if (question) {
      axios
        .delete(`${BASE_URL}/habits/${id}`, config)
        .then(() => {
          axios
            .get(`${BASE_URL}/habits`, config)
            .then(res => {
              res.data.length > 0
                ? setCreatedHabits(res.data)
                : setCreatedHabits(null);
            })
            .catch(err => alert(err.response.data.message));
        })
        .catch(err => alert(err.response.data.message));
    }
  }


  return (
    <>
      <Header />
      <Container>
      <Status>
            <h2>Meus hábitos</h2>
            <AddBox 
            onClick={handleToggleCreating}
            disabled={creating}
            />
      </Status>
      {loading 
        ? <Loader />
        :<Content>
        
        { creating &&
            <AddHabitCard 
            savedData={savedData}
            setSavedData={setSavedData}
            setCreating={setCreating}
            getHabits={getHabits}
            />
        }

        {createdHabits 
          ? createdHabits.map((item) => (
            <HabitCard 
              key={item.id}
              item={item}
              clickFn={() => handleDeleteHabit(item.id)}
            />
          ))
          : <NoneHabitsMsg> 
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoneHabitsMsg>
        }
        </Content>}
      </Container>
      <NavBar />
    </>

    );
}