import { styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";

// routes import
import { routes } from "../../data";

const Container = styled("div")`
  position: relative;
  @media (min-width: 715px) {
    display: none !important;
  }
`;

const Menu = styled("div")`
  position: absolute;
  width: 100%;
  box-shadow: 0px 2px 92px 0px rgb(0 0 0 / 25%);
  z-index: 4;
  background-color: white;
  margin-top: -5px;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  overflow: hidden;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  border-bottom: 1px solid var(--thin-grey-line);
  transition: 400ms linear background 100ms, 400ms linear transform 100ms;

  &:hover {
    background: var(--primary-color);
    transform: scale(1.06);
  }
`;

const MenuList = () => {
  // using useref to reference the component and set its display it when needed
  const { showMenuList, setShowMenuList } = useGlobalContext();

  const activeLink = ({ isActive }) => {
    return { background: isActive ? "var(--primary-color-dark)" : "" };
  };
  return (
    <Container>
      {showMenuList && (
        <Menu onClick={() => setShowMenuList(false)}>
          {routes.map((route) => {
            return (
              <Link style={activeLink} key={route.id} to={route.link}>
                {route.name}
              </Link>
            );
          })}
        </Menu>
      )}
    </Container>
  );
};

export default MenuList;
