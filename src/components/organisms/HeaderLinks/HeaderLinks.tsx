import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, IconButton, SwipeableDrawer, useMediaQuery } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Logo } from "../../atoms";

import { LiveSearch } from "../../organisms";
import style from "./HeaderLinks.module.scss";

interface IHeaderLinks {
  id: number;
  title: string;
  path: string;
}

const linksWrapperStyle = { display: { xs: "none", md: "flex" } };
const menuButtonStyle = { display: { md: "none" } };

const headerLinks: IHeaderLinks[] = [
  { id: 0, title: "главная", path: "" },
  { id: 1, title: "новинки", path: "/newfilms" },
  { id: 2, title: "топ-250", path: "/topfilms" },
  { id: 3, title: "поиск", path: "/search" },
];

const HeaderLinks: React.FC = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 900px)");

  if (isDesktop) {
    headerLinks.pop();
  }

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpenMobileMenu(isOpen);
    };

  const links = headerLinks.map(({ id, path, title }) => (
    <NavLink
      key={id}
      to={path}
      className={({ isActive }) => (isActive ? style.isActive : undefined)}
      end
      onClick={toggleDrawer(false)}
    >
      {title}
    </NavLink>
  ));

  return (
    <>
      <Box className={style.header_links} sx={linksWrapperStyle}>
        <LiveSearch />
        {links}
      </Box>

      <Box
        className={style.header_links}
        sx={menuButtonStyle}
        onClick={toggleDrawer(true)}
      >
        <IconButton>
          <Menu />
        </IconButton>
      </Box>

      <SwipeableDrawer
        open={isOpenMobileMenu}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        <Box className={style.mobile_header_links}>
          <Box className={style.mobile_header_links__logo_wrapper}>
            <Logo />
          </Box>
          {links}
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default HeaderLinks;
