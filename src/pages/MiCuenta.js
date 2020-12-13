import React from 'react'
import styled from "styled-components";
import { Container, Input, Label, Button, Text } from "../components/primitive";

//import UserContext from "../contexts/UserContext";

const StyledContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 220px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledInput = styled(Input)`
  margin: 10px 0;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  background-color: #aaaaaa;
  outline: none;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  color: white;
  font-weight: 500;
`;

const StyledOptions = styled(Container)`
    width: 50%; 
`

const MiCuenta = () => {
    return (
        <StyledContainer>


            <StyledInput disabled value={"emaildelavendendora@gmail.com"} />
            
        </StyledContainer>
    )
}

export default MiCuenta
