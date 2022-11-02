import { IStaffResponse } from "../domain/person";

export const filterStaff = (
    staffList: IStaffResponse[] | undefined,
    key: string,
    count: number
  ): string => {
    if (typeof staffList === "undefined") {
      return "-";
    }
  
    return staffList
      .filter(({ professionKey }) => professionKey === key)
      .slice(0, count)
      .map(({ nameRu }) => nameRu)
      .join(", ");
  };