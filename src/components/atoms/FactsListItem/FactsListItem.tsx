import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Circle } from "@mui/icons-material";

import style from "./FactsListItem.module.scss";

interface IFactsListItem {
  withMarker?: boolean;
  fact: string;
}

const FactsListItem: FC<IFactsListItem> = ({ withMarker, fact }) => {
  return (
    <Box className={style.fact_item}>
      {withMarker && <Circle />}
      <Typography variant="body2">{fact}</Typography>
    </Box>
  );
};

export default FactsListItem;
