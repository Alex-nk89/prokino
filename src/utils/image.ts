import { IAward } from "../domain/award";

export const getImageForAward = (
    awardsList: IAward[] | undefined,
    type: string
  ): string | null => {
    return awardsList?.find((award) => award.name === type)?.imageUrl || null;
  };