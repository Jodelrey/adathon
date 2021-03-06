import React from "react";
import styled from "styled-components";
import { Container } from "../components/primitive";
import GraphicLine from "../components/GraphicLine";
import Snippet from "../components/Snippet";

const StyledHome = styled(Container)`
  padding: 35px;
  min-height: calc(100vh - 220px);
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const StyledSnippetContainer = styled(Container)`
  width: 50%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    width: 91%;
    justify-content: center;
  }
`;

const StyledGraphicLineContainer = styled(Container)`
  width: 50%;
  padding: 35px;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
    height: 50%;
    padding: 15px;
    justify-content: center;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <StyledGraphicLineContainer>
        <GraphicLine />
      </StyledGraphicLineContainer>
      <StyledSnippetContainer>
        <Snippet />
        <Snippet />
        <Snippet />
        <Snippet />
      </StyledSnippetContainer>
    </StyledHome>
  );
};

export default Home;
