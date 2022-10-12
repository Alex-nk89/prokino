import axios from 'axios'
import { IFilm, IPremiere } from '../models';

const API_URL = 'https://kinopoiskapiunofficial.tech/api';

axios.defaults.baseURL = API_URL;

interface IPremieres {
    total: number;
    items: IPremiere[]
}

const months: string[] = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'] 

const nowNumberOfMonth = () => new Date().getMonth();

const nowYear = () => new Date().getFullYear();

export const FilmServices = {
    getPremiers: async (month: number = nowNumberOfMonth(), year: number = nowYear()) => {
        return axios<IPremieres>({
            baseURL: API_URL,
            url: '/v2.2/films/premieres',
            headers: {
                'X-API-KEY': '70b23d2e-8d30-4bd6-ad84-b3addb39fa44',
                'Content-Type': 'application/json',
            },
            params: {
                year,
                month: months[month]
            }
        })
    },
    getFilm: async (kinopoiskId: number) => {
        return axios<IFilm>({
            url: `v2.2/films/${kinopoiskId}`,
            headers: {
                'X-API-KEY': '70b23d2e-8d30-4bd6-ad84-b3addb39fa44',
                'Content-Type': 'application/json',
            },
        })
    }
}