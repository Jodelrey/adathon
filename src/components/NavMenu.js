import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "../components/primitive/";
import { NavLink } from "react-router-dom";
import logo from "../img/logo_top.gif";
import { Menu } from "@styled-icons/ionicons-solid/Menu";
import Aside from "./Aside";
import AsideContext from "../context/AsideContext";

const StyledNav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #8c1886;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  @media (max-width: 710px) {
    flex-direction: row;
    width: 40%;
    justify-content: flex-start;
  }
  @media (max-width: 450px) {
    width: 60%;
  }
`;

const Image = styled.img`
  height: 70px;
  @media (max-width: 320px) {
    height: 25px;
  }
`;


const ResponsiveNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 80%;
  @media (max-width: 710px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  outline: none; 
  cursor: pointer; 
  color: #f7f6e7;
  text-decoration: none;
  transition: 0.3s;
  padding: 15px;
  font-size: 15px;
  width: 220px;
  text-align: center;

    &:hover {
      text-decoration: none;
      color: #b8b0b0;
      transition: 0.3s;
    }
    &:active {
      text-decoration: none;
      color: #f7f6e7;
    }
    &.selected {
      background-color: rgb(125, 48, 134);
    }

    @media (max-width: 1120px) {
    font-size: 20px;
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

`;
const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  color: #f7f6e7;
  text-decoration: none;
  transition: 0.3s;
  padding: 15px;
  font-size: 15px;
  width: 220px;
  text-align: center;

    &:hover {
      text-decoration: none;
      color: #b8b0b0;
      transition: 0.3s;
    }
    &:active {
      text-decoration: none;
      color: #f7f6e7;
    }
    &.selected {
      background-color: rgb(125, 48, 134);
    }

    @media (max-width: 1120px) {
      font-size: 20px;
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

`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  display: none;
  @media (max-width: 710px) {
    display: block;
  }
`;

const StyledMenu = styled(Menu)`
  height: 30px;
  cursor: pointer;
  @media (max-width: 320px) {
    height: 25px;
  }
`;

const NavMenu = () => {
  const { handleMenuClick, hidden } = useContext(AsideContext);

  return (
    <StyledNav>
      <Container>
        <Image src={logo} />
      </Container>

      <ResponsiveNav>
        <StyledNavLink exact activeClassName="selected" to="/">
          Inicio
        </StyledNavLink>
        <StyledNavLink exact activeClassName="selected" to="/Ventas">
          Ventas
        </StyledNavLink>
        <StyledNavLink exact activeClassName="selected" to="/Productos">
          Productos
        </StyledNavLink>
        <StyledNavLink exact activeClassName="selected" to="/Costos">
          Costos
        </StyledNavLink>
        <StyledNavLink exact activeClassName="selected" to="/Informes">
          Informes
        </StyledNavLink>
        <StyledLink>Cerrar sesión</StyledLink>
      </ResponsiveNav>

      <DropdownMenu>
        <StyledMenu onClick={handleMenuClick} />
        {!hidden && <Aside />}
      </DropdownMenu>
    </StyledNav>
  );
};

export default NavMenu;