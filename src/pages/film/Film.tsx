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
        isError,
        error,
    } = useQuery(['film'], () => FilmApi.getFilm(Number(kinopoiskId)));
    const { data: staff } = useQuery(['actors', kinopoiskId], () =>
        FilmApi.getActorsInFilm(Number(kinopoiskId))
    );

    const filmLength = film?.data.filmLength || '-';
    const countries =
        film?.data.countries.map(({ country }) => country).join(', ') || '-';
    const genres =
        film?.data.genres.map(({ genre }) => genre).join(', ') || '-';
    const director =
        staff?.data
            .filter(({ professionKey }) => professionKey === 'DIRECTOR')
            .slice(0, 3)
            .map(({ nameRu }) => nameRu)
            .join(', ') || '-';
    const writers =
        staff?.data
            .filter(({ professionKey }) => professionKey === 'WRITER')
            .slice(0, 3)
            .map(({ nameRu }) => nameRu)
            .join(', ') || '-';
    const actors =
        staff?.data
            .filter(({ professionKey }) => professionKey === 'ACTOR')
            .slice(0, 5)
            .map(({ nameRu }) => nameRu)
            .join(', ') || '-';

    console.log(staff?.data);

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
            { key: 'Страна', value: countries },
            { key: 'Жанр', value: genres },
            { key: 'Слоган', value: film?.data.slogan || '-' },
            { key: 'Продолжительность', value: `${filmLength} мин.` },
            { key: 'Режиссер', value: director },
            { key: 'Сценарист', value: writers },
            { key: 'Актеры', value: actors },
        ],
        [
            film?.data.year,
            film?.data.slogan,
            countries,
            genres,
            filmLength,
            director,
            writers,
            actors,
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
