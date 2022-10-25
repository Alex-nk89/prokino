import { MAIN_COLOR } from "../../constants";
import { IAward } from "../../models";
import { AwardItem } from "../award-item/AwardItem";
import style from "./awardsWrapper.module.scss";
import { EmojiEvents } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { FC } from "react";

interface IAwardsWrapper {
  awards: IAward[] | undefined;
}

export const AwardsWrapper: FC<IAwardsWrapper> = ({ awards }) => {
  const name = awards ? awards[0].name : "";
  const imageUrl = awards ? awards[0].imageUrl : null;

  const poster = imageUrl ? (
    <img src={imageUrl} alt="награда" width={24} height={24} />
  ) : (
    <EmojiEvents sx={{ fill: MAIN_COLOR }} />
  );

  const awardsList = awards?.map((award) => (
    <AwardItem key={award.nominationName} award={award} />
  ));

  return (
    <div className={style.award_wrapper}>
      <div className={style.award_wrapper__header}>
        {poster}
        <Typography variant="body1">{name}</Typography>
      </div>

      <div className={style.award_wrapper__award_list}>{awardsList}</div>
    </div>
  );
};
