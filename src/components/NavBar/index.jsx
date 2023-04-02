import { Container } from "./style";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

export default function NavBar() {



    return (
      <Container>
        <button>
          <Link to={"/habitos"}>
          Hábitos
          </Link>
        </button>
          <ProgressBar />
        <button>
          <Link to={"/historico"}>
          Histórico
          </Link>
        </button>
      </Container>
    );
  }
  