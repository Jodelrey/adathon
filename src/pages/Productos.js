import React from "react";
import { Container } from '../components/primitive';
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

const Productos = () => {
  return (
    <>
      <StyledContainer>
        <Form
          heading={Productos}
          product={true}
          description={true}
          cost={true}
          delivery={true}
        />
      </StyledContainer>
    </>
  );
};

export default Productos;
