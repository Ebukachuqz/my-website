import { styled } from "@mui/material";
import React from "react";

const Container = styled("div")`
  padding: 0 3px;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  h2 {
    font-size: 18px;
    font-weight: 600;
  }

  span {
    position: absolute;
    height: 7px;
    width: 100%;
    bottom: 14px;
    opacity: 0.5;
    left: 0;
    background-color: var(--primary-color);
  }
`;
const Title = ({ text }) => {
  return (
    <Container>
      <span></span>
      <h2>{text}</h2>
    </Container>
  );
};

export default Title;
