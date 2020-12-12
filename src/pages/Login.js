import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container, Input, Label, Button, Text } from "../components/primitive";

//import UserContext from "../contexts/UserContext";

const StyledContainer = styled(Container)`
  width: 100%;
  min-height: calc(100vh - 120px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    min-height: calc(100vh - 180px);
  }
`;

const StyledForm = styled.form`
  width: 40%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    width: 80%;
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
  width: 350px;
  padding: 10px;
  font-size: 15px;
  color: white;
  font-weight: 600;
  margin-left: 20px;
  @media (max-width: 600px) {
    width: 80%;
    margin-left: 0;
  }
`;

const StyledLabel = styled(Label)`
  font-size: 20px;
  width: 100%;
  color: #555555;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledHeading = styled.h1`
  font-size: 40px;
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
  color: #555555;
  font-size: 15px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const StyledLink = styled(Link)`
  color: rgb(0, 192, 210);
  text-decoration: none;
  transition: 0.3s;
  font-weight: 600;

  &:hover {
    transition: 0.3s;
    color: #0e918c;
  }
`;

const Login = () => {
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
        <StyledHeading>Bienvenida</StyledHeading>
        <StyledForm>
          <StyledLabel>
            Email
            <StyledInput type="email" name="email" />
          </StyledLabel>
          <StyledLabel>
            Contraseña
            <StyledInput type="password" name="password" />
          </StyledLabel>
          <StyledText>
            Si olvido su contraseña haga click
            <StyledLink to="/signup"> aquí </StyledLink>
          </StyledText>

          <StyledButton type="submit">Ingresar</StyledButton>
        </StyledForm>
        <StyledText>
          Si no esta registrada hagalo
          <StyledLink to="/signup"> aquí </StyledLink>
        </StyledText>
      </StyledContainer>
    </>
  );
};

export default Login;
