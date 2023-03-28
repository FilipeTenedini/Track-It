import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { AuthContext } from "../../context/AuthContext";
import { Container, Status } from "./style";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";


export default function HistoricPage() {
  const [value, setValue] = useState(new Date());
  const [notCompletedHabits, setNotCompletedHabits] = useState([]);
  const [completedDailyHabits, setCompletedDailyHabits] = useState([]);
  const { auth } = useContext(AuthContext)

  useEffect(()=> {
    const config = {headers: {'Authorization': `Bearer ${auth.token}`}}

    axios
      .get(`${BASE_URL}/habits/history/daily`, config)
      .then(({ data }) => {
        setCompletedDailyHabits( data.filter( item => item.habits.every(habit => habit.done === true) ));
        setNotCompletedHabits( data.filter( item => item.habits.some(habit => habit.done === false) ));
      })
      .catch(() => {});
  }, []);

  function formatDate(locale, date){
   const fullDate = `${locale.getDate()}-${locale.getMonth()}-${locale.getFullYear()}`
  }

  return (
    <>
      <Header />
      <Container>
        <Status>
          <h2>Histórico</h2>
        </Status>
        <Calendar 
          onChange={setValue}
          value={value}
          calendarType="US"
          // formatDay={(locale, date) => formatDate(date, 'd')}
        />
      </Container>
      <NavBar />
    </>
  );
}

  