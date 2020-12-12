import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container, Input, Label, Button, Text } from "../components/primitive";

//import UserContext from "../contexts/UserContext";

const StyledContainer = styled(Container)`
  width: 100%;
  //min-height: calc(100vh - 120px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #435055;
`;

const StyledForm = styled.form`
  margin: 30px 0;
  width: 40%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2em;
  border-radius: 3em;
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
`;

const StyledInput = styled(Input)`
  margin: 10px 0;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  background-color: #aaaaaa;
  outline: none;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  color: white;
  font-weight: 600;
`;

const StyledLabel = styled(Label)`
  font-size: 15px;
  width: 100%;
  color: white;
  display: flex;
  font-weight: 600;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledHeading = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: white;
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
  margin-top: 20px;
  background-color: #ff9600;
  color: white;
  font-weight: 600;
  font-size: 15px;
  transition: 0.3s easy-in;
  cursor: pointer;
  &:hover {
    background-color: #fd8c04;
    transition: 0.3s easy-in;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const StyledText = styled(Text)`
  color: white;
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const StyledLink = styled(Link)`
  color: #8c1886;
  text-decoration: none;
  transition: 0.3s;
  font-weight: 600;

  &:hover {
    transition: 0.3s;
    color: rgb(125, 48, 134);
  }
`;

const Register = () => {
  //   const [error, setError] = useState(false);
  //   const [modal, setModal] = useState(false);
  //   const history = useHistory();
  //   const { theme } = useContext(ThemeContext);
  //   const { user } = useContext(UserContext);
  //   const emailRef = useRef(null);
  //   const passRef = useRef(null);
  //   const submitRef = useRef(null);

  //   useEffect(() => {
  //     emailRef.current.focus();
  //   }, []);

  //   const handleEmailDown = (event) => {
  //     if (event.key === "Enter") {
  //       passRef.current.focus();
  //     }
  //   };

  //   const handlePassDown = (event) => {
  //     if (event.key === "Enter") {
  //       submitRef.current.focus();
  //     }
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     setError(false);

  return (
    <>
      <StyledContainer>
        <StyledHeading>Registrarse</StyledHeading>
        <StyledForm>
          <StyledLabel>
            Email
            <StyledInput type="email" name="email" />
          </StyledLabel>
          <StyledLabel>
            Contraseña
            <StyledInput type="password" name="password" />
          </StyledLabel>
          <StyledLabel>
            Confirme la contraseña
            <StyledInput type="password" name="password" />
          </StyledLabel>
          <StyledButton type="submit">Registrese</StyledButton>
          <StyledText>
            Si ya esta registrada haga click
            <StyledLink to="/signup"> aquí </StyledLink>
          </StyledText>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default Register;
