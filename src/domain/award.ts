export interface IAwardPersons {
    kinopoiskId: number;
    webUrl: string;
    nameRu?: string;
    nameEn?: string;
    sex: 'MALE' | 'FEMALE';
    posterUrl: string;
    growth?: number;
    birthday?: string;
    death?: string;
    age?: number;
    birthplace?: string;
    deathplace?: string;
    profession?: string;
}

export interface IAward {
    name: string;
    win: boolean;
    imageUrl?: string;
    nominationName?: string;
    year: number;
    persons: IAwardPersons[];
}

export interface IAwardResponse {
    total: number;
    items: IAward[];
}