import { Container } from "./components/primitive";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import {
  Costos,
  Error,
  Informes,
  Login,
  Register,
  MiCuenta,
  Productos,
  Ventas,
} from "./pages";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column; 
  background-color: #FFFFFF;
  color: #f7f6e7;
  height: 100%;
  min-height: 100vh;
  box-sizing: content-box;
  position: relative;

}`;

function App() {
  return (
    <Container className="App">
      <Router>
        <GlobalStyle />
        <NavMenu />
        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route exact path="/Costos">
            <Costos />
          </Route>
          <Route exact path="/Informes">
            <Informes />
          </Route>
          <Route exact path="/MiCuenta">
            <MiCuenta />
          </Route>
          <Route exact path="/Productos">
            <Productos />
          </Route>
          <Route exact path="/Ventas">
            <Ventas />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </Container>
  );
}

export default App;
