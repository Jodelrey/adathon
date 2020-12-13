import React from "react";
import { Container } from "../components/primitive";
import Form from "../components/Form";
import Catalog from "../components/Catalog";
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
          heading={"Productos"}
          product={true}
          description={true}
          cost={true}
          gain={true}
          delivery={true}
          entity={"producto/crear"}
        />
      < Catalog />
      </StyledContainer>
      
    </>
  );
};

export default Productos;
