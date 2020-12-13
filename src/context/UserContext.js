import React, { createContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
 
  const [isLogged, setIsLogged] = useState(true);



  return (
    <UserContext.Provider
      value={{
        isLogged,
        setIsLogged
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
