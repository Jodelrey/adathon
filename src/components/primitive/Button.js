import React from "react";

const Button = ({ children, ...props }) => {

  return (
    <button
      tabindex="0"
      {...props}
    >
      {children}
    </button>
  );
};


export default Button;
