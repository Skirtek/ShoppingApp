import DrawerContext from "../context/DrawerContext";
import AccountIcon from "../icons/AccountIcon";
import CartIcon from "../icons/CartIcon";
import {
  NavbarContainer,
  NavbarIcons,
  NavbarLink,
  NavbarLinks,
} from "./Navbar.styles";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  const { toggleCartDrawer, toggleProfileDrawer } = useContext(DrawerContext);

  return (
    <>
      <NavbarContainer>
        <NavbarLinks>
          <NavbarLink to={"/"}>Home</NavbarLink>
          <NavbarLink to={"/store"}>Store</NavbarLink>
          <NavbarLink to={"/about"}>About</NavbarLink>
        </NavbarLinks>
        <NavbarIcons>
          <CartIcon style={{ cursor: "pointer" }} onClick={toggleCartDrawer} />
          <AccountIcon
            style={{ cursor: "pointer" }}
            onClick={toggleProfileDrawer}
          />
        </NavbarIcons>
      </NavbarContainer>
      <Outlet />
    </>
  );
};
