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

  p {
    font-weight: bold;
    font-size: 14px;
    margin-left: 15px;
  }
  &:hover {
    background: black;
  }
`;
const Icon = styled("div")`
  color: #000;
  background: #fff;
  border-radius: 50px;
  font-size: 11px;
  height: 25px;
  width: 25px;
  margin-left: 25px;
  text-align: center;
  line-height: 29px;
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
