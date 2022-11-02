import { IPremieres } from "../domain/premiere";
import { IFilm, IFilmSearchByFiltersResponse } from '../domain/film';
import { TypeImagesForFilm, IImageResponse } from "../domain/image";
import { IStaffResponse, IPersonByNameResponse } from "../domain/person";
import { IFactResponse } from "../domain/fact";
import { IAwardResponse } from "../domain/award";

export interface FilmService {
    getPremieres(params: { year: number, month: number }): Promise<IPremieres>,
    getFilm(kinopoiskId: number): Promise<IFilm>,
    getSearchedFilmsByKeyword(keyword: string, page: number, abortController: AbortController ): Promise<IFilmSearchByFiltersResponse>,
}

export interface ImageService {
    getFilmImages(params: { type: TypeImagesForFilm, kinopoiskId: number }): Promise<IImageResponse>,
}

export interface PersonService {
    getActorsInFilm(kinopoiskId: number): Promise<IStaffResponse[]>,
    getSearchedPersonsByKeyword(keyword: string, abortController: AbortController): Promise<IPersonByNameResponse>
}

export interface FactsService {
    getFactsAndBlooper(kinopoiskId: number): Promise<IFactResponse>
}

export interface AwardsService {
    getAwards(kinopoiskId: number): Promise<IAwardResponse>
}