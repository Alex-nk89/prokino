import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography, Badge } from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";

import { Carousel } from "../../molecules";
import { awardService } from "../../../services/awardsService";
import { MAIN_COLOR } from "../../../constants";
import style from "./Awards.module.scss";
import { keys } from "../../../application/queryKeys";

interface IAwards {
  kinopoiskId: number;
}

const badgeStyle = {
  "& .MuiBadge-badge": {
    backgroundColor: MAIN_COLOR,
  },
};

export const Awards: FC<IAwards> = ({ kinopoiskId }) => {
  const { data: awards, isError } = useQuery(keys.awards, () =>
    awardService.getAwards(kinopoiskId)
  );

  const typeAwards = Array.from(new Set(awards?.items.map(({ name }) => name)));

  const awardsList = typeAwards.map((type, i) => {
    const thisTypeAwardsList = awards?.items.filter(
      ({ name }) => name === type
    );

    const nameAward =
      typeof thisTypeAwardsList !== "undefined"
        ? thisTypeAwardsList[0].name
        : "";

    const countThisAward = thisTypeAwardsList?.length || 0;

    const imageThisAward = thisTypeAwardsList?.find(({ imageUrl }) => imageUrl)
      ?.imageUrl ? (
      <img src={thisTypeAwardsList[0].imageUrl} alt="изображение награды" />
    ) : (
      <EmojiEvents />
    );

    return (
      <NavLink key={i} to={`/awards/${kinopoiskId}`}>
        <Box className={style.film_award_wrapper__award_item}>
          <Typography variant="subtitle1">{nameAward}</Typography>
          <Badge
            badgeContent={countThisAward}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            color="primary"
            sx={badgeStyle}
          >
            {imageThisAward}
          </Badge>
        </Box>
      </NavLink>
    );
  });

  if (isError) {
    return (
      <Typography variant="body2">Не удалось загрузить награды.</Typography>
    );
  }

  return (
    <Box className={style.film_award_wrapper}>
      <Carousel items={awardsList} />
    </Box>
  );
};
