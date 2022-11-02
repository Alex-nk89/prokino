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
