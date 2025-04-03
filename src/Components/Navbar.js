/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import LoginIcon from "@mui/icons-material/Login";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const history = useHistory();

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "Menu",
      icon: <RestaurantMenuIcon />,
      path: "/menu",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/#about",
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      path: "/#testimonials",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/#contact",
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      path: "/cart",
    },
    {
      text: "Sign In",
      icon: <LoginIcon />,
      path: "/signin",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <a href="/#about">About</a>
        <a href="/#testimonials">Testimonials</a>
        <a href="/#contact">Contact</a>
        <Link to="/cart">
          <BsCart2 className="navbar-cart-icon" />
        </Link>
        <button className="primary-button" onClick={() => history.push("/signin")}>Sign In</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => history.push(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
