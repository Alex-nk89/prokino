import { Details, IDetail } from '../details/Details';
import { Typography } from '@mui/material';
import { Poster } from '../poster/Poster';
import { IFilm } from '../../../models';
import style from './headerWithoutCover.module.scss';

interface IHeader {
    film?: IFilm;
}

export const HeaderWithoutCover: React.FC<IHeader> = ({ film }) => {
    const nameRu = film?.nameRu || '';
    const year = film?.year || '-';
    const posterUrl = film?.posterUrlPreview || '';
    const slogan = film?.slogan || '-';
    const countries =
        film?.countries.map((country) => country.country).join(', ') || '-';
    const genres = film?.genres.map((genre) => genre.genre).join(', ') || '-';
    const filmLength = film?.filmLength || '';
    const title = nameRu ? `${nameRu} (${year})` : 'Нет названия';

    const detailsList: IDetail[] = [
        { key: 'Год релиза', value: year },
        { key: 'Страна', value: countries },
        { key: 'Жанр', value: genres },
        { key: 'Слоган', value: slogan },
        { key: 'Продолжительность', value: `${filmLength} мин.` },
    ];

    return (
        <div className={style.cover}>
            <Typography variant='h3'>{title}</Typography>
            <div className={style.cover_details}>
                <Poster
                    src={posterUrl}
                    alt='Обложка фильма'
                    width={230}
                    height={330}
                />
                <Details details={detailsList} title='О фильме' />
            </div>
        </div>
    );
};
