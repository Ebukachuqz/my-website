import React from "react";
import { Box, styled } from "@mui/material";

const GenericBtn = styled("button")`
  background: var(--primary-color);
  height: 35px;
  border: 0;
  margin: auto;
  color: black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 350ms ease-in background;

  p {
    font-weight: bold;
    font-size: 14px;
    margin-left: 10px;
  }
  &:hover {
    background: var(--primary-color-dark);
  }
`;
const Icon = styled("div")`
  color: #000;
  background: #fff;
  border-radius: 50px;
  font-size: 16px;
  padding: 5px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GenericButton = ({ text, icon }) => {
  return (
    <GenericBtn variant="contained">
      <p>{text}</p>
      <Icon>{icon}</Icon>
    </GenericBtn>
  );
};

export default GenericButton;
