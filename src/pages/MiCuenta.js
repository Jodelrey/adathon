import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import { Container, Input, Button } from "../components/primitive";
import useLocalStorage from "../hooks/useLocalStorage";

//import UserContext from "../contexts/UserContext";

const StyledContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 220px);
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
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

const StyledOptions = styled(Container)`
  width: 30%;
`;

const StyledInput = styled(Input)`
  margin: 10px 0;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #aaaaaa;
  outline: none;
  width: 100%;
  padding: 10px 10px 10px 15px;

  font-size: 15px;
  font-weight: 500;
`;

const StyledButton = styled(Button)`
  cursor: pointer;
  margin: 10px 0;
  line-height: 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  outline: none;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  background-color: #ff9600;
  color: #313131;
  transition: 0.3s;

  &:hover {
    transition: 0.3s ease-in;
    background-color: #ffa11a;
  }
`;

const MiCuenta = () => {
  const { loginUser, setIsLogged } = useContext(UserContext);
  const { removeFromLocalStorage } = useLocalStorage();

  const handleCloseSession = () => {
    console.log("entro a closeSession");
    setIsLogged(removeFromLocalStorage());
  };
  return (
    <StyledContainer>
      <StyledHeading>Mi Cuenta</StyledHeading>
      <StyledOptions>
        <StyledInput disabled value={loginUser} />
        <StyledButton>Cambiar mail</StyledButton>
        <StyledButton>Cambiar contraseña</StyledButton>
        <StyledButton onClick={handleCloseSession}>Cerrar sesión</StyledButton>
      </StyledOptions>
      <StyledOptions>
        <StyledButton>Eliminar Cuenta</StyledButton>
      </StyledOptions>
    </StyledContainer>
  );
};

export default MiCuenta;
