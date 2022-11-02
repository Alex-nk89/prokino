import { FC, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import { Groups, Reviews } from "@mui/icons-material";
import { KinopoiskLogo, ImdbLogo } from "../../atoms";
import { Rating } from "../../molecules";
import { useRatingFilm } from "../../../application/film";

import { SECONDARY_TEXT_COLOR } from "../../../constants";
import style from "./FilmRating.module.scss";
import { keys } from "../../../application/queryKeys";

const logoStyle = {
  maxWidth: "2.5rem",
  maxHeight: "2.5rem",
  color: SECONDARY_TEXT_COLOR,
};

const logos: { [key: string]: JSX.Element } = {
  kinopoisk: <KinopoiskLogo />,
  IMDB: <ImdbLogo />,
  critics: <Groups sx={logoStyle} />,
  reviews: <Reviews sx={logoStyle} />,
};

const FilmRating: FC = () => {
  const ratings = useRatingFilm(keys.filmData);

  const ratingsList = useMemo(
    () =>
      ratings.map(({ icon, title, rating, countVoices, link, target }) => {
        const contain = (
          <Rating
            icon={logos[icon]}
            typeVoites={title}
            rating={rating}
            countVoices={countVoices}
          />
        );

        if (target === "_blank") {
          return (
            <a href={link} target={target} key={title}>
              {contain}
            </a>
          );
        } else {
          return (
            <NavLink to={link} key={title}>
              {contain}
            </NavLink>
          );
        }
      }),
    [ratings]
  );

  return <Box className={style.rating_wrapper}>{ratingsList}</Box>;
};

export default FilmRating;
