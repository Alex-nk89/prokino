import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { Typography, useMediaQuery, Box } from '@mui/material';

import { Error } from '../../component/common/error/Error';
import { HeaderPage } from '../../component/common/header-page/HeaderPage';
import { InfoBlock } from '../../component/common/info-block/InfoBlock';
import { TabsWrapper } from '../../component/common/tabs-wrapper/TabsWrapper';
import { FilmImages } from '../../component/film-images/FilmImages';
import { FilmRating } from '../../component/film-rating/FilmRating';
import { FilmFacts } from '../../component/film-facts/FilmFact';
import { Awards } from '../../component/common/awards/Awards';

import { useFilmData } from '../../hooks/useFilmData';
import { getDataListForFilmPage } from '../../utils/helpers/helpers';
import { IDetail } from '../../component/common/details-isDesktop/DetailsIsDesktop';

import style from './film.module.scss';

const tabsNames = ['Обзор', 'Кадры', 'Рейтинг', 'Факты и ошибки', 'Награды'];

export const Film: FC = () => {
    const { kinopoiskId } = useParams();
    const isDesktop = useMediaQuery('(min-width: 600px)');

    const { filmInfo, staffInfo, isFetching, isError, error } = useFilmData(
        Number(kinopoiskId)
    );

    const nameRu = filmInfo?.nameRu;
    const posterUrl = filmInfo?.posterUrl || '';
    const filmDescription = filmInfo?.description || 'Описание отсутствует.';
    const filmShortDescription = filmInfo?.shortDescription || '';

    const detailsList: IDetail[] = useMemo(
        () => getDataListForFilmPage(filmInfo, staffInfo),
        [filmInfo, staffInfo]
    );

    const title = useMemo(
        () =>
            isDesktop ? <Typography variant='h3'>{nameRu}</Typography> : null,
        [nameRu, isDesktop]
    );

    const headerPage = useMemo(
        () => (
            <HeaderPage
                isLoading={isFetching}
                titleForDetail={isDesktop ? 'О фильме' : nameRu}
                detailsList={detailsList}
                posterUrl={posterUrl}
                isFilmAndMobile={!isDesktop}
            />
        ),
        [isDesktop, isFetching, detailsList, nameRu, posterUrl]
    );

    const description = useMemo(
        () => (
            <Box>
                <Typography variant='body1'>{filmShortDescription}</Typography>
                <br />
                <Typography variant='body2'>{filmDescription}</Typography>
            </Box>
        ),
        [filmDescription, filmShortDescription]
    );

    const filmImages = useMemo(
        () => <FilmImages kinopoiskId={Number(kinopoiskId)} />,
        [kinopoiskId]
    );

    const filmRating = useMemo(
        () => <FilmRating rating={filmInfo} />,
        [filmInfo]
    );

    const filmFacts = useMemo(
        () => (
            <FilmFacts
                kinopoiskId={Number(kinopoiskId)}
                isDesktop={isDesktop}
            />
        ),
        [kinopoiskId, isDesktop]
    );

    const awards = useMemo(
        () => <Awards kinopoiskId={Number(kinopoiskId)} />,
        [kinopoiskId]
    );

    if (isError) {
        return <Error error={error as AxiosError} />;
    }

    if (isDesktop) {
        const tabsContains = [
            description,
            filmImages,
            filmRating,
            filmFacts,
            awards,
        ];

        return (
            <div className={style.film_wrapper}>
                {title}
                {headerPage}
                <InfoBlock>
                    <TabsWrapper
                        tabsNames={tabsNames}
                        tabsContains={tabsContains}
                    />
                </InfoBlock>
            </div>
        );
    }

    return (
        <div className={style.film_wrapper}>
            {headerPage}
            <InfoBlock
                isLoading={isFetching}
                title='Описание'
                action='open'
                maxHeightCSS={200}
            >
                {description}
            </InfoBlock>

            <InfoBlock title='Кадры'>{filmImages}</InfoBlock>
            <InfoBlock title='Рейтинг'>{filmRating}</InfoBlock>
            <InfoBlock title='Факты'>{filmFacts}</InfoBlock>
            <InfoBlock
                title='Награды'
                action='link'
                link={`/awards/${kinopoiskId}`}
            >
                {awards}
            </InfoBlock>
        </div>
    );
};
