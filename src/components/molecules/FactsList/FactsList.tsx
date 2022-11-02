import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

import { IFactResponse } from "../../../domain/fact";
import style from "./FactsList.module.scss";
import { FactsListItem } from "../../atoms";
import { removeLinksFromText } from "../../../utils/common";
import { keys } from "../../../application/queryKeys";

interface IFactsList {
  typeFact: "FACT" | "BLOOPER";
  isDesktop?: boolean;
}

const FactsList: FC<IFactsList> = ({ typeFact, isDesktop }) => {
  const title = typeFact === "FACT" ? "Знаете ли вы что..." : "Ошибки";
  const queryClient = useQueryClient();
  const factsList = queryClient.getQueryData<IFactResponse>(keys.facts);

  const facts = factsList?.items
    .filter(({ type }) => type === typeFact)
    .map(({ text }) => (
      <FactsListItem
        key={text}
        withMarker={isDesktop}
        fact={removeLinksFromText(text)}
      />
    ));

  return (
    <Box className={style.facts_list}>
      <Box className={style.facts_list__header}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box className={style.facts_list__list}>
        {facts && facts.length > 0 ? facts : "Нам об этом ничего неизвестно"}
      </Box>
    </Box>
  );
};

export default FactsList;
