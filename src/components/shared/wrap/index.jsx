import React from "react";
import "./styles.css";

const Wrap = ({ children, variant, sx }) => {
  return (
    <div className={`wrap ${variant}`} style={sx}>
      {children}
    </div>
  );
};

Wrap.defaultProps = {
  variant: "wrap-title",
};

export default Wrap;
