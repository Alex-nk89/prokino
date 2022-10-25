import { MAIN_COLOR, SECONDARY_TEXT_COLOR } from "../../constants";
import { IAward } from "../../models";
import { convertingListPersonsInString } from "../../utils/helpers/helpers";
import style from "./awardItem.module.scss";
import { TaskAlt, ErrorOutline } from "@mui/icons-material";
import { Typography, Tooltip } from "@mui/material";
import { FC } from "react";

export const AwardItem: FC<{ award: IAward }> = ({
  award: { nominationName, win, persons },
}) => {
  const personsAsString =
    persons.length > 0 ? ` (${convertingListPersonsInString(persons)})` : null;

  return (
    <div className={style.award_item}>
      <Tooltip title={win ? "Победа" : "Номинация"}>
        {win ? (
          <TaskAlt sx={{ fill: MAIN_COLOR }} />
        ) : (
          <ErrorOutline sx={{ fill: SECONDARY_TEXT_COLOR }} />
        )}
      </Tooltip>
      <Typography variant="body2">
        {nominationName}
        {personsAsString}
      </Typography>
    </div>
  );
};
