import { useQuery, useQueryClient } from "@tanstack/react-query";
import { filmService } from "../services/filmService";
import { personService } from "../services/personService";
import { IFilm } from "../domain/film";
import { keys } from "./queryKeys";

export const useFilmData = (kinopoiskId: number) => {
  const {
    data: filmInfo,
    isFetching: isFetchingFilm,
    isError: isErrorFilm,
    error: errorFilm,
  } = useQuery(keys.filmData, () => filmService.getFilm(kinopoiskId));
  const {
    data: staffInfo,
    isFetching: isFetchingStaff,
    isError: isErrorStaff,
    error: errorStaff,
  } = useQuery(keys.filmStaff, () =>
    personService.getActorsInFilm(kinopoiskId)
  );

  return {
    filmInfo: filmInfo,
    staffInfo: staffInfo,
    isFetching: isFetchingFilm && isFetchingStaff,
    isError: isErrorFilm && isErrorStaff,
    error: errorFilm || errorStaff,
  };
};

export const useRatingFilm = (queryKey: string[]) => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IFilm>(queryKey);

  return [
    {
      icon: "kinopoisk",
      title: "Кинопоиск",
      rating: data?.ratingKinopoisk || "-",
      countVoices: data?.ratingKinopoiskVoteCount || 0,
      link: "https://www.kinopoisk.ru/",
      target: "_blank",
    },
    {
      icon: "IMDB",
      title: "IMDB",
      rating: data?.ratingImdb || "-",
      countVoices: data?.ratingImdbVoteCount || 0,
      link: "https://www.imdb.com/",
      target: "_blank",
    },
    {
      icon: "critics",
      title: "Критики",
      rating: data?.ratingFilmCritics || "-",
      countVoices: data?.ratingFilmCriticsVoteCount || 0,
      link: ".",
      target: "_self",
    },
    {
      icon: "reviews",
      title: "Рецензии",
      rating: data?.ratingGoodReview || "-",
      countVoices: data?.reviewsCount || 0,
      link: ".",
      target: "_self",
    },
  ];
};
