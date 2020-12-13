import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import UserContext from "./context/UserContext";
import { Container } from "./components/primitive";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import {
  Costos,
  Error,
  Home,
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
  const { isLogged } = useContext(UserContext);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <NavMenu />
          <Switch>
            <Route exact path="/">
              {isLogged ? <Home /> : <Redirect to="/Login" />}
            </Route>
            <Route exact path="/Costos">
              {isLogged ? <Costos /> : <Redirect to="/Login" />}
            </Route>
            <Route exact path="/Informes">
              {isLogged ? <Informes /> : <Redirect to="/Login" />}
            </Route>
            <Route exact path="/MiCuenta">
              {isLogged ? <MiCuenta /> : <Redirect to="/Login" />}
            </Route>
            <Route exact path="/Productos">
              {isLogged ? <Productos /> : <Redirect to="/Login" />}
            </Route>
            <Route exact path="/Ventas">
              {isLogged ? <Ventas /> : <Redirect to="/Login" />}
            </Route>
            <Route exact path="/Login">
              {!isLogged ? <Login /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/Registrarse">
              {!isLogged ? <Register /> : <Redirect to="/" />}
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </Router>

        <Footer />
      </Container>
    </>
  );
}

export default App;
