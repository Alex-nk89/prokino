import { FC } from 'react';
import { KinopoiskLogo } from '../logo/KinopoiskLogo';
import style from './filmRating.module.scss';

interface IFilmRating {
    ratingKinopoisk: number;
    ratingKinopoiskVoteCount: number;
}

export const FilmRating: FC = () => {
    return <div className={style.film_wrapper}>{<KinopoiskLogo />}</div>;
};
