import { Container } from "./style";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <Container data-test="menu">
        <button data-test="habit-link">
          <Link to={"/habitos"}>
          Hábitos
          </Link>
        </button>
          <ProgressBar />
        <button data-test="history-link">
          <Link to={"/historico"}>
          Histórico
          </Link>
        </button>
      </Container>
    );
  }
  