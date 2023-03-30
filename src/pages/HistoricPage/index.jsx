import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { AuthContext } from "../../context/AuthContext";
import { Container, Status, MyCalendar } from "./style";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Loader from "../../components/Loaders/Loader";


export default function HistoricPage() {
  const [value, setValue] = useState(new Date());
  const [notCompletedHabits, setNotCompletedHabits] = useState([]);
  const [completedDailyHabits, setCompletedDailyHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const { auth } = useContext(AuthContext)

  useEffect(()=> {
    setLoading(true);
    const config = {headers: {'Authorization': `Bearer ${auth.token}`}}

    axios
      .get(`${BASE_URL}/habits/history/daily`, config)
      .then(({ data }) => {
        setCompletedDailyHabits( data.filter( item => item.habits.every(habit => habit.done === true) ));
        setNotCompletedHabits( data.filter( item => item.habits.some(habit => habit.done === false) ));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  function formatDate(locale, date){
    const fullDate = ( locale.getMonth()+1 < 10) 
    ? `${locale.getDate()}/0${locale.getMonth()+1}/${locale.getFullYear()}`
    : `${locale.getDate()}/${locale.getMonth()+1}/${locale.getFullYear()}`;

    if (completedDailyHabits.some(item => item.day === fullDate)){
      return <div style={{backgroundColor:"#8cc654", color:"#FFF"}}>
              {locale.getDate()}
             </div>
    } else if (notCompletedHabits.some(item => item.day === fullDate)){
      return <div style={{backgroundColor:"#ea5766", color:"#FFF"}}>
                {locale.getDate()}
             </div>
    } else {
      return <div>
              {locale.getDate()}
             </div>
    }
  }

  return (
    <>
      <Header />
      <Container>
     {loading
     ? <Loader />
     : <>
          <Status>
            <h2>Histórico</h2>
          </Status>
          <MyCalendar 
            onChange={setValue}
            value={value}
            calendarType="US"
            formatDay={(locale, date) => formatDate(date, 'd')}
          />
        
      </>
    }
      </Container>
      <NavBar />
    </>
  );
}

  