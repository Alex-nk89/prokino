import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { Typography, Box, Alert } from "@mui/material";

import { FactsList } from "../../molecules";
import { factsService } from "../../../services/factsService";
import style from "./FilmFacts.module.scss";
import { keys } from "../../../application/queryKeys";

interface IFilmFacts {
  kinopoiskId: number;
  isDesktop?: boolean;
}

const FilmFacts: FC<IFilmFacts> = ({ kinopoiskId, isDesktop }) => {
  const { data: factsList, isError } = useQuery(keys.facts, () =>
    factsService.getFactsAndBlooper(kinopoiskId)
  );

  const spoilersAttention =
    factsList &&
    factsList?.items.filter(({ spoiler }) => spoiler).length > 0 ? (
      <Alert severity="warning" variant="outlined">
        Внимание! Могут содержаться спойлеры
      </Alert>
    ) : null;

  if (isError) {
    return <Typography variant="body1">Ошибки и факты отсуствуют..</Typography>;
  }

  return (
    <Box className={style.facts_and_bloopers_wrapper}>
      {spoilersAttention}
      <FactsList typeFact="FACT" isDesktop={isDesktop} />
      <FactsList typeFact="BLOOPER" isDesktop={isDesktop} />
    </Box>
  );
};

export default FilmFacts;
