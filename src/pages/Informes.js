import React from "react";
import styled from "styled-components";
import { Container, Image } from "../components/primitive";
import workInProgress from "../img/unnamed.png";

const StyledMainContainer = styled(Container)`
  padding: 35px;
  height: calc(100vh - 220px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.p`
  font-size: 35px;
  font-weight: 700px;
  color: #000;
`;

const StyledImage = styled(Image)`
  height: 300px;
`;

const Informes = () => {
  return (
    <StyledMainContainer>
      <StyledText>Esta funcionalidad está en construcción</StyledText>
      <StyledImage src={workInProgress} />
    </StyledMainContainer>
  );
};

export default Informes;
