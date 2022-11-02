import { api } from ".";
import { FilmService } from "../application/ports";
import { IPremieres } from "../domain/premiere";
import { IFilm, IFilmSearchByFiltersResponse } from '../domain/film';

const months: string[] = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'] 

export const filmService: FilmService = {
    getPremieres({ year, month }): Promise<IPremieres> {
        return api<IPremieres>('/v2.2/films/premieres', {
            params: {
                year,
                month: months[month]
            },
        })
    },
    getFilm(kinopoiskId): Promise<IFilm> {
        return api<IFilm>(`v2.2/films/${kinopoiskId}`)
    },
    getSearchedFilmsByKeyword(keyword, page, abortController): Promise<IFilmSearchByFiltersResponse> {
        return new Promise<IFilmSearchByFiltersResponse>((resolve) => {
            setTimeout(() => resolve(
                api<IFilmSearchByFiltersResponse>('v2.2/films', {
                    params: {
                        keyword,
                        page,
                    },
                    signal: abortController.signal
                })
            ), 1000)
        })
    },
}