import React, { useState, FC } from "react";
import { NavLink } from "react-router-dom";
import { Typography, Skeleton, Box } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { MAIN_COLOR } from "../../../constants";
import style from "./InfoBlock.module.scss";

interface Props {
  children: React.ReactNode;
  title?: string;
  maxHeightCSS?: number;
  isLoading?: boolean;
  link?: string;
  action?: "link" | "open";
}

const InfoBlock: FC<Props> = ({
  children,
  title,
  maxHeightCSS = 9999,
  isLoading,
  action,
  link,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const maxHeight = isOpen ? "1000px" : `${maxHeightCSS}px`;

  const subtitle = (
    <Typography variant="body1" sx={{ color: MAIN_COLOR }}>
      Все <ChevronRight />
    </Typography>
  );

  const navLink =
    action === "link" && link ? (
      <NavLink to={link}>
        <Box className={style.infoBlock__header__subtitle}>{subtitle}</Box>
      </NavLink>
    ) : null;

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const open =
    action === "open" ? (
      <Box onClick={openHandler} className={style.infoBlock__header__subtitle}>
        {subtitle}
      </Box>
    ) : null;

  const header =
    title || action ? (
      <Box className={style.infoBlock__header}>
        <Typography variant="h6">{title}</Typography>
        {navLink || open}
      </Box>
    ) : null;

  if (isLoading) {
    return <Skeleton variant="rounded" height={maxHeightCSS} />;
  }

  return (
    <Box className={style.infoBlock} style={{ maxHeight }}>
      {header}
      {children}
    </Box>
  );
};

export default InfoBlock;
