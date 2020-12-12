import {Container} from "./components/primitive"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Graphic from "./components/Graphic"
import NavMenu from "./components/NavMenu"
import Footer from "./components/Footer"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Nunito', Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: column; 
  background-color: #FFFFFF;
  color: #f7f6e7;
  height: 100%;
  min-height: 100vh;
  box-sizing: content-box;
  position: relative;
  /* @media(max-width: 450px) {
    height: 100%;
  } */
}`;


function App() {
  return <Container className="App">
   <Router>
        <GlobalStyle />
        <NavMenu />

        <Switch>
          <Route exact path="/">
      
          </Route>
          <Route exact path="/Nosotros">
      
          </Route>
          <Route exact path="/Productos">
           
          </Route>
          <Route exact path="/Reparto">
         
          </Route>
          <Route exact path="/Contacto">
         
          </Route>
          <Route>
           
          </Route>
        </Switch>

  
      </Router>

      <Footer />
  </Container>;
}

export default App;
