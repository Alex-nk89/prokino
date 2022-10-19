import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Star } from '@mui/icons-material';
import { IFilmSearchByFilters } from '../../models';
import style from './searchResultItem.module.scss';
import { InfoBlock } from '../common/info-block/InfoBlock';
import { MAIN_COLOR } from '../../constants';

interface ISearchResultItem {
    item: IFilmSearchByFilters;
}

export const SearchResultItem: FC<ISearchResultItem> = ({
    item: {
        kinopoiskId,
        posterUrlPreview,
        nameRu,
        ratingKinopoisk,
        countries,
        genres,
        year,
    },
}) => {
    return (
        <InfoBlock>
            <NavLink to={`/film/${kinopoiskId}`}>
                <div className={style.searchResultItem}>
                    <div className={style.searchResultItem__preview}>
                        <img src={posterUrlPreview} alt='preview' />
                    </div>
                    <div className={style.searchResultItem__decription}>
                        <Typography variant='h6'>{nameRu}</Typography>
                        <Typography variant='body2'>Год: {year}</Typography>
                        <Typography variant='body2'>
                            Страна:{' '}
                            {countries
                                .map((country) => country.country)
                                .join(', ')}
                        </Typography>
                        <Typography variant='body2'>
                            Жанр:{' '}
                            {genres.map((genre) => genre.genre).join(', ')}
                        </Typography>
                    </div>
                    <div className={style.searchResultItem__rating}>
                        <Star sx={{ color: MAIN_COLOR }} />
                        {ratingKinopoisk || '-'} / 10
                    </div>
                </div>
            </NavLink>
        </InfoBlock>
    );
};
