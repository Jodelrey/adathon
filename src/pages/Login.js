import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container, Input, Label, Button, Text } from "../components/primitive";

//import UserContext from "../contexts/UserContext";

const StyledContainer = styled(Container)`
  width: 100vw;
  min-height: calc(100vh - 120px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    min-height: calc(100vh - 300px);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledInput = styled(Input)`
  margin: 10px 0;
  line-height: 15px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 300px;
  transition: 0.3s ease-in;
  padding: 10px;
  font-size: 15px;

  @include media($lg-breakpoint) {
    width: 60%;
    margin-left: 0;
  }

  @include media($md-breakpoint) {
    width: 70%;
    margin-left: 0;
  }
`;

const StyledLabel = styled(Label)`
  font-size: 20px;
  transition: 0.3s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @include media($lg-breakpoint) {
    @include flex(column, space-evenly, center);
    width: 80%;
    height: 80px;
  }

  @include media($md-breakpoint) {
    @include flex(column, space-evenly, center);
    width: 100%;
    height: 80px;
  }
`;

const StyledHeading = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: "#8c1886";
`;

const StyledForm = styled.form`
  width: 80%;
  height: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-space-between;
  align-items: center;

  @include media($md-breakpoint) {
    min-height: 260px;
    height: 100%;
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  margin-right: 0;
  width: 300px;

  @include media($md-breakpoint) {
    width: 70%;
  }
`;

const StyledText = styled(Text)`
  color: #fff;
  font-size: 17px;
  transition: 0.3s;

  @include media($lg-breakpoint) {
    padding-top: 30px;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
  font-weight: 700;

  &:hover {
    color: #fff;
    transition: 0.3s;
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
            <Input type="email" name="email" />
          </StyledLabel>
          <StyledLabel className={`form-label`}>
            Password
            <StyledInput type="password" name="password" />
          </StyledLabel>
          <StyledButton type="submit">Sign In</StyledButton>
        </StyledForm>
        <StyledText>
          If you´re not registered, do it
          <StyledLink to="/signup"> here </StyledLink>
        </StyledText>
      </StyledContainer>
    </>
  );
};

export default Login;
