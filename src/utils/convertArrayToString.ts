import { IAwardPersons } from "../domain/award";
import { ICountry, IGenre } from "../domain/common";

export const convertGenreListToString = (
  list: IGenre[] | undefined
): string => {
  if (typeof list === "undefined") {
    return "-";
  }

  return list.map(({ genre }) => genre).join(", ");
};

export const convertingCountryListToString = (
  list: ICountry[] | undefined
): string => {
  if (typeof list === "undefined") {
    return "-";
  }

  return list.map(({ country }) => country).join(", ");
};

export const convertingListPersonsInString = (persons: IAwardPersons[]) => {
  return persons.map(({ nameRu, nameEn }) => nameRu || nameEn).join(", ");
};
