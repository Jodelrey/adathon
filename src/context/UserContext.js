import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage"

const UserContext = createContext();


const UserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const {getData} = useLocalStorage()

  setIsLogged(getData())

  
  return (
    <UserContext.Provider
      value={{
        loginUser,
        loginPassword,
        isLogged,
        setIsLogged,
        setLoginUser,
        setLoginPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
