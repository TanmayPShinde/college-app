import React from "react";
import "./styles.css";

function Button({ content, link, variant, sx }) {
  return (
    <a
      href={link}
      className={`button first ${
        variant === "primary"
          ? " bg-first third"
          : variant === "white"
          ? "bg-third first"
          : ""
      }`}
      target="_blank"
      rel="noreferrer"
      style={{ transition: "all 0.1s ease-in", ...sx }}
    >
      {content}
    </a>
  );
}

Button.defaultProps = {
  variant: "secondary",
};

export default Button;
