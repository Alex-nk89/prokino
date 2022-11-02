export interface IStaffResponse {
    staffId: number;
    nameRu?: string;
    nameEn?: string;
    description?: string;
    posterUrl: string;
    professionText: string;
    professionKey: 'WRITER' | 'OPERATOR' | 'EDITOR' | 'COMPOSER' | 'PRODUCER_USSR' | 'TRANSLATOR' | 'DIRECTOR' | 'DESIGN' | 'PRODUCER' | 'ACTOR' | 'VOICE_DIRECTOR' | 'UNKNOWN'
}

export interface IPersonByNameResponse_item {
    kinopoiskId: number;
    webUrl: string;
    nameRu?: string;
    nameEn?: string;
    sex?: 'MALE'| 'FEMALE' | 'UNKNOWN';
    posterUrl: string;
}

export interface IPersonByNameResponse {
    total: number;
    items: IPersonByNameResponse_item[];
}