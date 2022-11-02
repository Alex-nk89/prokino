import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";

import style from "./Rating.module.scss";

interface IRating {
  icon: JSX.Element;
  typeVoites: string;
  rating: string | number;
  countVoices: number;
}

const Rating: FC<IRating> = ({
  icon,
  typeVoites,
  rating = "-",
  countVoices = 0,
}) => {
  return (
    <Box className={style.rating}>
      <Box className={style.rating__icon}>{icon}</Box>
      <Box className={style.rating__details}>
        <Box className={style.rating__details__voites}>
          <Typography>{typeVoites}: </Typography>
          <Typography>{rating}</Typography>
          <Star />
        </Box>
        <Box>
          <Typography>{`(Всего голосов: ${countVoices})`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Rating;
