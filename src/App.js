import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage";
import HistoricPage from "./pages/HistoricPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodayPage from "./pages/TodayPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" to={ <LoginPage />} />
        <Route path="/cadastro" to={<RegisterPage />} />
        <Route path="/habitos" to={<HabitsPage />} />
        <Route path="/hoje" to={<TodayPage />} />
        <Route path="/historico" to={<HistoricPage />} />
      </Routes>
    </BrowserRouter>
  );
}
