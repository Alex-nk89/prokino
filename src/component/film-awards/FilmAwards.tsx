import { FilmApi } from "../../api/api";
import { MAIN_COLOR, SECONDARY_TEXT_COLOR } from "../../constants/";
import { AwardsWrapper } from "../awards-wrapper/AwardsWrapper";
import style from "./filmAwards.module.scss";
import { ErrorOutline, TaskAlt } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC, useMemo } from "react";

interface IFilmAwards {
  kinopoiskId: number;
}

export const FilmAwards: FC<IFilmAwards> = ({ kinopoiskId }) => {
  const { data: awards, isError } = useQuery(["awards", kinopoiskId], () =>
    FilmApi.getFilmAwards(kinopoiskId)
  );

  const typeAwards = Array.from(
    new Set(awards?.data.items.map(({ name }) => name))
  );

  const awardsList = typeAwards.map((type) => {
    const awardThisType = awards?.data.items.filter(
      (award) => award.name === type
    );
    return <AwardsWrapper key={type} awards={awardThisType} />;
  }, []);

  const annotation = useMemo(
    () => (
      <div className={style.film_award_wrapper__annotation}>
        <div>
          <TaskAlt sx={{ fill: MAIN_COLOR }} />
          <Typography variant="body2">- победа</Typography>
        </div>
        <div>
          <ErrorOutline sx={{ fill: SECONDARY_TEXT_COLOR }} />
          <Typography variant="body2">- номинация</Typography>
        </div>
      </div>
    ),
    []
  );

  if (isError) {
    return (
      <Typography variant="body2">Не удалось загрузить награды.</Typography>
    );
  }

  if (awards?.data.total === 0) {
    return <Typography variant="body2">Без наград.</Typography>;
  }

  return (
    <section className={style.film_award_wrapper}>
      {awardsList}
      {annotation}
    </section>
  );
};
