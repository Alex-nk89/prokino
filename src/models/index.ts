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