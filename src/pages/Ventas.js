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

const Ventas = () => {
  return (
    <>
      <StyledContainer>
        <Form
          heading={"Ventas"}
          product={true}
          channel={true}
          quantity={true}
          price={true}
          date={true}
        />
      </StyledContainer>
    </>
  );
};

export default Ventas;
