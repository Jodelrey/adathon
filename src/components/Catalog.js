import React from "react";
import { Container, Button } from "./primitive";
import styled from "styled-components";
//import useFetchGet from "../hooks/useFetchGet";

const StyledProductsContainer = styled(Container)`
  width: 100%;
  padding: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  color: black;
`;

const StyledProductItem = styled(Container)`
  width: 180px;
  margin: 5px;
  color: #474f59;
  padding: 22px 15px 15px;
  font-weight: 400;
  border-radius: 10px;
  box-shadow: 2px 3px 11px 0px rgba(0, 0, 0, 0.39);
`;
const StyledButton = styled(Button)`
  width: 70px;
  margin-top: 15px;
  color: white;
  background-color: #8c1886;
  padding: 3px;
  font-weight: 400;
  border-radius: 3px;
  border: 1px solid rgb(125, 48, 134);
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    text-decoration: none;
    background-color: rgb(125, 48, 134) !important;
    color: white !important;
    transition: all 0.3s;
  }
  &:active {
    text-decoration: none;
    color: #f7f6e7;
  }
`;
const Catalog = () => {
  // const catalogList = useFetchGet("/producto", {
  //   Accept: "application/json",
  //   "Content-Type": "application/json",
  // });
  //const data = catalogList.data;
  console.log(catalogList);
  const data = [
    {
      producto_id: 2,
      producto_nombre: "Producto 2",
      producto_descripcion: "producto2.",
      costo_materia_prima: 12.0,
      envio: 5.0,
      rentabilidad: 10.0,
      pdvs: 16.5,
      costo_general_total: 5.0,
    },
    {
      producto_id: 1,
      producto_nombre: "Producto 1",
      producto_descripcion: "producto1. Hecho con amor",
      costo_materia_prima: 10.0,
      envio: 5.0,
      rentabilidad: 15.0,
      pdvs: 16.5,
      costo_general_total: 5.0,
    },
    {
      producto_id: 2,
      producto_nombre: "Producto 2",
      producto_descripcion: "producto2.",
      costo_materia_prima: 12.0,
      envio: 5.0,
      rentabilidad: 10.0,
      pdvs: 16.5,
      costo_general_total: 5.0,
    },
    {
      producto_id: 1,
      producto_nombre: "Producto 1",
      producto_descripcion: "producto1. Hecho con amor",
      costo_materia_prima: 10.0,
      envio: 5.0,
      rentabilidad: 15.0,
      pdvs: 16.5,
      costo_general_total: 5.0,
    },
    {
      producto_id: 2,
      producto_nombre: "Producto 2",
      producto_descripcion: "producto2.",
      costo_materia_prima: 12.0,
      envio: 5.0,
      rentabilidad: 10.0,
      pdvs: 16.5,
      costo_general_total: 5.0,
    },
    {
      producto_id: 1,
      producto_nombre: "Producto 1",
      producto_descripcion: "producto1. Hecho con amor",
      costo_materia_prima: 10.0,
      envio: 5.0,
      rentabilidad: 15.0,
      pdvs: 16.5,
      costo_general_total: 5.0,
    },
  ];

  return (
    <>
      <StyledProductsContainer>
        {data.map((product, index) => (
          <StyledProductItem key={product.producto_index}>
            <h3>{product.producto_nombre}</h3>
            <p>Costo materiales: $ {product.costo_materia_prima}</p>
            <p>Envío: $ {product.envio}</p>
            <p>Rentabilidad: {product.rentabilidad}%</p>
            <p>Precio sugerido: $ {product.pdvs}</p>
            <StyledButton
              style={{
                color: "rgb(125,48,134)",
                background: "transparent",
                border: "1px solid rgb(125,48,134)",
              }}
            >
              Eliminar
            </StyledButton>
            <StyledButton style={{ margin: "15px 0px 5px 35px" }}>
              Editar
            </StyledButton>
          </StyledProductItem>
        ))}
      </StyledProductsContainer>
    </>
  );
};

export default Catalog;
