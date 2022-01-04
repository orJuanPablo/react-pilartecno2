import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { HeaderApp } from "./components/HeaderApp";
import { Switch, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { ProductView } from "./views/ProductView";

function App() {
  return (
    <Container fluid>
      <div className="App row">
        <HeaderApp />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/product/:id'} exact component={ProductView} />
          <Route render={()=><Container><h1>Error 404: </h1><p>Página no encontrada</p></Container>}/>
        </Switch>
      </div>
    </Container>
  );
}

export default App;
