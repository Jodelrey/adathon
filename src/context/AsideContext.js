import React, { createContext, useState } from "react";

const AsideContext = createContext();

const AsideProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [shouldRender, setRender] = useState(show);

  const handleMenuClick = () => {
    setShow(!show);
    !show && setRender(false);

    console.log({
      funcion: "handleMenuClick",
      elshow: show,
      setRender: false,
    });
  };

  return (
    <AsideContext.Provider
      value={{ show, handleMenuClick, shouldRender, setRender }}
    >
      {children}
    </AsideContext.Provider>
  );
};

export default AsideContext;
export { AsideProvider };