export interface ICountry {
    country: string;
}

export interface IGenre {
    genre: string;
}

export interface IDetail {
    key: string;
    value: number | string | undefined;
}

export interface IDetails {
    details: IDetail[];
    title?: string;
}