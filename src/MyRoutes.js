import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage";
import HistoricPage from "./pages/HistoricPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodayPage from "./pages/TodayPage";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/historico" element={<HistoricPage />} />
            </Routes>
        </BrowserRouter>
    );
}
