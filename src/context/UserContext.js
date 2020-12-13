import React, { createContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLogged, setIsLogged] = useState(true);



  return (
    <UserContext.Provider
      value={{
        loginUser, 
        loginPassword,
        isLogged,
        setIsLogged, 
        setLoginUser, 
        setLoginPassword
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
