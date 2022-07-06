import { Box, styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import GenericButton from "../GenericButton/GenericButton";

// icons imports
import { RiMenuFill } from "react-icons/ri";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import SocialIcons from "../SocialIcons/SocialIcons";

// routes import
import { routes } from "../../data";
import { useGlobalContext } from "../../context";

const Nav = styled("nav")`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 70px;
  background: #fff;
  overflow: hidden;
  box-shadow: var(--box-shadow);
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

const SocialsBox = styled(Box)`
  margin: auto 20px;

  @media (max-width: 1130px) {
    display: none;
  }
  @media (max-width: 992px) {
    display: block;
  }
`;

const Nav2 = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuBox = styled(Box)`
  text-align: center;
  height: 70px;
  border-left: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: var(--primary-color-dark);
  }

  @media (min-width: 715px) {
    display: none;
  }
`;

const MenuIcon = styled(RiMenuFill)`
  font-size: 20px;
  padding: 20px;
`;

const Header = () => {
  const { setShowMenuList, showMenuList } = useGlobalContext();
  // handle show menu list
  const handleMenuList = () => {
    setShowMenuList((prev) => !prev);
  };

  const activeLink = ({ isActive }) => {
    return { color: isActive ? "var(--primary-color-dark)" : "" };
  };

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
        {routes.map((route) => {
          return (
            <li key={route.id} className="disappear">
              <NavLinks style={activeLink} to={route.link}>
                {route.name}
              </NavLinks>
            </li>
          );
        })}
      </Nav1>
      <Nav2>
        <SocialsBox>
          <SocialIcons />
        </SocialsBox>
        <Box className="disappear" sx={{ marginRight: "20px" }}>
          <GenericButton text={"Let's Work"} icon={<BsBriefcaseFill />} />
        </Box>
        <MenuBox
          onClick={handleMenuList}
          sx={{ color: showMenuList ? "var(--primary-color-dark)" : "black" }}
        >
          <MenuIcon />
        </MenuBox>
      </Nav2>
    </Nav>
  );
};

export default Header;
