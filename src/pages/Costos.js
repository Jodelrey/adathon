import React from "react";
import { Container } from "../components/primitive";
import Form from "../components/Form";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  width: 100%;
  //min-height: calc(100vh - 120px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Costos = () => {
  return (
    <>
      <StyledContainer>
        <Form
          heading={"Costos Fijos"}
          rent={true}
          electricity={true}
          cel={true}
          taxes={true}
          publicity={true}
          entity={"costo/registrar"}
        />
      </StyledContainer>
    </>
  );
};

export default Costos;
