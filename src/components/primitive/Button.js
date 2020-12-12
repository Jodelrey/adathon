import React from "react";

const Button = ({ children, forwardedRef, ...props }) => {

  return (
    <button
      ref={forwardedRef}
      tabindex="0"
      {...props}
    >
      {children}
    </button>
  );
};

const forwardedButton = React.forwardRef(Button);

export default forwardedButton;
