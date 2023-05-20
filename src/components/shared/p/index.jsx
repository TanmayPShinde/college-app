import React from "react";
import "./styles.css";

const P = ({ children, variant, sx }) => {
  return (
    <p className={variant} style={sx}>
      {children}
    </p>
  );
};

P.defaultProps = {
  variant: "paragraph",
};

export default P;
