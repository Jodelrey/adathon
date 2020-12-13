import React, { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "../components/primitive";
import { NavLink } from "react-router-dom";
import AsideContext from "../context/AsideContext";
import { fadeInLeft } from "react-animations";

const Container = styled.div`
  min-height: calc(100vh - 240px);
  height: calc(100% - 70px);
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 70px;
  left: 0;
  backdrop-filter: ${(props) => (props.show ? "blur(2px)" : "blur(0px)")};
  z-index: 150;
`;

const DropdownList = styled.ul`
  min-height: calc(100vh - 70px);
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: rgb(125, 48, 134);
  position: absolute;
  padding-top: 25px;
  left: 0;
  width: 220px;
  margin: 0;
  z-index: 200;
`;

const DropdownItem = styled.li`
  height: 90px;
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  color: #f7f6e7;
  text-decoration: none;
  transition: 0.3s;
  padding: 15px;
  font-size: 20px;
  width: 220px;
  height: 100%;

  @media (max-width: 1120px) {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 450px) {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    text-decoration: none;
    color: #ff9600;
    transition: 0.3s;
  }
  &:active {
    text-decoration: none;
    color: #f7f6e7;
  }
  &.selected {
    background-color: #8c1886;
  }
`;
// ------------ANIMATIONS ----------------

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const fadeOutLeftAnimation = keyframes`
0% {
  transform: translateX(0px);
}
100% {
  transform: translateX(-221px;);
}`;

const FadeLeftDiv = styled.div`
  animation: 0.5s
    ${(props) => (props.show ? fadeInLeftAnimation : fadeOutLeftAnimation)};
  opacity: ${(props) => props.show && "1"};
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-delay: 0.3s;
  z-index: 100;
  min-height: calc(100vh - 70px);
  height: 100%;
`;

const Aside = () => {
  const { handleMenuClick, show, setRender, shouldRender } = useContext(
    AsideContext
  );

  useEffect(() => {
    show && setTimeout(setRender(true), 2000);
    show &&
      setTimeout(
        console.log({ funcion: useEffect, elshow: show, setRender: true }),
        2000
      );
  }, [show]);

  return (
    show && (
      <Container show={show}>
        <FadeLeftDiv show={show}>
          <DropdownList onClick={handleMenuClick} show={show}>
            <DropdownItem>
              <StyledNavLink exact activeClassName="selected" to="/">
                Inicio
              </StyledNavLink>
            </DropdownItem>
            <DropdownItem>
              <StyledNavLink exact activeClassName="selected" to="/Nosotros">
                Ventas
              </StyledNavLink>
            </DropdownItem>
            <DropdownItem>
              <StyledNavLink exact activeClassName="selected" to="/Productos">
                Productos
              </StyledNavLink>
            </DropdownItem>
            <DropdownItem>
              <StyledNavLink exact activeClassName="selected" to="/Reparto">
                Costos
              </StyledNavLink>
            </DropdownItem>
            <DropdownItem>
              <StyledNavLink exact activeClassName="selected" to="/Contacto">
                Informes
              </StyledNavLink>
            </DropdownItem>
            <DropdownItem>
            <StyledNavLink exact activeClassName="selected" to="/Contacto">
                Mi cuenta
              </StyledNavLink>
            </DropdownItem>
          </DropdownList>
        </FadeLeftDiv>
      </Container>
    )
  );
};

export default Aside;
