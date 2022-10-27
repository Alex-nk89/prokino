import { useQuery } from "@tanstack/react-query"
import { FilmApi } from '../api/api'

export const useFilmData = (kinopoiskId: number) => {
    const { data: filmInfo, isFetching: isFetchingFilm, isError: isErrorFilm, error: errorFilm } = useQuery(['filmData'], () => FilmApi.getFilm(kinopoiskId));
    const { data: staffInfo, isFetching: isFetchingStaff, isError: isErrorStaff, error: errorStaff } = useQuery(['filmStaffList'], () => FilmApi.getActorsInFilm(kinopoiskId));

    const filmData = {
        filmInfo: filmInfo?.data,
        staffInfo: staffInfo?.data,
        isFetching: isFetchingFilm && isFetchingStaff,
        isError: isErrorFilm && isErrorStaff,
        error: errorFilm || errorStaff,
    }

    return filmData;
}