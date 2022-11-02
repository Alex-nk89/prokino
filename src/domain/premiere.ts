import { ICountry, IGenre } from "./common";

export interface IPremiere {
    kinopoiskId: number;
    nameRu?: string;
    nameEn?: string;
    year: number;
    posterUrl: string;
    posterUrlPreview: string;
    countries:	ICountry[];
    genres: IGenre[];
    duration?: number;
    premiereRu: string;
}

export interface IPremieres {
    total: number;
    items: IPremiere[]
}