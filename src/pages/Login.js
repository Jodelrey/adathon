import React, { useContext, useEffect, useState } from "react";
import ApiCall from "../utils/ApiCall";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import useLocalStorage from "../hooks/useLocalStorage"
import useFetch from "../hooks/useFetch";
import { Container, Input, Label, Button, Text } from "../components/primitive";

const StyledContainer = styled(Container)`
  font-family: "Nunito", Verdana, Geneva, Tahoma, sans-serif;
  width: 100%;
  min-height: calc(100vh - 220px);
  box-sizing: border-box;
  padding: 40px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  width: 30%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
`;

const StyledInput = styled(Input)`
  margin: 10px 0;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  border: 1px solid #aaaaaa;
  outline: none;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  color: #000;
  font-weight: 500;
`;

const StyledLabel = styled(Label)`
  font-size: 17px;
  width: 100%;
  color: #555555;
  display: flex;
  font-weight: 600;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledHeading = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: #8c1886;
  margin-top: 30px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
const StyledErrorContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 30px;
`;

const StyledError = styled.p`
  color: #e60000;
  font-size: 15px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  color: #313131;
  margin-right: 0;
  margin-bottom: 10px;
  width: 300px;
  border-radius: 8px;
  height: 40px;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 15px;
  background-color: #ff9600;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease-in;
    background-color: #ffa11a;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const StyledText = styled(Text)`
  color: #555555;
  font-size: 15px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const StyledLink = styled(Link)`
  color: rgb(0, 192, 210);
  text-decoration: none;
  transition: 0.3s;
  font-weight: 600;
  &:hover {
    transition: 0.3s;
    color: #0e918c;
  }
`;

const Login = () => {
  const [error, setError] = useState(false);
  const {saveToLocalStorage} = useLocalStorage()
  const {
    setIsLogged,
    setLoginPassword,
    setLoginUser,
    loginUser,
    loginPassword,
    isLogged,
  } = useContext(UserContext);
  const history = useHistory();

  const signIn = (event) => {
    event.preventDefault();
    setLoginUser(event.target.email.value);
    setLoginPassword(event.target.password.value);
  };

  useEffect(() => {

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    fetch(`${ApiCall}/usuario/ingresar`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        email: loginUser,
        password: loginPassword,
      }),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(response.error);
        } else {
          setIsLogged(true);
          history.push("/");
          saveToLocalStorage({ 
            email: loginUser,
            password: loginPassword
          })
        }
      })
      .catch((error) => setError(error));
  }, [loginUser, loginPassword, isLogged]);

  return (
    !isLogged && (
      <>
        <StyledContainer>
          <StyledHeading>Bienvenida</StyledHeading>
          <StyledErrorContainer>
            {console.log(error)}
            {error && (
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
    )
  );
};

export default Login;
