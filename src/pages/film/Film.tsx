import { useMemo, FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { Typography } from '@mui/material';
import { FilmApi } from '../../api/api';

import { Error } from '../../component/common/error/Error';
import { HeaderWithoutCover } from '../../component/common/header-without-cover/HeaderWithoutCover';
import { InfoBlock } from '../../component/common/info-block/InfoBlock';
import { FilmImages } from '../../component/film-images/FilmImages';
import { FilmRating } from '../../component/film-rating/FilmRating';
import { TabsWrapper } from '../../component/common/tabs-wrapper/TabsWrapper';

import { IDetail } from '../../component/common/details/Details';

import style from './film.module.scss';

const tabsNames = ['Обзор', 'Кадры', 'Рейтинг'];

export const Film: FC = () => {
    const { kinopoiskId } = useParams();

    const {
        data: film,
        //isLoading,
        isError,
        error,
    } = useQuery(['film'], () => FilmApi.getFilm(Number(kinopoiskId)));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const description = (
        <Typography variant='body2'>
            {film?.data.description || 'Описание отсутствует'}
        </Typography>
    );

    const tabsContains = useMemo(() => {
        return [
            description,
            <FilmImages kinopoiskId={Number(kinopoiskId)} />,
            <FilmRating rating={film?.data} />,
        ];
    }, [description, film?.data, kinopoiskId]);

    const detailsList: IDetail[] = useMemo(
        () => [
            { key: 'Год релиза', value: film?.data.year || '-' },
            {
                key: 'Страна',
                value:
                    film?.data.countries
                        .map(({ country }) => country)
                        .join(', ') || '-',
            },
            {
                key: 'Жанр',
                value:
                    film?.data.genres.map(({ genre }) => genre).join(', ') ||
                    '-',
            },
            { key: 'Слоган', value: film?.data.slogan || '-' },
            {
                key: 'Продолжительность',
                value: `${film?.data.filmLength} мин.`,
            },
        ],
        [
            film?.data.countries,
            film?.data.filmLength,
            film?.data.genres,
            film?.data.slogan,
            film?.data.year,
        ]
    );

    const header = useMemo(() => {
        const title = `${film?.data.nameRu} (${film?.data.year})`;
        const posterUrl = film?.data.posterUrlPreview || '';

        return (
            <HeaderWithoutCover
                title={title}
                posterUrl={posterUrl}
                detailsList={detailsList}
                titleForDetail='О фильме'
            />
        );
    }, [
        detailsList,
        film?.data.nameRu,
        film?.data.posterUrlPreview,
        film?.data.year,
    ]);

    if (isError) {
        return <Error error={error as AxiosError} />;
    }

    return (
        <div className={style.film_wrapper}>
            <div className={style.film_wrapper_header}>{header}</div>

            <InfoBlock>
                <TabsWrapper
                    tabsNames={tabsNames}
                    tabsContains={tabsContains}
                />
            </InfoBlock>
        </div>
    );
};
