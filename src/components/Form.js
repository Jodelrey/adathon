import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Input, Label, Button } from "./primitive";
import ApiCall from "../utils/ApiCall";
import UserContext from "../context/UserContext";

const StyledForm = styled.form`
  width: 30%;
  height: 100%;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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
  border: 1px solid #aaaaaa;
  outline: none;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  color: #555555;
  font-weight: 600;
`;
const StyledInputOption = styled.select`
  margin: 10px 0;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #aaaaaa;
  outline: none;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  color: #555555;
  font-weight: 600;
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

const StyledButton = styled(Button)`
  margin-right: 0;
  width: 300px;
  border-radius: 8px;
  height: 40px;
  outline: none;
  border: none;
  background-color: #ff9600;
  color: white;
  font-weight: 600;
  font-size: 15px;
  transition: 0.3s easy-in;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #fd8c04;
    transition: 0.3s easy-in;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const StyledText = styled.p`
  color: #555555;
  font-size: 15px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Form = ({
  heading,
  product,
  description,
  gain,
  cost,
  delivery,
  rent,
  electricity,
  cel,
  taxes,
  publicity,
  channel,
  quantity,
  price,
  date,
  entity,
}) => {
  const { loginUser } = useContext(UserContext);
  const [producto, setProducto] = useState();
  const [descripcion, setDescripcion] = useState();
  const [costo, setCosto] = useState();
  const [rentabilidad, setRentabilidad] = useState();
  const [envio, setEnvio] = useState();
  const [isCreated, setIsCreated] = useState(false);
  const [error, setError] = useState(false);

  const ENDPOINT = {
    "/producto/crear": {
      producto_nombre: producto,
      producto_descripcion: descripcion,
      costo_materia_prima: costo,
      rentabilidad: rentabilidad,
      envio: envio,
    },
  };

  const add = (event) => {
    event.preventDefault();
    setProducto(event.target.producto_nombre.value);
    setDescripcion(event.target.producto_descripcion.value);
    setCosto(event.target.costo_materia_prima.value);
    setRentabilidad(event.target.rentabilidad.value);
    setEnvio(event.target.envio.value);
  };

  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    fetch(`${ApiCall}${entity}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        producto_nombre: producto,
        producto_descripcion: descripcion,
        costo_materia_prima: costo,
        rentabilidad: rentabilidad,
        envio: envio,
      }),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(response.error);
        } else {
          setIsCreated(true);
        }
      })
      .catch((error) => setError(error));
  }, [entity, producto, descripcion, costo, envio, rentabilidad]);

  return (
    <>
      <StyledHeading>{heading}</StyledHeading>
      {isCreated && <StyledText>Creado con exito</StyledText>}
      <StyledForm onSubmit={(event, entity) => add(event, entity)}>
        {product && (
          <StyledLabel>
            Nombre del producto
            <StyledInput type="text" name="producto_nombre" />
          </StyledLabel>
        )}
        {description && (
          <StyledLabel>
            Descripción del producto
            <StyledInput type="text" name="producto_descripcion" />
          </StyledLabel>
        )}

        {cost && (
          <StyledLabel>
            Costo materias primas
            <StyledInput
              type="number"
              step="0.01"
              min="0"
              name="costo_materia_prima"
            />
          </StyledLabel>
        )}
        {gain && (
          <StyledLabel>
            Rentabilidad (porcentaje)
            <StyledInput
              type="number"
              step="0.01"
              min="0"
              max="100"
              name="rentabilidad"
            />
          </StyledLabel>
        )}

        {delivery && (
          <StyledLabel>
            Costo de envío
            <StyledInput type="number" step="0.01" min="0" name="envio" />
          </StyledLabel>
        )}
        {rent && (
          <StyledLabel>
            Alquiler
            <StyledInput type="number" step="0.01" min="0" name="alquiler" />
          </StyledLabel>
        )}
        {electricity && (
          <StyledLabel>
            Electricidad
            <StyledInput
              type="number"
              step="0.01"
              min="0"
              name="electricidad"
            />
          </StyledLabel>
        )}
        {cel && (
          <StyledLabel>
            Celular
            <StyledInput type="number" step="0.01" min="0" name="celular" />
          </StyledLabel>
        )}
        {taxes && (
          <StyledLabel>
            Monotributo
            <StyledInput type="number" step="0.01" min="0" name="monotributo" />
          </StyledLabel>
        )}
        {publicity && (
          <StyledLabel>
            Gastos Publicidad
            <StyledInput type="number" step="0.01" min="0" name="publicidad" />
          </StyledLabel>
        )}
        {channel && (
          <StyledLabel>
            Canal de Venta
            <StyledInputOption name="canal-venta">
              <option value="whatsapp" id="whatsapp">
                Whatsapp
              </option>
              <option value="instagram" id="instagram">
                Instagram
              </option>
              <option value="mercadolibre" id="mercadolibre">
                Mercado Libre
              </option>
              <option value="feria" id="feria">
                Feria
              </option>
            </StyledInputOption>
          </StyledLabel>
        )}
        {quantity && (
          <StyledLabel>
            Cantidad
            <StyledInput type="number" step="0.01" min="0" name="cantidad" />
          </StyledLabel>
        )}
        {price && (
          <StyledLabel>
            Precio de Venta
            <StyledInput type="number" step="0.01" min="0" name="precio" />
          </StyledLabel>
        )}
        {date && (
          <StyledLabel>
            Fecha
            <StyledInput type="date" name="fecha" />
          </StyledLabel>
        )}
        <StyledButton type="submit">Agregar</StyledButton>
      </StyledForm>
    </>
  );
};

export default Form;
