import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ConcludedsContext } from "../../context/ConcludedsContext";
import { BASE_URL } from "../../api/url";
import { Container, Content, Status, Text } from "./style";
import Card from "./Card";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Loader from "../../components/Loaders/Loader";

export default function TodayPage() {
  const [ habits, setHabits ] = useState([]);
  const [concludedsQt, setConcludedsQt] = useState(0);
  const [loading, setLoading] = useState(true);
  const { auth } = useContext(AuthContext);
  const { setPercentConcludeds } = useContext(ConcludedsContext);

  const date = new Date();

  useEffect(() => {
    const config = {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    }
    auth &&
    axios
      .get(`${BASE_URL}/habits/today`, config)
      .then(res => {
        setHabits(res.data)
        const concludedList = res.data.filter(item => item.done === true);
        setConcludedsQt(concludedList.length);
      })
      .catch(err => alert(err.response.data.message))
      .finally(() => setLoading(false));
  }, [concludedsQt]);

  useEffect(() => {
    const notValue = 0;

    concludedsQt === notValue && habits.length === notValue
    ? setPercentConcludeds(0)
    : setPercentConcludeds((concludedsQt / habits.length) * 100)
  }, [concludedsQt, habits.length]);

  function returnDay() {
    switch (date.getDay()) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Segunda';
      case 2:
        return 'Terça';
      case 3:
        return 'Quarta';
      case 4:
        return 'Quinta';
      case 5:
        return 'Sexta';
      case 6:
        return 'Sábado';
      default:
        return "Erro ao carregar o dia.";
    }
  }
  return (
    <>
      <Header />
      
      <Container>
        <Status>
            <h2>{returnDay()}, {date.getDate() }/{date.getMonth()}</h2>
            <Text didSomething={concludedsQt > 0 ? true : false}>
              {concludedsQt ? `${(concludedsQt / habits.length * 100).toFixed(2)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
            </Text>
        </Status>
        {loading
          ? <Loader />
          : <Content>
              {habits.map((item, index) => (
                  <Card
                    key={index}
                    item={item}
                    setConcludedsQt={setConcludedsQt}
                  />
                ))
              }
          </Content>
        }
      </Container>
      <NavBar />
    </>

    );
}