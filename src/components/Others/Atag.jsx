import React from "react";

const Atag = ({ text, href, color }) => {
  return (
    <a
      style={{ textDecoration: "none", color: color }}
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {text}
    </a>
  );
};

export default Atag;
