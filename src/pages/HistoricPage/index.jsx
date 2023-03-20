import { Container, Status, Text } from "./style";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

export default function HistoricPage() {
  return (
    <>
      <Header />
      <Container>
        <Status>
          <h2>Histórico</h2>
        <Text>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </Text>
        </Status>

      </Container>
      <NavBar />
    </>
  );
}

  