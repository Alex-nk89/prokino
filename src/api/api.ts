import axios from 'axios'
import { IFilm, IFilmSearchByFiltersResponse, IImageResponse, IPremiere, TypeImagesForFilm } from '../models';

const API_URL = 'https://kinopoiskapiunofficial.tech/api';

axios.defaults.baseURL = API_URL;

interface IPremieres {
    total: number;
    items: IPremiere[]
}

const headers = {
    'X-API-KEY': '70b23d2e-8d30-4bd6-ad84-b3addb39fa44',
    'Content-Type': 'application/json',
}

const months: string[] = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'] 

const nowNumberOfMonth = () => new Date().getMonth();

const nowYear = () => new Date().getFullYear();

export const FilmApi = {
    getPremiers: async (month: number = nowNumberOfMonth(), year: number = nowYear()) => {
        return axios<IPremieres>({
            baseURL: API_URL,
            url: '/v2.2/films/premieres',
            headers,
            params: {
                year,
                month: months[month]
            }
        })
    },
    getFilm: async (kinopoiskId: number) => {
        return axios<IFilm>({
            url: `v2.2/films/${kinopoiskId}`,
            headers,
        })
    },
    getFilmImages: async (kinopoiskId: number, type: TypeImagesForFilm = 'STILL') => {
        return axios<IImageResponse>({
            url: `v2.2/films/${kinopoiskId}/images`,
            headers,
            params: {
                type: type
            }
        })
    },
    getSearchedFilms: async (keyword: string, page: number, abortController: AbortController) => {
        return axios<IFilmSearchByFiltersResponse>({
            url: 'v2.2/films',
            headers,
            params: {
                keyword,
                page
            },
            signal: abortController.signal
        })
    },
}