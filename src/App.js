
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { HeaderApp } from "./components/HeaderApp";
import { ListProducts } from "./components/Products/ListProducts";

function App() {
  return (
    <Container fluid>
      <div className="App row">
      <HeaderApp/>
      <ListProducts />
      </div>
    </Container>
  );
}

export default App;
