import React from "react";

const Atag = ({ text, href }) => {
  return (
    <a
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {text}
    </a>
  );
};

export default Atag;
