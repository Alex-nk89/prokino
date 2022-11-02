import React, { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Toolbar, Box } from "@mui/material";
import { Logo } from "../../../atoms";
import { HeaderLinks } from "../../../organisms";
import styles from "./Header.module.scss";

const logoStyle = { maxWidth: { xs: "150px", md: "200px" } };

export const Header: FC = () => {
  const [isOffset, setIsOffset] = useState(false);

  const offsetHandler = () => {
    const offset = window.pageYOffset;

    offset > 100 ? setIsOffset(true) : setIsOffset(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", offsetHandler);

    return document.addEventListener("scroll", offsetHandler);
  }, []);

  return (
    <header className={styles.header}>
      <Toolbar
        component="nav"
        className={styles.header__nav}
        sx={{
          height: {
            xs: isOffset ? "2rem" : "4rem",
            md: isOffset ? "2rem" : "5rem",
          },
        }}
      >
        <NavLink to="/">
          <Box sx={logoStyle}>
            <Logo />
          </Box>
        </NavLink>

        <HeaderLinks />
      </Toolbar>
    </header>
  );
};
