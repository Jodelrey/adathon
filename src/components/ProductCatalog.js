import React from "react";
import { Container } from "../components/primitive";
import styled from "styled-components";
import useFetchGet from "../hooks/useFetchGet";


const StyledProductsContainer = styled(Container)`
  width: 100%;
  height: 200px;
  background-color: crimson;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Catalog = () => {
    const catalogList = useFetchGet(
        "/producto",
        { Accept: "application/json", "Content-Type": "application/json" }
        
    );
    // const data = catalogList.data;
    const data = [{
        "producto_id": 2,
        "producto_nombre": "producto2",
        "producto_descripcion": "producto1",
        "costo_materia_prima": 10.0,
        "envio": 5.0,
        "rentabilidad": 10.0,
        "pdvs": 16.5,
        "costo_general_total": 0.0
    },
    {
        "producto_id": 2,
        "producto_nombre": "producto2",
        "producto_descripcion": "producto1",
        "costo_materia_prima": 10.0,
        "envio": 5.0,
        "rentabilidad": 10.0,
        "pdvs": 16.5,
        "costo_general_total": 0.0
    }]
    
    return (
      <>
        <StyledProductsContainer>
                <ul>
                    { data.map((product, index)=>{
                        return(
                        <li>
                            {
                                product.producto_nombre
                            }
                        </li>
                    )
                    })

/* data.map => li */}
                </ul>
                
               
        </StyledProductsContainer>
      </>
    );
  };
  
  export default Catalog;

  /*const Login = () => {
    const {
      setIsLogged,
      setLoginPassword,
      setLoginUser,
      loginUser,
      loginPassword,
    } = useContext(UserContext);
  
    const signIn = (event) => {
      event.preventDefault();
      setLoginUser(event.target.email.value);
      setLoginPassword(event.target.password.value);
    };
  
    const loginInfo = useFetchPost(
      "/usuario/login",
      "POST",
      {
        email: loginUser,
        password: loginPassword,
      },
      { Accept: "application/json", "Content-Type": "application/json" },
      [loginUser, loginPassword]
    );
  
    return (
      <>
        <StyledContainer>
          <StyledHeading>Bienvenida</StyledHeading>
          <StyledErrorContainer>
            {loginInfo && (
              <StyledError>
                Hay un error en la contraseña o el usuario. Reinténtelo
                nuevamente.
              </StyledError>
            )}
          </StyledErrorContainer>
          <StyledForm method="post" onSubmit={(event) => signIn(event)}>
            <StyledLabel>
              Email
              <StyledInput type="email" name="email" />
            </StyledLabel>
            <StyledLabel>
              Contraseña
              <StyledInput type="password" name="password" min="6" />
            </StyledLabel>
            <StyledText>
              Si olvido su contraseña haga click
              <StyledLink to="/signup"> aquí </StyledLink>
            </StyledText>
  
            <StyledButton type="submit">Ingresar</StyledButton>
          </StyledForm>
          <StyledText>
            Si no esta registrada hagalo
            <StyledLink to="/signup"> aquí </StyledLink>
          </StyledText>
        </StyledContainer>
      </>
    );
  };
  
  export default Login;
  */