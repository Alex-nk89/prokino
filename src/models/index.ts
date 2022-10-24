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

export interface IFilm {
    kinopoiskId: number;
    nameRu?: string;
    nameEn?: string;
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl?: string;
    logoUrl?: string;
    reviewsCount: number;
    ratingGoodReview?: number;
    ratingGoodReviewVoteCount?: number;
    ratingKinopoisk?: number;
    ratingKinopoiskVoteCount?: number;
    ratingImdb?: number;
    ratingImdbVoteCount?: number;
    ratingFilmCritics?: number;
    ratingFilmCriticsVoteCount?: number;
    ratingAwait?: number;
    ratingAwaitCount?: number;
    ratingRfCritics?: number;
    ratingRfCriticsVoteCount?: number;
    webUrl:	string;
    year?: number;
    filmLength?: number;
    slogan?: string;
    description?: string;
    shortDescription?: string;
    editorAnnotation?: string;
    isTicketsAvailable: boolean;
    productionStatus?: string;
    type: string;
    ratingMpaa?: string;
    ratingAgeLimits?: string;
    hasImax?: boolean;
    has3D?: boolean;
    lastSync: string;
    countries: ICountry[];
    genres: IGenre[];
    startYear?: string;
    endYear?: number;
    serial?: boolean;
    shortFilm?: boolean;
    completed?: boolean;
}

export interface IImageResponseItem {
    imgUrl: string;
    previewUrl: string;
}

export interface IImageResponse {
    total: number;
    totalPages: number;
    items: IImageResponseItem[];
}

export type TypeImagesForFilm = 'STILL' | 'SHOOTING' | 'POSTER' | 'FAN_ART' | 'PROMO' | 'CONCEPT' | 'WALLPAPER' | 'COVER' | 'SCREENSHOT';
export type TypeFilm = 'FILM' | 'TV_SHOW' | 'VIDEO' | 'MINI_SERIES' | 'TV_SERIES' | 'UNKNOWN'

export interface IFilmSearchByFilters {
    kinopoiskId: number;
    imdbId?: string;
    nameRu?: string;
    nameEn?: string;
    nameOriginal?: string;
    countries: ICountry[];
    genres: IGenre[];
    ratingKinopoisk?: number;
    ratingImdb?: number;
    year?: number;
    type: TypeFilm;
    posterUrl: string;
    posterUrlPreview: string;
}

export interface IFilmSearchByFiltersResponse {
    total: number;
    totalPages: number;
    items: IFilmSearchByFilters[]
}

export interface IStaffResponse {
    staffId: number;
    nameRu?: string;
    nameEn?: string;
    description?: string;
    posterUrl: string;
    professionText: string;
    professionKey: 'WRITER' | 'OPERATOR' | 'EDITOR' | 'COMPOSER' | 'PRODUCER_USSR' | 'TRANSLATOR' | 'DIRECTOR' | 'DESIGN' | 'PRODUCER' | 'ACTOR' | 'VOICE_DIRECTOR' | 'UNKNOWN'
}

export interface IFact {
    text: string;
    type: 'FACT' | 'BLOOPER';
    spoiler: boolean;
}

export interface IFactResponse {
    total: number;
    items: IFact[];
}