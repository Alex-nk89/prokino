import { useQuery } from "@tanstack/react-query";
import { filmService } from "../services/filmService";
import { personService } from "../services/personService";
import { keys } from "./queryKeys";

export const useFullSearch = (
  keyword: string,
  abortController: AbortController
) => {
  const { data: searchedFilmsList } = useQuery(keys.searchFilm(keyword), () =>
    filmService.getSearchedFilmsByKeyword(keyword, 1, abortController)
  );

  const { data: searchedPersonsList } = useQuery(
    keys.searchPerson(keyword),
    () => personService.getSearchedPersonsByKeyword(keyword, abortController)
  );

  return {
    searchedFilmsList,
    searchedPersonsList,
  };
};
