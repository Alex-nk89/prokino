import { FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { Star, Groups, Reviews } from '@mui/icons-material';
import { KinopoiskLogo } from '../logo/KinopoiskLogo';
import { ImdbLogo } from '../logo/ImdbLogo';
import { IFilm } from '../../models';
import { SECONDARY_TEXT_COLOR } from '../../constants';
import style from './filmRating.module.scss';

interface IFilmRating {
    rating?: IFilm;
}

const logoStyle = {
    maxWidth: '2.5rem',
    maxHeight: '2.5rem',
    color: SECONDARY_TEXT_COLOR,
};

export const FilmRating: FC<IFilmRating> = ({ rating }) => {
    const ratingKinopoisk = rating?.ratingKinopoisk || '-';
    const ratingKinopoiskVoteCount = rating?.ratingKinopoiskVoteCount || 0;
    const ratingImdb = rating?.ratingImdb || '-';
    const ratingImdbVoteCount = rating?.ratingImdbVoteCount || 0;
    const ratingFilmCritics = rating?.ratingFilmCritics || '-';
    const ratingFilmCriticsVoteCount = rating?.ratingFilmCriticsVoteCount || 0;
    const ratingGoodReview = rating?.ratingGoodReview || '-';
    const reviewsCount = rating?.reviewsCount || 0;

    const ratingsList = useMemo(() => {
        const ratings = [
            {
                icon: <KinopoiskLogo />,
                title: 'Кинопоиск',
                rating: ratingKinopoisk,
                countVoices: ratingKinopoiskVoteCount,
                link: 'https://www.kinopoisk.ru/',
                target: '_blank',
            },
            {
                icon: <ImdbLogo />,
                title: 'IMDB',
                rating: ratingImdb,
                countVoices: ratingImdbVoteCount,
                link: 'https://www.imdb.com/',
                target: '_blank',
            },
            {
                icon: <Groups sx={logoStyle} />,
                title: 'Критики',
                rating: ratingFilmCritics,
                countVoices: ratingFilmCriticsVoteCount,
                link: '.',
                target: '_self',
            },
            {
                icon: <Reviews sx={logoStyle} />,
                title: 'Рецензии',
                rating: ratingGoodReview,
                countVoices: reviewsCount,
                link: '.',
                target: '_self',
            },
        ];

        return ratings.map(
            ({ icon, title, rating, countVoices, link, target }) => {
                const contain = (
                    <Box className={style.rating_wrapper__critic}>
                        {icon}
                        <Box
                            className={
                                style.rating_wrapper__critic__rating_details
                            }
                        >
                            <Box
                                className={
                                    style.rating_wrapper__critic__rating_details__voites
                                }
                            >
                                <Typography variant='body1'>
                                    {title}:{' '}
                                </Typography>
                                <Typography>{rating || '-'}</Typography>
                                <Star />
                            </Box>
                            <Box>
                                <Typography>{`(Всего голосов: ${
                                    countVoices || 0
                                })`}</Typography>
                            </Box>
                        </Box>
                    </Box>
                );

                if (target === '_blank') {
                    return (
                        <a href={link} target={target} key={title}>
                            {contain}
                        </a>
                    );
                } else {
                    return (
                        <NavLink to={link} key={title}>
                            {contain}
                        </NavLink>
                    );
                }
            }
        );
        //eslint-disable-next-line
    }, [rating]);

    return <Box className={style.rating_wrapper}>{ratingsList}</Box>;
};
