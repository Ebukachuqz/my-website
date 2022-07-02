import { Box, styled } from "@mui/material";
import React from "react";
import { FaHome, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import GenericButton from "../GenericButton/GenericButton";
import SocialIcons from "../SocialIcons/SocialIcons";

const Nav = styled("nav")`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 70px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0px 2px 92px 0px rgb(0 0 0 / 7%);
  border-radius: 6px;
  margin-bottom: 30px;
`;

const Nav1 = styled("ul")`
  flex: 1;
  list-style: none;
  display: flex;
  padding: 0;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  li {
    height: 100%;
    :nth-of-type(1) {
      background: var(--primary-color);
      font-size: 18px;
      margin-right: 10px;
      transition: 350ms ease-in;

      &:hover {
        background: var(--primary-color-dark);
      }
    }
  }
`;

const NavLinks = styled(NavLink)`
  text-decoration: none;
  padding: 0 10px;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  height: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 400ms color ease-in-out, 350ms transform ease-out;

  &:hover {
    color: var(--primary-color);
    transform: scale(1.1);
  }
`;

const Nav2 = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
`;

const Header = () => {
  return (
    <Nav>
      <Nav1>
        <li>
          <NavLinks
            style={{
              padding: "0 24px",
              fontSize: "19px",
              color: "black",
            }}
            to="/"
          >
            <FaHome />
          </NavLinks>
        </li>
        <li>
          <NavLinks to="/">Portfolio</NavLinks>
        </li>
        <li>
          <NavLinks to="/">Resume</NavLinks>
        </li>
        <li>
          <NavLinks to="/">Blog</NavLinks>
        </li>
        <li>
          <NavLinks to="/">Contact</NavLinks>
        </li>
      </Nav1>
      <Nav2>
        <Box sx={{ marginRight: "20px" }}>
          <SocialIcons />
        </Box>
        <Box>
          <GenericButton text={"Let's Work"} icon={<BsBriefcaseFill />} />
        </Box>
      </Nav2>
    </Nav>
  );
};

export default Header;
