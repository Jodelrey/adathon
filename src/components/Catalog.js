import React from "react";
import { Container , } from "./primitive";
import styled from "styled-components";
import useFetchGet from "../hooks/useFetchGet";


const StyledProductsContainer = styled(Container)`
  width: 100%;
  padding 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  color: black;
`;
const StyledProductTh = styled("th")`
  width:180px;
  background-color: rgb(125,48,134);
  color: white;
  padding:2px;
  font-weight: 400;
`;
const StyledProductTd = styled("td")`
  width:180px;
  color: #474f59;
  padding:3px;
  font-weight: 400;
`;

const Catalog = () => {
    const catalogList = useFetchGet(
        "/producto",
        { Accept: "application/json", "Content-Type": "application/json" }
        
    );
  const data = catalogList.data;
  const tableHeaders = ["Producto", "Costo materiales", "Costo envío", "Rentabilidad" ,"Precio sugerido", "Eliminar"];
 console.log(catalogList);
    // const data = [{
    //     "producto_id": 2,
    //     "producto_nombre": "Producto 2",
    //     "producto_descripcion": "producto2.",
    //     "costo_materia_prima": 12.0,
    //     "envio": 5.0,
    //     "rentabilidad": 10.0,
    //     "pdvs": 16.5,
    //     "costo_general_total": 5.0
    // },
    // {
    //     "producto_id": 1,
    //     "producto_nombre": "Producto 1",
    //     "producto_descripcion": "producto1. Hecho con amor",
    //     "costo_materia_prima": 10.0,
    //     "envio": 5.0,
    //     "rentabilidad": 15.0,
    //     "pdvs": 16.5,
    //     "costo_general_total": 5.0
    // }]
    
    return (
      <>
        <StyledProductsContainer>
        {/* <table>
          { tableHeaders.map((item)=>
          <StyledProductTh>
          {item}
          </StyledProductTh>
          )}
                  { data.map((product, index )=>
                        <tr key={product.producto_index }>
                          <StyledProductTd> { product.producto_nombre} </StyledProductTd>
                          <td>{ product.costo_materia_prima }</td>
                          <td>{ product.envio }</td>
                          <td>{ product.rentabilidad }</td>
                          <td>{ product.pdvs }</td>
                          <td><button type="button">Delete</button></td>
                                                                    
                        </tr>
                  )}
        </table>    */}
               
        </StyledProductsContainer>
      </>
    );
  };
 
  
  export default Catalog;

  
  // <Table headers={["id", "title", "content", "check", "delete"]}>
  //           {
  //             todos.map(todo => {
  //               return(
  //                 <tr key={todo.id} className={todo.checked ? "tachado" : ""}>
  //                   <td>{todo.id}</td>
  //                   <td>{todo.title}</td>
  //                   <td>{todo.content}</td>
  //                   <td>
  //                     <input type="checkbox"
  //                       defaultChecked={todo.checked}
  //                       onChange={e => setChecked(todo, e.target.checked)}/>
  //                   </td>
  //                   <td>
  //                     <button type="button">Delete</button>
  //                   </td>
  //                 </tr>
  //               )
  //             })
  //           }
  //         </Table>
  
  

 