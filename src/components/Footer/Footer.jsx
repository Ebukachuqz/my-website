import { styled } from "@mui/material";
import React from "react";

const Container = styled("footer")`
  background: #1e1e1e;
  min-height: 50px;
  margin: 30px auto;
  padding: 10px;
  color: #fff;
  border-radius: var(--border-radius);
`;

const FooterText = styled("p")`
  color: #9c9c9c;
  font-size: 12px;
  text-align: center;
  padding: 5px;
  width: 100%;
  span {
    color: #fff;
    font-size: 13px;
  }
`;
const Footer = () => {
  return (
    <Container>
      <FooterText>
        © 2022 All rights reserved. Created by <span>Ebuka Chuqz</span>
      </FooterText>
    </Container>
  );
};

export default Footer;
