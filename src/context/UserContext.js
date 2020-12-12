import React, { createContext, useState } from "react";
import UseFetch from "../hooks/UseFetchPost";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const signIn = (user, password) => {};

  return (
    <UserContext.Provider
      value={{ setLoginUser, setLoginPassword, loginUser, loginPassword }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
