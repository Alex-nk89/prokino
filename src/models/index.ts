export interface ICountry {
    country: string;
}

export interface IGenre {
    genre: string;
}

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