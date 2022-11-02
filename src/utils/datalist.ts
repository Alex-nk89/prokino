import { IFilm } from "../domain/film";
import { IStaffResponse } from "../domain/person";
import { convertingCountryListToString, convertGenreListToString } from "./convertArrayToString";
import { filterStaff } from "./staff";

export const getDataListForFilmPage = (
    filmInfo: IFilm | undefined,
    staffInfo: IStaffResponse[] | undefined
  ): { key: string; value: string }[] => {
    if (typeof filmInfo === "undefined") {
      return [];
    }
  
      return [
        { key: "Год релиза", value: `${filmInfo.year || ''}` },
        { key: "Название (En)", value: `${filmInfo.nameEn || '-'}` },
        { key: "Страна", value: convertingCountryListToString(filmInfo.countries) },
        { key: "Жанр", value: convertGenreListToString(filmInfo.genres) },
        { key: "Слоган", value: `${filmInfo.slogan || '-'}` },
        { key: "Режиссер", value: filterStaff(staffInfo, "DIRECTOR", 3) },
        { key: "Сценарист", value: filterStaff(staffInfo, "WRITER", 3) },
        { key: "Актеры", value: filterStaff(staffInfo, "ACTOR", 5) },
        { key: "Рейтинг", value: `${filmInfo.ratingKinopoisk || ''}` },
        { key: "Возраст", value: `${filmInfo.ratingAgeLimits?.replace(/\D/ig, '').concat('+') || ''}` },
        { key: "Продолжительность", value: `${filmInfo.filmLength || '-'} мин.` },
      ]
  };
