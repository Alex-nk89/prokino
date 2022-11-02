import { useQuery } from "@tanstack/react-query";
import { filmService } from "../services/filmService";
import { personService } from "../services/personService";

export const useFullSearch = (keyword: string, abortController: AbortController) => {

    const { data: searchedFilmsList } = useQuery(['searchFilmByKeyword', keyword], () => filmService.getSearchedFilmsByKeyword(keyword, 1, abortController))
    const { data: searchedPersonsList } = useQuery(['searchPersonsByKeyword', keyword], () => personService.getSearchedPersonsByKeyword(keyword, abortController))

    return {
        searchedFilmsList,
        searchedPersonsList
    }
}