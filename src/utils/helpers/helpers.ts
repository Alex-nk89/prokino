import {
  ICountry,
  IGenre,
  IStaffResponse,
  IFilm,
  IAward,
  IAwardPersons,
} from "../../models";

export const convertingGenreListToString = (
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

export const removeLinksFromText = (text: string) => {
  return text.replace(/<[\d\w\s="//>]+/gi, "").replace(/&#[\d;]+/gi, "");
};

export const getDataListForFilmPage = (
  filmInfo: IFilm | undefined,
  staffInfo: IStaffResponse[] | undefined
): { key: string; value: string }[] => {
  if (typeof filmInfo === "undefined") {
    return [];
  }

  return [
    { key: "Год релиза", value: `${filmInfo.year}` || "-" },
    { key: "Страна", value: convertingCountryListToString(filmInfo.countries) },
    { key: "Жанр", value: convertingGenreListToString(filmInfo.genres) },
    { key: "Слоган", value: filmInfo.slogan || "-" },
    { key: "Продолжительность", value: `${filmInfo.filmLength || "-"} мин.` },
    { key: "Режиссер", value: filterStaff(staffInfo, "DIRECTOR", 3) },
    { key: "Сценарист", value: filterStaff(staffInfo, "WRITER", 3) },
    { key: "Актеры", value: filterStaff(staffInfo, "ACTOR", 5) },
  ];
};

export const getImageForAward = (
  awardsList: IAward[] | undefined,
  type: string
): string | null => {
  return awardsList?.find((award) => award.name === type)?.imageUrl || null;
};

export const convertingListPersonsInString = (persons: IAwardPersons[]) => {
  return persons.map(({ nameRu, nameEn }) => nameRu || nameEn).join(", ");
};
